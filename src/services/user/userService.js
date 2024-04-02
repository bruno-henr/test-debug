import { UserImplementation } from "../../implementations/UserImplementation.js";
import "../../types/userTypes.js";
import { validateEmail } from "../../utils/validateEmail.js";
import { validatePhoneNumber } from "../../utils/validatePhoneNumber.js";
export class UserService {
  /**
   * @type {UserImplementation}
   */
  _usersDb;

  constructor(_usersDb) {
    this._usersDb = _usersDb;
  }

  /** @param {IncomingUser} user */
  add(user) {
    if (user.full_name.trim().split(" ").length === 1) {
      throw new Error("Invalid full name");
    }
    if (user.age < 18) {
      throw new Error("Age must be greater than or equal 18 years old");
    }
    if (!validateEmail(user.email)) {
      throw new Error("Email is not valid");
    }
    if (!validatePhoneNumber(user.phone_number)) {
      throw new Error("Phone is not valid");
    }
    const result = this._usersDb.add(user);
    return result;
  }
  getAll() {
    return this._usersDb.getAll();
  }
  getUserByName(name) {
    return this._usersDb.getUserByName(name);
  }
  edit(user) {
    return this._usersDb.edit(user);
  }
}
