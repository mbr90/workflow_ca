export const mockStorage = {
  setItem: jest.fn((key, value) => {
    localStorage[key] = value;
  }),
  removeItem: jest.fn((key) => {
    delete localStorage[key];
  }),
};
