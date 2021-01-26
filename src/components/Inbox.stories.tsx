import { Story } from "@storybook/react/types-6-0";
import React from "react";
import Inbox from "./Inbox";
import { store, } from "../store";
import { Provider } from 'react-redux'


export default {
  component: Inbox,
  //@ts-ignore
  //decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  title: "Inbox",
};

export const Template = () => (
  <Provider store={store}>
    <Inbox />
  </Provider>
);

// export const Default = Template.bind({});


