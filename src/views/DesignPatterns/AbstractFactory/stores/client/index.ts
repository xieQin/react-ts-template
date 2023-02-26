import {
  AbstractFactory,
  AbstractProductA,
  AbstractProductB,
} from "../interface";

type UseCreateAbstractFactoryClient = (factory: AbstractFactory) => {
  productA: AbstractProductA;
  productB: AbstractProductB;
};

export const useCreateAbstractFactoryClient: UseCreateAbstractFactoryClient = (
  factory: AbstractFactory
) => {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  return {
    productA,
    productB,
  };
};
