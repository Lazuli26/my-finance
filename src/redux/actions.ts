import { Action } from "redux";
import { UserProfile } from "../types/profile";

export type PayloadAction<type extends string, P> = {
  payload: P;
} & Action<type>;

export type storeAction =
  | PayloadAction<"setProfile", UserProfile>
  | PayloadAction<"prueba", number>;
