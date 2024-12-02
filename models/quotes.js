import { Schema, model, models } from "mongoose";

const quote = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const QuoteModel = models.quote || model("quote", quote);

export default QuoteModel;
