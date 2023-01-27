import React, { useState } from "react";
// import { IconName } from "react-icons/bs";

export default function Input({ setSearch, search, onFilter }) {
  return (
    <div className="container mt-5">
      <input
        type="text"
        placeholder="Search..."
        className="from-control w-50"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <i class="bi bi-search" onClick={onFilter}></i>
      <div className="mt-5 mb-5 ml-5 d-flex">
        <p>only product is in stock</p>
      </div>
    </div>
  );
}
