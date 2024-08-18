import { InMemoryAnalyticsGateway } from "@root/modules/global/gateways-impl/in-memory-analytics.gateway";

describe("In memory analytics gateway", () => {
  it("Should be defined", () => {
    const analytics = new InMemoryAnalyticsGateway();
    expect(analytics).toBeDefined();
  });

  it("Should inform developper when a event is tracked", () => {
    const analytics = new InMemoryAnalyticsGateway();
    jest.spyOn(console, "info").mockImplementation();
    const properties = { test: "test" };
    analytics.track("test-event", properties);
    expect(console.info).toHaveBeenCalledWith(
      `Tracked event: test-event with properties: ${JSON.stringify(properties)}`
    );
  });
});
