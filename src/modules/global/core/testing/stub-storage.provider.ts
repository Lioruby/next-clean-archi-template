import { IStorageProvider } from "@root/modules/global/core/providers/storage.provider";

export class StubStorageProvider implements IStorageProvider {
  private storage: Record<string, unknown> = {};

  async setItem(key: string, value: string): Promise<void> {
    const valueParsed = JSON.parse(value as string);
    this.storage[key] = valueParsed;
  }

  async getItem(key: string): Promise<Record<string, unknown> | null> {
    return this.storage[key] as Record<string, unknown> | null;
  }

  async removeItem(key: string): Promise<void> {
    delete this.storage[key];
  }
}
