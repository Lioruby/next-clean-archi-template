import { capitalize } from "./capitalize.utils";

describe("Capitalize string", () => {
  it("Should capitalize a string", () => {
    const str = "hello";

    expect(capitalize(str)).toEqual("Hello");
  });
});
