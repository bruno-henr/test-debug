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
    const data = { ...user, id: v4() };
    this.users.push(data);
    return data;
  }

  edit(user) {
    const index = this.users.findIndex(e => e.id === user.id);
    this.users[index] = user;
    return user;
  }
}
