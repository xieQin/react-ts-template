import {
  AbstractProductA,
  AbstractProductB,
  ConcreteFactory1,
  ConcreteFactory2,
  useCreateAbstractFactoryClient,
} from "./stores";

export const AbstractFactoryComp = ({
  name,
  product,
}: {
  name: string;
  product: {
    productA: AbstractProductA;
    productB: AbstractProductB;
  };
}) => {
  return (
    <div>
      {name}:
      <ul>
        <li>productA usefulFunctionA: {product.productA.usefulFunctionA()}</li>
        <li>productB usefulFunctionB: {product.productB.usefulFunctionB()}</li>
        <li>
          productB anotherUsefulFunctionB:{" "}
          {product.productB.anotherUsefulFunctionB(product.productA)}
        </li>
      </ul>
    </div>
  );
};

export default function AbstractFactoryPage() {
  const product1 = useCreateAbstractFactoryClient(new ConcreteFactory1());
  const product2 = useCreateAbstractFactoryClient(new ConcreteFactory2());
  return (
    <>
      <AbstractFactoryComp name="product1" product={product1} />
      <AbstractFactoryComp name="product2" product={product2} />
    </>
  );
}
