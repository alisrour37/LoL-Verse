import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import singlevideoreducer from "../reducer/singlevideoreducer";
import UserProfileApp from "./UserProfileApp";

export default function Userprofile() {
  const store = createStore(singlevideoreducer);
  return (
    <Provider store={store}>
      <UserProfileApp />
    </Provider>
  );
}
