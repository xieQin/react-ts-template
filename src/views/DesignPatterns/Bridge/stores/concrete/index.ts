import { Implementation } from "../interfaces";

export class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}

export class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}
