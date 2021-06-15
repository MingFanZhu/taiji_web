/*
 * @Author: zmf
 * @Date: 2020-10-19 14:01:51
 * @LastEditors: zmf
 * @LastEditTime: 2021-06-11 11:13:47
 * @Description: file content
 */
var mysql = require('mysql');
var pool = null;

// //连接以及重连
// function handleError(err) {
//     if (err) {
//         // 如果是连接断开，自动重新连接
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             connect();
//         } else {
//             console.error(err.stack || err);
//         }
//     }
// }

// function connect() {
//     connection = mysql.createConnection({
//         host: "47.101.146.224",
//         user: 'taiji',
//         password: '',
//         database: 'taiji_web'
//     });
//     connection.connect(handleError);
//     connection.on('error', handleError);
// }
// connect();


pool = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: '31415926',
    database: 'test'
});
module.exports = pool;