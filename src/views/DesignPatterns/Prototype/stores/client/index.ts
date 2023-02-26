import { ComponentWithBackReference, Prototype } from "../prototype";

export type UseCreatePrototypeClient = () => {
  p1: Prototype;
  p2: Prototype;
};

export const useCreatePrototypeClient = () => {
  const p1 = new Prototype();
  p1.primitive = 245;
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();
  return {
    p1,
    p2,
  };
};
