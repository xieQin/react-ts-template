import AbstractFactoryPage from "./AbstractFactory";
import BuilderPage from "./Builder";
import FactoryPage from "./Factory";
import PrototypePage from "./Prototype";

export default function DesignPatternsPage() {
  return (
    <>
      <h3>Design Patterns</h3>
      <ul>
        <li>
          <h4>Factory</h4>
          <FactoryPage />
        </li>
        <li>
          <h4>Abstract Factory</h4>
          <AbstractFactoryPage />
        </li>
        <li>
          <h4>Builder</h4>
          <BuilderPage />
        </li>
        <li>
          <h4>Prototype</h4>
          <PrototypePage />
        </li>
      </ul>
    </>
  );
}
