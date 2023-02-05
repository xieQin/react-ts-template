import { create } from "zustand";

import { StoreAction } from "./action";
import { initialState, StoreState } from "./initialState";

export type Store = StoreState & StoreAction;

export const useStore = create<Store>(set => ({
  ...initialState,
  setStates: (key, update) =>
    set(state => ({
      ...state,
      [key]: update,
    })),
}));
