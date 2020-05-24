export interface Api {
  makeRequest: (id: number) => Promise<number>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}
