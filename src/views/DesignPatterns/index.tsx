import { DesignPatterns } from "@/models";

import AbstractFactoryPage from "./AbstractFactory";
import BuilderPage from "./Builder";
import FactoryPage from "./Factory";
import PrototypePage from "./Prototype";
import SingletonPage from "./Singleton";

const DesignPatternsPageConfigs = {
  [DesignPatterns.Factory]: FactoryPage,
  [DesignPatterns.AbstractFactory]: AbstractFactoryPage,
  [DesignPatterns.Builder]: BuilderPage,
  [DesignPatterns.Prototype]: PrototypePage,
  [DesignPatterns.Singleton]: SingletonPage,
};

export default function DesignPatternsPage() {
  return (
    <>
      <h3>Design Patterns</h3>
      <ul>
        {Object.keys(DesignPatternsPageConfigs).map(key => (
          <li key={key}>
            <h4>{key}</h4>
            {DesignPatternsPageConfigs[
              key as keyof typeof DesignPatternsPageConfigs
            ]()}
          </li>
        ))}
      </ul>
    </>
  );
}
