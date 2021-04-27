import React from "react";

const AddTodo = ({ text, setText, handleAddText }) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary ml-2"
          onClick={handleAddText}
          disabled={!text}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
