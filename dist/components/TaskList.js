import React from "react";
import { useSelector } from 'react-redux';
import Task from "./Task";
const TaskList = () => {
    const tasks = useSelector((state) => state);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { style: { textAlign: "center", margin: "10px 0px", fontSize: "3em", color: "white" } }, "Tasks"),
        React.createElement("div", { className: "list" }, tasks.map((task) => (React.createElement(Task, { key: task.id, id: task.id, title: task.title }))))));
};
export default TaskList;
