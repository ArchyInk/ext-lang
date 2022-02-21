/*
 * @author: Archy
 * @Date: 2022-02-17 16:31:44
 * @LastEditors: Archy
 * @LastEditTime: 2022-02-21 10:06:20
 * @FilePath: \ext-lang\index.js
 * @description: 
 */
const { languages } = require("./languages");
module.exports = (extname) => languages[extname];