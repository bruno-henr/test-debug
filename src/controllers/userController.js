/**
 * @typedef {Object} RequestData
 * @property {Object} body
 * @property {string} method
 * @property {string} url
 * @property {Object} query
 */

import { userService } from "../services/user/index.js";

/**
 * @param {RequestData} data
 * @param {any} callback
 */
export const userController = (data, callback) => {
  // console.log('usercontroller data => ', JSON.parse(data.body));

  if (data.method === "GET") {
    let users = userService.getAll();
    callback({
      data: users,
      statusCode: 200,
    });
  }
  if (data.method === "POST") {
    let user = userService.add(JSON.parse(data.body));

    callback({
      data: user,
      statusCode: 201,
    });
  }
  if (data.method === "PUT") {
    let user = userService.edit(data.body);
    
    callback({
      data: JSON.parse(user),
      statusCode: 200,
    });
  }
};
