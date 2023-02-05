import { StoreState } from "./initialState";

export interface StoreAction {
  setStates: <T extends keyof StoreState>(
    key: T,
    update: StoreState[T]
  ) => void;
}
