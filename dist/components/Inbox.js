import React, { useState } from "react";
import { useSelector } from "react-redux";
import { store, addTask } from "../store";
import { Provider } from 'react-redux';
import TaskList from "./TaskList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Inbox = () => {
    const tasks = useSelector((state) => state);
    const [value, setValue] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        if (!value) {
            alert("Field should not be empty!!");
            return false;
        }
        let newTask = {
            id: Math.floor(Math.random() * 100000000),
            title: value,
        };
        store.dispatch(addTask(newTask));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "navBar" },
            React.createElement("h1", { style: { fontSize: "3em", color: "white" } }, "Taskbox"),
            React.createElement("div", null,
                React.createElement("input", { type: "text", id: "taskName", onChange: (e) => setValue(e.target.value), name: "taskName", value: value, placeholder: "Task Name", className: "txtbox" }),
                React.createElement("button", { className: "btn", onClick: handleClick }, "Create New Task"))),
        tasks.length === 0 ?
            React.createElement("div", { className: "msg_wrapper" },
                React.createElement(FontAwesomeIcon, { icon: faCheck, size: "3x" }),
                React.createElement("div", { className: "title-message" }, "You have no tasks"),
                React.createElement("div", { className: "subtitle-message" }, "Sit back and relax"))
            :
                React.createElement("section", { className: "section" },
                    React.createElement(Provider, { store: store },
                        React.createElement(TaskList, null))),
        React.createElement("footer", { className: "footer" },
            React.createElement("p", null, "developed by aqibIqbal"))));
};
export default Inbox;
