import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Watching IPL",
      isCompleted: true,
    },
    {
      id: 2,
      todo: "Reading Books",
      isCompleted: false,
    },
    {
      id: 3,
      todo: "Playing COD",
      isCompleted: true,
    },
  ]);

  const [editTodoData, setEditTodoData] = useState("");
  const [editTodoId, setEditTodoId] = useState("");

  //   ADD TODO Method
  const handleAddText = () => {
    const newTodo = {
      id: Date.now(),
      todo: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  //   iscompleted method
  const handleIsCompleted = (id) => {
    // console.log(id);
    const updatedTodo = todos.map((currentTodo) => {
      //   console.log(currentTodo);
      if (id === currentTodo.id) {
        currentTodo.isCompleted = !currentTodo.isCompleted;
      }
      return currentTodo;
    });
    console.log(updatedTodo);
    setTodos(updatedTodo);
  };

  // Delete Todo
  const handleDelete = (id) => {
    // console.log(id);
    const filteredTodo = todos.filter((currentTodo) => {
      //   console.log("userId:", id, "currentTodo:", currentTodo.id);
      if (id === currentTodo.id) {
        return;
      }
      return currentTodo;
    });
    setTodos(filteredTodo);
  };

  // UpdateTodo

  const handleUpdateTodo = () => {
    const updateTodo = todos.map((currentTodo) => {
      if (currentTodo.id === editTodoId) {
        currentTodo.todo = editTodoData;
      }
      return currentTodo;
    });
    setTodos(updateTodo);
    document.getElementById("closeEditModal").click();
  };

  return (
    <div className="card shadow">
      <div className="card-header">
        <AddTodo text={text} setText={setText} handleAddText={handleAddText} />
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {todos.map((currentTodo) => {
            return (
              <TodoItem
                currentTodo={currentTodo}
                handleIsCompleted={handleIsCompleted}
                setEditTodoId={setEditTodoId}
                setEditTodoData={setEditTodoData}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
      {/* Modal */}
      <div className="modal" tabindex="-1" id="editModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
              <button
                type="button"
                className="btn-close"
                id="closeEditModal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                value={editTodoData}
                onChange={(e) => setEditTodoData(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateTodo}
              >
                Update Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
