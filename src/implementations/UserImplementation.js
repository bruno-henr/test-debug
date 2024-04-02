import { v4 } from "uuid";

export class UserImplementation {
  users = [];

  constructor() {
    if (UserImplementation.instance) {
      return UserImplementation.instance;
    } else {
      UserImplementation.instance = this;
    }
  }

  getAll() {
    return this.users;
  }

  getUserByName(name) {
    return this.users.find((user) => user.name === name);
  }

  add(user) {
    this.users.push({ ...user, id: v4() });
  }
}
