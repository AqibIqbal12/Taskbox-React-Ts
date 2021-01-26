import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TaskType } from "../stateType";
import { store, addTask } from "../store";
import { Provider } from 'react-redux'
import TaskList from "./TaskList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Inbox = () => {

  const tasks = useSelector((state: TaskType[]) => state);
  const [value, setValue] = useState('');

  const handleClick = (e: any) => {
    e.preventDefault();
    if (!value) {
      alert("Field should not be empty!!")
      return false;
    }

    let newTask = {
      id: Math.floor(Math.random() * 100000000),
      title: value,
    }
    store.dispatch(addTask(newTask))
  }

  return (
    <>
      <nav className="navBar">
        <h1 style={{ fontSize: "3em", color: "white" }}>Taskbox</h1>
        <div>
          <input
            type="text"
            id="taskName"
            onChange={(e) => setValue(e.target.value)}
            name="taskName"
            value={value}
            placeholder="Task Name"
            className="txtbox" />
          <button className="btn" onClick={handleClick}>Create New Task</button>
        </div>
      </nav>
      {tasks.length === 0 ?
        <div className="msg_wrapper">
          <FontAwesomeIcon icon={faCheck} size="3x" />
          <div className="title-message">You have no task</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
        :
        <section className="section">
          <Provider store={store}>
          <TaskList />
          </Provider>
        </section>
      }
      <footer className="footer">
        <p>developed by aqibIqbal</p>
      </footer>
    </>
  );
};

export default Inbox;
