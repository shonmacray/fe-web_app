import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface todoType {
  id: string;
  value: string;
}

function Edit() {
  const { id } = useParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      const todo = todos.find((el: todoType) => el.id === id);

      setValue(todo.value);
    }
  }, [id]);

  const handleChange = (text: string) => {
    setValue(text);
  };

  const handleClick = () => {
    const store = localStorage.getItem("todos");

    if (store) {
      const newTodo = { id, value };
      const todoStore = JSON.parse(store);

      const index = todoStore.findIndex((el: todoType) => el.id === id);
      // delete old todo
      todoStore.splice(index, 1);

      const newStore = [newTodo, ...todoStore];

      localStorage.setItem("todos", JSON.stringify(newStore));
    }

    setValue("");
  };

  return (
    <div>
      <p>Edit</p>
      <textarea
        placeholder="type todo description"
        name="todo"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 px-10 py-3"
        type="submit"
      >
        <p className="text-white">Update Todo</p>
      </button>
    </div>
  );
}

export default Edit;
