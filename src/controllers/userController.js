/**
 * @typedef {Object} RequestData
 * @property {Object} body
 * @property {string} method
 * @property {string} url
 * @property {Object} query
 */

import { userService } from "../services/user/index.js";

/**
 * 
 * @param {RequestData} data 
 * @param {any} callback 
 */
export const userController = (data, callback) => {
    console.log('usercontroller data => ',data);
    
    if(data.method === 'GET') {
        let users = userService.getAll();
        callback({
            data: users,
            statusCode: 201
        })
    }
    
}