import {
  ConcreteCreator1,
  ConcreteCreator2,
  Creator,
  useCreateFactoryClient,
} from "./stores";

export const CreatorComp = ({
  name,
  creator,
}: {
  name: string;
  creator: Creator;
}) => {
  return (
    <div>
      {name}:
      <ul>
        <li>
          {name} operation: {creator.factoryMethod().operation()}
        </li>
        <li>
          {name} some operation: {creator.someOperation()}
        </li>
      </ul>
    </div>
  );
};

export default function FactoryPage() {
  const creator1 = useCreateFactoryClient(new ConcreteCreator1());
  const creator2 = useCreateFactoryClient(new ConcreteCreator2());
  return (
    <>
      <CreatorComp name="creator1" creator={creator1.creator} />
      <CreatorComp name="creator2" creator={creator2.creator} />
    </>
  );
}
