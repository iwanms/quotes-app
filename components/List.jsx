import Link from "next/link";

const List = ({ api }) => {
  return (
    <>
      {api.map((quote, index) => {
        return (
          <div
            className="flex justify-between p-4 border border-slate-300 my-3 gap-5 items-start"
            key={quote._id}
          >
            <div>
              <h2 className="font-bold text-2xl">{quote.title}</h2>
              <div>{quote.description}</div>
            </div>
            <div className="flex gap-2">
              <Link href={`/editQuote/${quote._id}`}></Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
