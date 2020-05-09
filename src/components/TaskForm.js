import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";
const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form sumbistion
    if (editItem === null) {
      addTask(title);
    } else {
      editTask(title, editItem.id);
    }
    setTitle("");
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        onChange={handleChange}
        type='text'
        value={title}
        className='task-input'
        placeholder='Add Task'
        required
      />
      <div className='buttons'>
        <button className='btn add-task-btn' type='submit'>
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button className='btn clear-btn' onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
