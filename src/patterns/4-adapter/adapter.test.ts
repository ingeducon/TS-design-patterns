import { Target, Adaptee, Adapter } from "./adapter";
describe("adapter pattern", () => {
  it("El string debe ser traducido", () => {
    const target = new Target();
    const str: string = "Asi procesan el destino los string";
    target.request(str);

    const adaptee = new Adaptee();
    const reverseString =
      "abeurp anu se otse ,orar ametsis etse asecorp ol isA";
    expect(adaptee.specificRequest(reverseString)).toEqual(reverseString);

    const adapter = new Adapter(adaptee);
    expect(adapter.request(reverseString)).toEqual(
      "Asi lo procesa este sistema raro, esto es una prueba"
    );

    console.log(
      "****Mensaje original****" + adaptee.specificRequest(reverseString)
    );
    console.log("****Mensaje Traducido***" + adapter.request(reverseString));
  });
});
