import React, { useEffect, useState } from "react";
import { BiArchiveOut } from "react-icons/bi";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onubmit={onSubmit}>
        <input
          placeholder="please type"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit">
          <BiArchiveOut />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
