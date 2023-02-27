import { ConcreteImplementationA, ConcreteImplementationB } from "../concrete";
import { Abstraction } from "../interfaces";

type UseCreateBridgeClient = () => {
  abstractionA: Abstraction;
  abstractionB: Abstraction;
};

export const useCreateBridgeClient: UseCreateBridgeClient = () => {
  const implementationA = new ConcreteImplementationA();
  const abstractionA = new Abstraction(implementationA);
  const implementationB = new ConcreteImplementationB();
  const abstractionB = new Abstraction(implementationB);

  return {
    abstractionA,
    abstractionB,
  };
};
