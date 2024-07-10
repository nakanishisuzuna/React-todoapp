import React from "react";

function FilterSortForm({ filter, setFilter, sort, setSort }) {
  if (!filter) {
    filter = { id: "", status: "", deadline: "" };
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    setSort((prevSort) => ({ ...prevSort, [name]: value }));
  };

  return (
    <div>
      <h2>Filter & Sort</h2>
      <div>
        <input
          type="text"
          name="id"
          value={filter.id}
          onChange={handleFilterChange}
          placeholder="Filter by ID"
        />
        <input
          type="date"
          name="deadline"
          value={filter.deadline}
          onChange={handleFilterChange}
          placeholder="Filter by Deadline"
        />
        <select name="status" value={filter.status} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="未着手">未着手</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </select>
      </div>
      <div>
        <select name="field" value={sort.field} onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="id">ID</option>
          <option value="status">Status</option>
        </select>
        <select name="order" value={sort.order} onChange={handleSortChange}>
          <option value="asc">昇順</option>
          <option value="desc">降順</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSortForm;