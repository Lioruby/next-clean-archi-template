import { IStorageProvider } from "@root/modules/core/providers/storage.provider";

export class StubStorageProvider implements IStorageProvider {
  getItem(key: string): Promise<string | null> {
    return Promise.resolve(key);
  }

  setItem(key: string, value: string): Promise<void> {
    return Promise.resolve();
  }

  removeItem(key: string): Promise<void> {
    return Promise.resolve();
  }
}
