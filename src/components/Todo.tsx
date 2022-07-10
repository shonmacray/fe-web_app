import { Link } from "react-router-dom";
import Button from "./Button";

interface TodoTypes {
  todo: { id: string; value: string };
  onDeleteTodo: (id: string) => string;
}

function Todo({ todo, onDeleteTodo }: TodoTypes) {
  return (
    <div
      key={todo.id}
      className="flex justify-between items-center px-8 border mb-5 py-3"
    >
      <div className="w-[50%]">
        <Link to={`todo/${todo.id}`}>
          <p>{todo.value}</p>
        </Link>
      </div>

      <div className="space-x-5">
        <Button color="red" onClick={() => onDeleteTodo(todo.id)}>
          <p>delete</p>
        </Button>
        <Button color="green">
          <Link to={`edit/${todo.id}`}>update</Link>
        </Button>
      </div>
    </div>
  );
}

export default Todo;
