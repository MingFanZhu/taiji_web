var mysql = require('mysql');
var connection = null;

//连接以及重连
function handleError(err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
}

function connect() {
    connection = mysql.createConnection({
        host: "47.101.146.224",
        user: 'taiji',
        password: '',
        database: 'taiji_web'
    });
    connection.connect(handleError);
    connection.on('error', handleError);
}
connect();

module.exports=connection;