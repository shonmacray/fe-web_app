import { useState } from "react";
import { v4 as uuid4 } from "uuid";

function Create() {
  const [value, setValue] = useState("");

  const handleChange = (text: string) => {
    setValue(text);
  };

  const handleClick = () => {
    const todoId = uuid4();
    localStorage.setItem(todoId, value);
    setValue("");
  };

  return (
    <div>
      <textarea
        placeholder="type todo description"
        name="todo"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 px-10 py-3"
        type="submit"
      >
        <p className="text-white">Save Todo</p>
      </button>
    </div>
  );
}

export default Create;
