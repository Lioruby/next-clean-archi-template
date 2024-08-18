import { IAnalyticsGateway } from "@root/modules/global/core/gateways/analytics.gateway";

export class InMemoryAnalyticsGateway implements IAnalyticsGateway {
  track(event: string, properties?: Record<string, any>): void {
    console.info(
      `Tracked event: ${event} with properties: ${JSON.stringify(properties)}`
    );
  }
}
