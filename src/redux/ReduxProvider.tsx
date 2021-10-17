import { createStoreHook, Provider } from "react-redux";
import { Action, createStore, Reducer } from "redux";
import { storeApp } from "./store";

export const ReduxProvider: React.FC = (props) => {
  return <Provider store={storeApp} children={props.children} />;
};
