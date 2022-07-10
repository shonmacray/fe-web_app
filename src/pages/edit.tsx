import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

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
    <div className="py-10 space-y-8">
      <p className="text-lg">Edit Todo</p>
      <textarea
        className="w-full h-40 border pl-5 pt-2"
        placeholder="type todo description"
        name="todo"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="flex justify-end">
        <Button onClick={handleClick}>
          <p>Update Todo</p>
        </Button>
      </div>
    </div>
  );
}

export default Edit;
