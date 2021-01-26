import React from "react";
import TaskList from "./TaskList";
import { store, } from "../store";
import { Provider } from 'react-redux'


export default {
  component: TaskList,
  title: "TaskList",
  decorators: [ 
    (story: any) => <div style={{marginTop:"100px"}}>{story()}</div>,
  ],
};


export const Template = () => (
  <Provider store={store}>
    <TaskList />
  </Provider>
);

