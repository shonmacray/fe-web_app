import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/create";
import Edit from "./pages/edit";
import List from "./pages/list";
import Todo from "./pages/todo";

function App() {
  return (
    <div>
      <div className="h-16 bg-black flex justify-center items-center">
        <p className="font-bold text-white">MyTodo</p>
      </div>
      <div className="w-[50%] mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="todo/:id" element={<Todo />} />
            <Route path="create" element={<Create />} />
            <Route path="edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
