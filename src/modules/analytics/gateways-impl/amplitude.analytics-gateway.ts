import * as amplitude from "@amplitude/analytics-browser";
import { IAnalyticsGateway } from "@root/modules/analytics/gateways/analytics-gateway";

export class AmplitudeAnalyticsGateway implements IAnalyticsGateway {
  constructor() {
    const PUBLIC_AMPLITUDE_KEY = "YOUR_PUBLIC_AMPLITUDE_KEY";
    amplitude.init(PUBLIC_AMPLITUDE_KEY, {
      defaultTracking: true,
    });
  }

  track(event: string, properties?: Record<string, any>): void {
    amplitude.track(event, properties);
  }
}
