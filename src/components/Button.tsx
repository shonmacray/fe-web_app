import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
}
function Button({ children, onClick, color = "blue" }: ButtonProps) {
  const bgColor =
    color === "red"
      ? "bg-red-500"
      : color === "green"
      ? "bg-green-500"
      : "bg-blue-500";
  return (
    <button onClick={onClick} className={`${bgColor} px-10 py-3 text-white`}>
      {children}
    </button>
  );
}

export default Button;
