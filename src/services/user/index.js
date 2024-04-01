import { UserImplementation } from "../../implementations/UserImplementation.js";
import { UserService } from "./userService.js";

const userDb = new UserImplementation();
const userService = new UserService(
    userDb
);
export { userService }