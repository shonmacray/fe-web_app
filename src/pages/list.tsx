import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface todoType {
  id: string;
  value: string;
}

function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const todosData = localStorage.getItem("todos");
      if (todosData) {
        setTodos(JSON.parse(todosData));
      }
    } catch {}
  }, []);

  return (
    <div>
      <Link to="/create" className="bg-green-400">
        Add Todo
      </Link>
      <div>
        <p>Your todos</p>

        {todos?.map((todo: todoType) => (
          <p key={todo.id}>{todo.value}</p>
        ))}
      </div>
    </div>
  );
}

export default List;
