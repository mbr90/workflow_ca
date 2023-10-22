import { save } from "../js/storage";
import { login } from "../js/api/auth/login";

global.fetch = jest.fn(() => Promise.resolve({}));
jest.mock("../js/storage/index.js");

describe("Login function", () => {
  it("fetches user token and stores it in local storage", async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ name: "test", accessToken: "qwerty" }),
    });
    await login("test@email.com", "pass1234");
    expect(save).toHaveBeenCalledWith("token", "qwerty");
  });
});
