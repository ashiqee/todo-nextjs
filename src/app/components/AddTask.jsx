"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    console.log(text);
  };

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <button type="submit" className="btn btn-secondary">
          {" "}
          Add New Task <FaPlus />{" "}
        </button>

        <input className="input input-success" type="text" name="text" />
      </form>
    </div>
  );
};

export default AddTask;
