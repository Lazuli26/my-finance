import { Action, createStore, Reducer } from "redux";
import { UserProfile } from "../types/profile";
import { storeAction } from "./actions";

export type storeType = {
  profile: UserProfile;
};

const reducer: Reducer<storeType, storeAction> = (state, action): storeType => {
  state = state ?? {
    profile: {
      name: "",
      id: "",
      email: "",
    },
  };
  switch (action.type) {
    case "setProfile": {
      return { ...state, profile: action.payload };
    }
  }
  return state;
};

export const storeApp = createStore(reducer);
