
import React from "react";
import Task, { TaskProps } from "./Task";


export default {
  component: Task,
  title: "Task",
};

 // export const abc = (args: TaskProps) => <Task {...args}/>;
     export const Template = () => (<Task id={1} title="Test_Task" />);


// export const Default = Template.bind({});
// Template.args = {
  // task: {
    // id: 1,
    // title: "Test Task",
  // },
// };
