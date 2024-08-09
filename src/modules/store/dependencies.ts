import { IAnalyticsGateway } from "@root/modules/analytics/gateways/analytics-gateway";
import { IStorageProvider } from "@root/modules/core/providers/storage.provider";

export type Dependencies = {
  /* PROVIDERS */
  storageProvider: IStorageProvider;

  /* GATEWAYS */
  analyticsGateway: IAnalyticsGateway;
};
