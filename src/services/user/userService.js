import { UserImplementation } from "../../implementations/UserImplementation.js";
import "../../types/userTypes.js";
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
    this._usersDb.add(user);
    return "user added successfully";
  }
  getAll() {
    return this._usersDb.getAll();
  }
  getUserByName(name) {
    return this._usersDb.getUserByName(name);
  }
}
