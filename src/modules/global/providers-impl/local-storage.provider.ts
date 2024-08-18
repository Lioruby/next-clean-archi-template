import { IStorageProvider } from "@root/modules/global/core/providers/storage.provider";

export class LocalStorageProvider implements IStorageProvider {
  setItem(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
    return Promise.resolve();
  }

  getItem(key: string): Promise<Record<string, unknown> | null> {
    const result = localStorage.getItem(key);
    return Promise.resolve(result ? JSON.parse(result) : null);
  }

  removeItem(key: string): Promise<void> {
    localStorage.removeItem(key);
    return Promise.resolve();
  }
}
