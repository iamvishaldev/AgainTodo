import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "watching movie",
      isCompleted: true,
    },
    {
      id: 2,
      todo: "playing game",
      isCompleted: false,
    },
    {
      id: 3,
      todo: "coding",
      isCompleted: true,
    },
  ]);

  const [editTodoId, setEditTodoId] = useState("");
  const [editTodoData, setEditTodoData] = useState("");

  const handleInput = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  // Add Todo
  const handleAddText = () => {
    const newTodos = {
      id: Date.now(),
      todo: text,
      isCompleted: false,
    };
    // console.log(newTodos);
    setTodos([...todos, newTodos]);
    setText("");
  };

  // const handleAddText = () => {
  //   const newTodos = {
  //     id: Date.now(),
  //     todo: text,
  //     isCompleted: false,
  //   };
  //   // console.log(newTodos);
  //   setTodos([...todos, newTodos]);
  //   setText("");
  // };

  const completeTodo = (id) => {
    const updatedTodo = todos.map((currentTodo) => {
      if (currentTodo.id === id) {
        currentTodo.isCompleted = !currentTodo.isCompleted;
      }
      return currentTodo;
    });
    console.log("updatedTodo: ", updatedTodo);
    setTodos(updatedTodo);
  };

  // const completeTodo = (id) => {
  //   const updateTodo = todos.map((currentTodo) => {
  //     console.log(
  //       "user id:",
  //       id,
  //       "currentTodo:",
  //       currentTodo.id,
  //       currentTodo.todo
  //     );
  //     if (currentTodo.id === id) {
  //       currentTodo.isCompleted = !currentTodo.isCompleted;
  //     }
  //     return currentTodo;
  //   });
  //   setTodos(updateTodo);
  // };

  //   Delete Todo
  // const handleDelete = (id) => {
  //   const filteredTodo = todos.filter((currentTodo) => {
  //     console.log("Uid: ", id, "Todoid", currentTodo.id, currentTodo.todo);
  //     if (id == currentTodo.id) {
  //       return;
  //     }
  //     return currentTodo;
  //   });
  //   setTodos(filteredTodo);

  //   console.log(filteredTodo);
  // };

  const handleDelete = (id) => {
    const filteredTodo = todos.filter((currentTodo) => {
      // console.log("Uid: ", id, "Todoid", currentTodo.id, currentTodo.todo);
      if (id == currentTodo.id) {
        return;
      }
      return currentTodo;
    });
    // console.log(currentTodo);
    setTodos(filteredTodo);
    console.log(filteredTodo);
  };

  const updateTodoData = () => {
    const updatedTodo = todos.map((currentTodo) => {
      if (currentTodo.id === editTodoId) {
        currentTodo.todo = editTodoData; //override
      }
      return currentTodo;
    });
    setTodos(updatedTodo);
    document.getElementById("closeEditModal").click();
  };

  return (
    <div className="card shadow">
      <div className="card-header">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add Task"
            value={text}
            onChange={(e) => handleInput(e)}
          />
          <button
            type="button"
            className="btn btn-primary ml-2"
            onClick={() => handleAddText()}
            disabled={!text}
          >
            Add Task
          </button>
        </div>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {todos.map((data) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={data.id}
              >
                <div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={data.isCompleted}
                    onChange={() => completeTodo(data.id)}
                  />
                  <span className={data.isCompleted ? `completed` : null}>
                    {data.todo}
                  </span>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={() => {
                    setEditTodoId(data.id);
                    setEditTodoData(data.todo);
                  }}
                >
                  <i class="fas fa-edit"></i>
                </button>
                <i
                  className="fas fa-trash"
                  onClick={() => handleDelete(data.id)}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Modal */}
      <div
        class="modal fade"
        id="editModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                class="btn-close"
                id="closeEditModal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                value={editTodoData}
                onChange={(event) => setEditTodoData(event.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={updateTodoData}
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
