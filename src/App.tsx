import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/create";
import Edit from "./pages/edit";
import List from "./pages/list";
import Todo from "./pages/todo";

function App() {
  return (
    <div>
      <p>Header</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="todo/:id" element={<Todo />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
