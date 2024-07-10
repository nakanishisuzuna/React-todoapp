import React, { useState } from "react";
import EditForm from "./EditForm";

function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDeleteTodo(todo.id);
  };

  const handleUpdateTodo = (updatedTodo) => {
    onUpdateTodo(updatedTodo);
    setIsEditing(false);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "未着手":
        return { backgroundColor: "lightgray" };
      case "進行中":
        return { backgroundColor: "lightblue" };
      case "完了":
        return { backgroundColor: "lightgreen" };
      default:
        return {};
    }
  };

  return (
    <li key={todo.id} style={getStatusStyle(todo.status)}>
      {!isEditing ? (
        <>
          <div>
            <strong>ID: {todo.id}</strong> - {todo.title} - {todo.status}
          </div>
          <div>{todo.details}</div>
          <div>{todo.content}</div>
          <div>Created: {new Date(todo.createdDate).toLocaleString()}</div>
          <div>Updated: {new Date(todo.updatedDate).toLocaleString()}</div>
          <div>Deadline: {new Date(todo.deadline).toLocaleDateString()}</div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      ) : (
        <EditForm
          currentTodo={todo}
          setIsEditing={setIsEditing}
          onUpdateTodo={handleUpdateTodo}
        />
      )}
    </li>
  );
}

export default TodoItem;
