import {
  ConcreteFactory1,
  ConcreteFactory2,
  useCreateAbstractFactoryClient,
} from "./stores";

export default function AbstractFactoryPage() {
  const product1 = useCreateAbstractFactoryClient(new ConcreteFactory1());
  const product2 = useCreateAbstractFactoryClient(new ConcreteFactory2());
  return (
    <>
      <div>
        Product1:
        <ul>
          <li>
            productA usefulFunctionA: {product1.productA.usefulFunctionA()}
          </li>
          <li>
            productB usefulFunctionB: {product1.productB.usefulFunctionB()}
          </li>
          <li>
            productB anotherUsefulFunctionB:{" "}
            {product1.productB.anotherUsefulFunctionB(product1.productA)}
          </li>
        </ul>
      </div>
      <div>
        Product2:
        <ul>
          <li>
            productA usefulFunctionA: {product2.productA.usefulFunctionA()}
          </li>
          <li>
            productB usefulFunctionB: {product2.productB.usefulFunctionB()}
          </li>
          <li>
            productB anotherUsefulFunctionB:{" "}
            {product2.productB.anotherUsefulFunctionB(product2.productA)}
          </li>
        </ul>
      </div>
    </>
  );
}
