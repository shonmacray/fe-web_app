import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Todo from "../components/Todo";

interface todoType {
  id: string;
  value: string;
}

function List() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    try {
      const todosData = localStorage.getItem("todos");
      if (todosData) {
        setTodos(JSON.parse(todosData));
      }
    } catch {}
  }, []);

  const handleDeleteTodo = (id: string): any => {
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

  const PER_PAGE = 5;
  const offset = currentPage * PER_PAGE;
  const currentPageData = todos
    .slice(offset, offset + PER_PAGE)
    .map((todo: todoType) => (
      <Todo
        key={todo.id}
        todo={todo}
        onDeleteTodo={(i: string) => handleDeleteTodo(i)}
      />
    ));

  const pageCount = Math.ceil(todos.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }: any) => {
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <div className="flex justify-between items-center py-10">
        <p className="font-medium">Your Todos</p>
        <Button>
          <Link to="/create">Create New Todo</Link>
        </Button>
      </div>
      {currentPageData}
      {todos.length ? (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex justify-end items-center"}
          previousLinkClassName={"px-4 py-2 bg-gray-500 text-white"}
          nextLinkClassName={"px-4 py-2 bg-gray-500 text-white"}
          activeClassName={"bg-lime-500"}
          pageClassName={"px-4 py-1 border space-x-5"}
        />
      ) : null}
    </>
  );
}

export default List;
