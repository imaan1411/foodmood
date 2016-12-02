function validateUser(username, password, callbackFunc, sqlconnection, connection) {

  sqlconnection.query('SELECT 1 FROM `user` WHERE `password` = ? AND `username` = ?', [password, username], function(err, rows, result) {
  //  WHERE timestamp >= DATE_SUB(CURDATE(), INTERVAL 1 DAY) AND timestamp < CURDATE()
    if(err) {
      callbackFunc(false, "SQL_ERROR")
    }
    else if(typeof rows[0] === 'undefined') {
      callbackFunc(false, "USER_NOTFOUND")

    } else {
      callbackFunc(true, "USER_FOUND", username, password, sqlconnection, connection)
    }
  });

}


module.exports = validateUser;
