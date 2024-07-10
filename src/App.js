import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import FilterSortForm from "./FilterSortForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [filter, setFilter] = useState({ id: "", status: "", deadline: "" });
  const [sort, setSort] = useState({ field: "", order: "asc" });

  const handleAddTodo = (newTodo) => {
    const now = new Date();
    const todoWithDates = {
      ...newTodo,
      id: nextId, 
      createdDate: now,
      updatedDate: now,
    };
    setTodos([...todos, todoWithDates]);
    setNextId(nextId + 1); 
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (updatedTodo) => {
    const now = new Date();
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? { ...updatedTodo, updatedDate: now } : todo
    );
    setTodos(updatedTodos);
  };

  const getFilteredSortedTodos = () => {
    let filteredTodos = [...todos];

    if (filter.id) {
      filteredTodos = filteredTodos.filter((todo) => todo.id === parseInt(filter.id));
    }
    if (filter.status) {
      filteredTodos = filteredTodos.filter((todo) => todo.status === filter.status);
    }
    if (filter.deadline) {
      filteredTodos = filteredTodos.filter((todo) => {
        const todoDeadline = new Date(todo.deadline).toLocaleDateString();
        const filterDeadline = new Date(filter.deadline).toLocaleDateString();
        return todoDeadline === filterDeadline;
      });
    }

    if (sort.field) {
      filteredTodos.sort((a, b) => {
        if (sort.order === "asc") {
          return a[sort.field] > b[sort.field] ? 1 : -1;
        } else {
          return a[sort.field] < b[sort.field] ? 1 : -1;
        }
      });
    }

    return filteredTodos;
  };

  return (
    <div className="App">
      <h1>TODO List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <FilterSortForm 
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <TodoList
        todos={getFilteredSortedTodos()}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
}


export default App;
