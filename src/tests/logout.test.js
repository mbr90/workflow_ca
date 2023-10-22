import { mockStorage } from "./mocks/localStorage.mock";
import { logout } from "../js/api/auth/logout";

global.localStorage = mockStorage;

describe("Logout function", () => {
  it("clears the token from local storage", () => {
    logout();
    expect(localStorage.token).toBeFalsy();
  });
});
