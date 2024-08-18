import * as amplitude from "@amplitude/analytics-browser";
import { AmplitudeAnalyticsGateway } from "@root/modules/global/gateways-impl/amplitude-analytics.gateway";

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
