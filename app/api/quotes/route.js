import QuoteModel from "@/models/quotes";
import conMongoDb from "@/utilities/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await conMongoDb();
  await QuoteModel.create({ title, description });
  return NextResponse.json({ message: "Quote Created" }, { status: 201 });
}

export async function GET() {
  await conMongoDb();
  const Quotes = await QuoteModel.find();
  return NextResponse.json({ Quotes });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await conMongoDb();
  await QuoteModel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Quote Delete" }, { status: 200 });
}
