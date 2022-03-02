import { Context, ConcreteStateA, ConcreteStateB } from "./state";
describe("state pattern", () => {
  it("???", () => {
    const context = new Context(new ConcreteStateA());
    context.request1();
    const context2 = new Context(new ConcreteStateB());
    context2.request1();
  });
});
