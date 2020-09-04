const mysql = require("mysql");

const promise = require("bluebird");

const DB = require("./db.config");
//onst { connect } = require("http2");

promise.promisifyAll(require("mysql/lib/Connection").prototype);
promise.promisifyAll(require("mysql/lib/Pool").prototype);

let loginuser = async (input) =>
{
   const connection = mysql.createConnection(DB.DB_CONFIG);

    await connection.connectAsync();

    let sql = "select * from user_reg where email = ? and password = ?";

    const result1 = await connection.queryAsync(sql,[input.email,input.password]);

    await connection.endAsync();

    if(result1.length === 0)
    {
        throw new Error("invalid");
    }

};

//authenticate();

module.exports = 
{
    loginuser
}