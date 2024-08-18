import { isEmail } from "./is-email.utils";

describe("isEmail", () => {
  it("should return false if the email is invalid", () => {
    expect(isEmail("test")).toBe(false);
  });
  it("should return true if the email is valid", () => {
    expect(isEmail("test@test.com")).toBe(true);
  });
});
