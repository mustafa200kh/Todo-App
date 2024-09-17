import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  toggleItemState,
  deleteItem,
  clearCompleted,
} from "@store/todos/todoSlice";
import { useEffect, useState } from "react";
const TodoList = () => {
  let [countRemaining, setCountRemaining] = useState<number>(0);

  let [renderList, setRenderList] = useState<"All" | "Active" | "Complete">(
    "All"
  );

  const dispatch = useAppDispatch();

  const { todolist } = useAppSelector((state) => state.todo);

  const remainingToDos = () => {
    let count = todolist.reduce((accumlator, element) => {
      if (!element.state) {
        return accumlator + 1;
      } else {
        return accumlator;
      }
    }, 0);
    setCountRemaining(count);
  };

  useEffect(() => {
    remainingToDos();
  }, [dispatch, todolist]);

  const renderedMenu = todolist.map((el) => {
    if (renderList === "Active") {
      if (!el.state) {
        return (
          <div
            key={el.name}
            className="p-4 border-b-[1px] border-solid border-b-[#ccc] dark:border-[#666]"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span
                  className={`w-[22px] h-[22px] border-[1px] border-solid border-[#ccc] dark:border-[#666] rounded-full hover:border-blue-600 cursor-pointer ${
                    el.state && "bg-blue-600"
                  }`}
                  onClick={() => dispatch(toggleItemState(el.name))}
                ></span>
                <p
                  className={`dark:text-textDarkMain font-semibold truncate ${
                    el.state && "line-through"
                  }`}
                >
                  {el.name}
                </p>
              </div>
              <span
                className="dark:text-textDarkMain cursor-pointer text-xl  hover:text-blue-600"
                onClick={() => {
                  dispatch(deleteItem(el.name));
                }}
              >
                X
              </span>
            </div>
          </div>
        );
      }
    }
    if (renderList === "Complete") {
      if (el.state === true) {
        return (
          <div
            key={el.name}
            className="p-4 border-b-[1px] border-solid border-b-[#ccc] dark:border-[#666]"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span
                  className={`w-[22px] h-[22px] border-[1px] border-solid border-[#ccc] dark:border-[#666] rounded-full hover:border-blue-600 cursor-pointer ${
                    el.state && "bg-blue-600"
                  }`}
                  onClick={() => dispatch(toggleItemState(el.name))}
                ></span>
                <p
                  className={`dark:text-textDarkMain font-semibold truncate ${
                    el.state && "line-through"
                  }`}
                >
                  {el.name}
                </p>
              </div>
              <span
                className="dark:text-textDarkMain cursor-pointer text-xl  hover:text-blue-600"
                onClick={() => {
                  dispatch(deleteItem(el.name));
                }}
              >
                X
              </span>
            </div>
          </div>
        );
      }
    }
    if (renderList === "All") {
      return (
        <div
          key={el.name}
          className="p-4 border-b-[1px] border-solid border-b-[#ccc] dark:border-[#666]"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <span
                className={`w-[22px] h-[22px] border-[1px] border-solid border-[#ccc] dark:border-[#666] rounded-full hover:border-blue-600 cursor-pointer ${
                  el.state && "bg-blue-600"
                }`}
                onClick={() => dispatch(toggleItemState(el.name))}
              ></span>
              <p
                className={`dark:text-textDarkMain font-semibold truncate ${
                  el.state && "line-through"
                }`}
              >
                {el.name}
              </p>
            </div>
            <span
              className="dark:text-textDarkMain cursor-pointer text-xl  hover:text-blue-600"
              onClick={() => {
                dispatch(deleteItem(el.name));
              }}
            >
              X
            </span>
          </div>
        </div>
      );
    }
  });

  const msg =
    renderList === "All"
      ? "There is no tasks on your to do list"
      : renderList === "Active"
      ? "No active tasks now"
      : renderList === "Complete"
      ? "No Completed tasks yet!"
      : "empty";
  return (
    <div className="bg-white dark:bg-[#25273c] border-[1px] border-solid border-[#ccc] dark:border-[#666] rounded-md">
      {/* items */}
      <div className="m-h-[400px] h-[400px] md:m-h-[300px] md:h-[300px] overflow-auto relative">
        {renderedMenu.length ? (
          renderedMenu
        ) : (
          <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold dark:text-textDarkSecond">
            {msg}
          </div>
        )}
      </div>
      {/* Navigation Links  */}
      <div className="navigation flex justify-between items-center p-3 font-semibold">
        {/* items Left */}
        <div className="hidden md:block dark:text-textDarkSecond">
          {countRemaining} Items Left
        </div>
        {/* Filteration */}
        <div className="flex items-center gap-5 mx-auto">
          <span
            className={`inline-block hover:text-blue-600 cursor-pointer ${
              renderList === "All"
                ? " text-blue-600 dark:text-blue-600"
                : "dark:text-textDarkSecond"
            } `}
            onClick={() => setRenderList("All")}
          >
            All
          </span>
          <span
            className={`inline-block  hover:text-blue-600 cursor-pointer ${
              renderList === "Active"
                ? "text-blue-600 dark:text-blue-600"
                : "dark:text-textDarkSecond"
            }`}
            onClick={() => setRenderList("Active")}
          >
            Active
          </span>
          <span
            className={`inline-block  hover:text-blue-600 cursor-pointer ${
              renderList === "Complete"
                ? "text-blue-600 dark:text-blue-600"
                : "dark:text-textDarkSecond"
            }`}
            onClick={() => setRenderList("Complete")}
          >
            Completed
          </span>
        </div>
        {/* Clearing Completed */}
        <div className="">
          <p
            className="hidden md:block dark:text-textDarkSecond hover:text-blue-600 cursor-pointer"
            onClick={() => {
              dispatch(clearCompleted());
            }}
          >
            Clear Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
