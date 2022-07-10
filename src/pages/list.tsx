import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

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
    <>
      <div className="flex justify-between items-center py-10">
        <p className="font-medium">Your Todos</p>
        <Button>
          <Link to="/create">Create New Todo</Link>
        </Button>
      </div>

      {todos?.map((todo: todoType) => (
        <div
          key={todo.id}
          className="flex justify-between items-center px-8 border mb-5 h-20"
        >
          <Link to={`todo/${todo.id}`}>
            <p>{todo.value}</p>
          </Link>
          <div className="space-x-5">
            <Button color="red" onClick={() => handleDeleteTodo(todo.id)}>
              <p>delete</p>
            </Button>
            <Button color="green">
              <Link to={`edit/${todo.id}`}>update</Link>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
