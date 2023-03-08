import { DesignPatterns } from "@/models";

import AbstractFactoryPage from "./AbstractFactory";
import BridgePage from "./Bridge";
import BuilderPage from "./Builder";
import ChainOfResponsibilityPage from "./ChainOfResponsibility";
import CommandPage from "./Command";
import CompositePage from "./Composite";
import DecoratorPage from "./Decorator";
import FacadePage from "./Facade";
import FactoryPage from "./Factory";
import FlyweightPage from "./Flyweight";
import IteratorPage from "./Iterator";
import MediatorPage from "./Mediator";
import MementoPage from "./Memento";
import PrototypePage from "./Prototype";
import ProxyPage from "./Proxy";
import SingletonPage from "./Singleton";
import StatePage from "./State";

const DesignPatternsPageConfigs = {
  [DesignPatterns.Factory]: FactoryPage,
  [DesignPatterns.AbstractFactory]: AbstractFactoryPage,
  [DesignPatterns.Builder]: BuilderPage,
  [DesignPatterns.Prototype]: PrototypePage,
  [DesignPatterns.Singleton]: SingletonPage,
  [DesignPatterns.Bridge]: BridgePage,
  [DesignPatterns.Composite]: CompositePage,
  [DesignPatterns.Decorator]: DecoratorPage,
  [DesignPatterns.Facade]: FacadePage,
  [DesignPatterns.Flyweight]: FlyweightPage,
  [DesignPatterns.Proxy]: ProxyPage,
  [DesignPatterns.ChainOfResponsibility]: ChainOfResponsibilityPage,
  [DesignPatterns.Command]: CommandPage,
  [DesignPatterns.Iterator]: IteratorPage,
  [DesignPatterns.Mediator]: MediatorPage,
  [DesignPatterns.Memento]: MementoPage,
  [DesignPatterns.State]: StatePage,
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
