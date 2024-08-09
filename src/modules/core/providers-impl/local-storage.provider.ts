import { IStorageProvider } from "@root/modules/core/providers/storage.provider";

export class LocalStorageProvider implements IStorageProvider {
  setItem(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
    return Promise.resolve();
  }

  getItem(key: string): Promise<string | null> {
    return Promise.resolve(localStorage.getItem(key));
  }

  removeItem(key: string): Promise<void> {
    localStorage.removeItem(key);
    return Promise.resolve();
  }
}
