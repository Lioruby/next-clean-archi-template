import { InMemoryAnalyticsGateway } from "@root/modules/analytics/gateways-impl/in-memory.analytics-gateway";
import { Dependencies } from "@root/modules/store/dependencies";
import { AppStore, createStore } from "@root/modules/store/store";

export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {
      analyticsGateway: new InMemoryAnalyticsGateway(),
    };
  }
}

export const app = new App();
