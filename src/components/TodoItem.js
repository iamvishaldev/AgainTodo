import React from "react";

const TodoItem = ({
  currentTodo,
  handleIsCompleted,
  setEditTodoId,
  setEditTodoData,
  handleDelete,
}) => {
  return (
    <div>
      <li className="list-group-item " key={currentTodo.id}>
        <div className="d-flex justify-content-between">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={currentTodo.isCompleted}
            onChange={() => handleIsCompleted(currentTodo.id)}
          />
          <span className={currentTodo.isCompleted ? "completed" : null}>
            {currentTodo.todo}
          </span>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() => {
              setEditTodoId(currentTodo.id);
              setEditTodoData(currentTodo.todo);
            }}
          >
            <i className="far fa-edit"></i>
          </button>
          <i
            className="fas fa-minus-circle"
            onClick={() => handleDelete(currentTodo.id)}
          ></i>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
