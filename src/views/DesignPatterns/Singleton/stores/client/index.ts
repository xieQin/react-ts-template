import { Singleton } from "../singleton";

export type UseCreateSingletonClient = () => {
  s1: Singleton;
  s2: Singleton;
};

export const useCreateSingletonClient: UseCreateSingletonClient = () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  return {
    s1,
    s2,
  };
};
