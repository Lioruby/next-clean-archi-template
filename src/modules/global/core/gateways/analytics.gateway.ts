export interface IAnalyticsGateway {
  track(event: string, properties?: Record<string, any>): void;
}
