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

  const handleDeleteTodo = (id: string) => {
    const todosData = localStorage.getItem("todos");
    if (todosData) {
      const todos = JSON.parse(todosData);
      const index = todos.findIndex((el: todoType) => el.id === id);
      //   delete todo
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodos(todos);
    }
  };

  return (
    <div>
      <Link to="/create" className="bg-green-400">
        Add Todo
      </Link>
      <div>
        <p>Your todos</p>

        {todos?.map((todo: todoType) => (
          <div key={todo.id}>
            <p>{todo.value}</p>

            <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
