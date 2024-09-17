import PlusIcon from "@assets/plus-icon.svg?react";
import { useAppDispatch } from "@store/hooks";
import { addNewItem } from "@store/todos/todoSlice";
import { FormEvent, useState } from "react";

const Input = () => {
  let dispatch = useAppDispatch();
  let [task, setTask] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="relative mb-12 ">
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          className="p-4 px-10 caret-blue-600  outline-none  w-full rounded-md"
          type="text"
          placeholder="Type The New Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="absolute z-10 p-2 rounded-md right-[8px] top-1/2 -translate-y-1/2 text-white submit bg-blue-600 cursor-pointer hover:bg-blue-500"
          onClick={() => {
            if (!task) {
              return;
            }
            dispatch(addNewItem({ name: task, state: false }));
          }}
          type="submit"
        >
          <PlusIcon />
        </button>
      </form>
    </div>
  );
};

export default Input;
