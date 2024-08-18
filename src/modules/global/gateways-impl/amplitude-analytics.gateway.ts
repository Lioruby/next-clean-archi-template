import * as amplitude from "@amplitude/analytics-browser";
import { IAnalyticsGateway } from "@root/modules/global/core/gateways/analytics.gateway";

export class AmplitudeAnalyticsGateway implements IAnalyticsGateway {
  constructor() {
    const publicApiKey = process.env.PUBLIC_AMPLITUDE_KEY ?? "";

    amplitude.init(publicApiKey, {
      defaultTracking: true,
    });
  }

  track(event: string, properties?: Record<string, any>): void {
    amplitude.track(event, properties);
  }
}
