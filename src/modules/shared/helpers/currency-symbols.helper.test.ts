import { getCurrencySymbol } from "@root/modules/shared/helpers/currency-symbols.helper";

describe("Get currency symbols", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation();
  });

  describe("Happy Path", () => {
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("EUR")).toBe("€");
    });

    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("USD")).toBe("$");
    });

    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("GBP")).toBe("£");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("JPY")).toBe("¥");
    });

    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("AUD")).toBe("$");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("CAD")).toBe("$");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("CHF")).toBe("CHF");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("CNY")).toBe("¥");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("SEK")).toBe("kr");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("NOK")).toBe("kr");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("RON")).toBe("lei");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("RON")).toBe("lei");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("RON")).toBe("lei");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("BWP")).toBe("P");
    });
    it("should return the correct currency symbol", () => {
      expect(getCurrencySymbol("BZD")).toBe("BZ$");
    });
  });

  describe("Sad Path", () => {
    it("should return currency key if not found", () => {
      expect(getCurrencySymbol("IAEJF")).toBe("IAEJF");
    });
    it("should put a warning in the console if the currency is not found", () => {
      console.warn = jest.fn();
      getCurrencySymbol("IAEJF");
      expect(console.warn).toHaveBeenCalledWith(
        "Currency symbol not found for: IAEJF"
      );
    });
  });
});
