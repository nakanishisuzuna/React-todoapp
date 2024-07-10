import React, { useState } from "react";

function EditForm({ currentTodo, setIsEditing, onUpdateTodo }) {
  const [title, setTitle] = useState(currentTodo.title);
  const [status, setStatus] = useState(currentTodo.status);
  const [details, setDetails] = useState(currentTodo.details);
  const [deadline, setDeadline] = useState(currentTodo.deadline);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTodo = {
      ...currentTodo,
      title,
      status,
      details,
      deadline,
    };

    onUpdateTodo(updatedTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="未着手">未着手</option>
        <option value="進行中">進行中</option>
        <option value="完了">完了</option>
      </select>
      <input
        type="text"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="詳細"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="期日"
      />
      <button type="submit">Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
}

export default EditForm;
