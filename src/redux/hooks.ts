import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
} from "react-redux";
import { storeAction } from "./actions";
import { storeType } from "./store";

export const useAppSelector = createSelectorHook<storeType, storeAction>();
export const useAppStorage = createStoreHook<storeType, storeAction>();
export const useAppDispatch = createDispatchHook<storeType, storeAction>();
