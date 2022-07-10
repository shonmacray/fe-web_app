import { Link } from "react-router-dom";

function List() {
  return (
    <div>
      <Link to="/create" className="bg-green-400">
        Add Todo
      </Link>
      <div>List of todos</div>
    </div>
  );
}

export default List;
