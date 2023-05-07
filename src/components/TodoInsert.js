import React, { useEffect, useState } from "react";
import { BiArchiveOut } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import "./TodoInsert.css";

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
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

  useEffect(() => {
    // useEffect 함수 알아보기
    if (selectedTodo !== null) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="please type"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <BiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <BsFillTrashFill
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <BiArchiveOut />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
