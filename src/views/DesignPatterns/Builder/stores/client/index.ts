import { ConcreteBuilder1, Director } from "../concrete";

type UseCreateBuilderClient = (director: Director) => {
  builder: ConcreteBuilder1;
  getBasicProduct: () => string[];
  getFullFeaturedProduct: () => string[];
  getCustomProduct: () => string[];
};

export const useCreateBuilderClient: UseCreateBuilderClient = (
  director: Director
) => {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  const getBasicProduct = () => {
    console.log("Standard basic product:");
    director.buildMinimalViableProduct();
    return builder.getProduct().listParts();
  };

  const getFullFeaturedProduct = () => {
    console.log("Standard full featured product:");
    director.buildFullFeaturedProduct();
    return builder.getProduct().listParts();
  };

  const getCustomProduct = () => {
    console.log("Custom product:");
    builder.producePartA();
    builder.producePartC();
    return builder.getProduct().listParts();
  };

  return {
    builder,
    getBasicProduct,
    getFullFeaturedProduct,
    getCustomProduct,
  };
};
