import { sayHello } from "../src/helpers";

describe("sayHello()", () => {
  it("should return 'Hello Ian!'", () => {
    expect(sayHello("Ian")).toBe("Hello Ian!");
  });
});
