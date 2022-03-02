/**
 * The Target defines the domain-specific interface used by the client code.
 */
export class Target {
  public request(str: string): string {
    return str;
  }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
export class Adaptee {
  public specificRequest(reverseStr: string): string {
    return reverseStr;
  }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
export class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(str: string): string {
    const result = this.adaptee
      .specificRequest(str)
      .split("")
      .reverse()
      .join("");
    //`Adapter: (TRANSLATED) ${result}`
    return result;
  }
}
