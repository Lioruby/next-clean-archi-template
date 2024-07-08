import { AmplitudeAnalyticsGateway } from "@root/modules/analytics/gateways-impl/amplitude.analytics-gateway";
import * as amplitude from "@amplitude/analytics-browser";

describe("Amplitude analytics gateway", () => {
  it("Should be defined", () => {
    const analytics = new AmplitudeAnalyticsGateway();
    expect(analytics).toBeDefined();
  });

  it("Should track an event", () => {
    jest.spyOn(amplitude, "track");
    const analytics = new AmplitudeAnalyticsGateway();
    analytics.track("test-event", { test: "test" });
    expect(amplitude.track).toHaveBeenCalledWith("test-event", {
      test: "test",
    });
  });
});
