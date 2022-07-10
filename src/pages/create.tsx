import { useState } from "react";
import { v4 as uuid4 } from "uuid";

function Create() {
  const [value, setValue] = useState("");

  const handleChange = (text: string) => {
    setValue(text);
  };

  const handleClick = () => {
    const store = localStorage.getItem("todos");
    const todoId = uuid4();
    const newTodo = { id: todoId, value };
    if (store) {
      const todoStore = JSON.parse(store);
      const newStore = [newTodo, ...todoStore];

      localStorage.setItem("todos", JSON.stringify(newStore));
    } else {
      localStorage.setItem("todos", JSON.stringify([newTodo]));
    }
    setValue("");
  };

  return (
    <div className="py-10 space-y-8">
      <p className="text-lg">Create New Todo</p>
      <textarea
        className="w-full h-40 border pl-5 pt-2"
        placeholder="type todo"
        name="todo"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          onClick={handleClick}
          className="bg-blue-500 px-10 py-3"
          type="submit"
        >
          <p className="text-white">Save Todo</p>
        </button>
      </div>
    </div>
  );
}

export default Create;
