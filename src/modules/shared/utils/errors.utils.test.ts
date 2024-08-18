import { extractErrorMessage } from "@root/modules/shared/utils/errors.utils";

describe("extractErrorMessage", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation();
  });

  it("Should extract an error message when an error is thrown", () => {
    const error = new Error("Request failed");
    expect(extractErrorMessage(error)).toEqual("Request failed");
  });

  it("Should extract Unknown error if e has no message", () => {
    const error = new Error("");
    expect(extractErrorMessage(error)).toEqual("Unknown error");
  });
});
