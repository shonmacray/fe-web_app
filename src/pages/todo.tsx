import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface todoType {
  id: string;
  value: string;
}

function Todo() {
  const { id } = useParams();
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      const todo = todos.find((el: todoType) => el.id === id);

      setTodo(todo.value);
    }
  }, [id]);

  return (
    <div className="py-10 space-y-4">
      <p className="text-2xl">Your Todo</p>
      <p className="border h-40 px-8 py-2">{todo}</p>
    </div>
  );
}

export default Todo;
