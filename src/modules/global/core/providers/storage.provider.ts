export interface IStorageProvider {
  getItem(key: string): Promise<Record<string, unknown> | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}
