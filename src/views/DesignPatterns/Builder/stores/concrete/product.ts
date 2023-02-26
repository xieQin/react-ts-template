export class Product1 {
  public parts: string[] = [];

  public listParts(): string[] {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
    return this.parts;
  }
}
