import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("未着手");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTodo = {
      id: new Date().getTime(),
      title,
      status,
      details,
      deadline, 
    };

    onAddTodo(newTodo);
    setTitle("");
    setStatus("未着手");
    setDetails("");
    setDeadline(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タイトル"
      />
      <br />
      <input
        type="text"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="詳細"
      />
      <br />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="未着手">未着手</option>
        <option value="進行中">進行中</option>
        <option value="完了">完了</option>
      </select>
      <p>期日:</p>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="期日"
      />
<br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
