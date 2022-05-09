import useTheme from "../hooks/useTheme";
import { useTransactions } from "../hooks/useTransactions";
import delTransaction from "../services/delTransaction";

const CardCategory = ({ transaction }) => {
  const { hadleSetTransactionDelete } = useTransactions();
  const { changeTheme } = useTheme();

  const { type, amount, date, categorys, id } = transaction;

  const { image, name } = categorys;

  return (
    <div
      className={`${
        changeTheme ? "bg-slate-900" : "bg-white"
      } w-[26em] mb-20 m-auto   rounded-md p-8 shadow-lg`}
    >
      <div className="flex gap-4">
        <div>
          <img src={image} alt={name} className="w-16" />
        </div>
        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <h2
                className={`${
                  changeTheme ? "text-white" : ""
                } font-bold  uppercase`}
              >
                {type}
              </h2>
              <span
                className={`${
                  changeTheme ? "text-slate-100" : "text-slate-500"
                } `}
              >
                {date}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="rounded-sm bg-indigo-500 px-4 font-bold text-white transition-colors hover:bg-indigo-600"
              >
                Edit
              </button>
              <button
                type="button"
                className="bg-red-500 rounded-sm px-4 font-bold text-white transition-colors hover:bg-red-600"
                onClick={() =>
                  delTransaction(id).then((data) =>
                    hadleSetTransactionDelete(data)
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
          <div className="mt-4 flex w-full justify-end font-medium">
            <p
              className={`${
                type === "expense" ? "text-red-500" : "text-blue-500"
              } text-3xl`}
            >
              COL ${amount}
            </p>
          </div>
          <div className="mt-2 h-2 w-full rounded-md bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
