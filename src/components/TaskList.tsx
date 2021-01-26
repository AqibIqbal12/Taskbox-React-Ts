import React from "react";
import { TaskType } from "../stateType";
import { useSelector } from 'react-redux';
import Task from "./Task";


const TaskList = () => {
  
  const tasks = useSelector((state: TaskType[]) => state);
  // console.log(tasks)

  return (
    <>
    <h1 style={{textAlign:"center", margin:"10px 0px", fontSize:"3em", color:"white"}}>Tasks</h1>
    <div className="list">
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title}/>
      ))}
    </div>
    </>
    
    
  );
};

export default TaskList