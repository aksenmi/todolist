import { BiCheckCircle, BiCircle } from "react-icons/bi";

import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <BiCheckCircle
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <BiCircle
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
