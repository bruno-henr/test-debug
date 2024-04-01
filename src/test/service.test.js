import { describe, it } from "node:test";
import { userService } from "../services/user/index.js";
import assert from "node:assert";
import "../types/userTypes.js";

describe("User", () => {
  it("should be able add an user", () => {
    /** @type {IncomingUser} */
    const user = {
      full_name: "Bruno Henrique",
      age: 23,
      email: "brunohenrique@gmail.com",
      password: "123",
      phone_number: "(83) 99337-8760",
    };
    userService.add(user);
    assert.strictEqual(userService.getAll().length >= 1, true);
  });

  it("not should be able add user without last name", () => {
    /** @type {IncomingUser} */
    const user = {
      full_name: "Bruno",
      age: 23,
      email: "brunohenrique@gmail.com",
      password: "123",
      phone_number: "(83) 99337-8760",
    };
    assert.throws(() => userService.add(user), Error, "Invalid full name");
  });
  it("not should be able add user less than 18 years old", () => {
    /** @type {IncomingUser} */
    const user = {
      full_name: "Bruno Henrique",
      age: 17,
      email: "brunohenrique@gmail.com",
      password: "123",
      phone_number: "(83) 99337-8760",
    };
    assert.throws(() => userService.add(user), Error, "Age must be greater than or equal 18 years old");
  });
});
