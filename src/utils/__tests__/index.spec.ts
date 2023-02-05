import { Add } from "@/utils";

describe("utils work well", () => {
  it("Add work well", () => {
    const res1 = Add(2, 3);
    const res2 = Add(3, 1);

    expect(res1).toBe(5);
    expect(res2).toBe(4);
  });
});
