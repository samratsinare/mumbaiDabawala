
const mysql = require("mysql");

const promise = require("bluebird");

const DB = require("./db.config");
//onst { connect } = require("http2");

promise.promisifyAll(require("mysql/lib/Connection").prototype);
promise.promisifyAll(require("mysql/lib/Pool").prototype);



let adduser = async(input)=>
{
   const connection = mysql.createConnection(DB.DB_CONFIG);

    await connection.connectAsync();

     let sql = "insert into user_reg values (?,?,?,?,?)";

        const result1  = await connection.queryAsync(sql,[

          input.username,
          input.email,
          input.mobile,
          input.password,
          input.address

       ]);
      
        await connection.endAsync();
       

};

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

  let addorder = async (input) =>
  {
      const connection = mysql.createConnection(DB.DB_CONFIG);

      await connection.connectAsync();

      let sql = "insert into order_service values (?,?,?,?)";

      const result = await connection.queryAsync(sql,[
          
      input.adhar,
      input.pickup,
      input.droppoint,
      input.quantity
      
    ]);

      console.log(result);

      await connection.endAsync();

      if(result.length === 0)
      {
          throw new Error("invalid");
      }

      return result
  };

  let stopservice = async (input) =>
{
   const connection = mysql.createConnection(DB.DB_CONFIG);

    await connection.connectAsync();

    let sql = "delete from order_service where adhar = ?";

    const result1 = await connection.queryAsync(sql,[input.adhar]);

    //console.log(result1);

    await connection.endAsync();

    if(result1.length === 0)
    {
        throw new Error("invalid");
    }

};

let forgotpassword = async (input) =>
{
   const connection = mysql.createConnection(DB.DB_CONFIG);

    await connection.connectAsync();

    let sql = "update user_reg set password = ? where email = ? ";

    const result1 = await connection.queryAsync(sql,[input.password,input.email]);

      //console.log(result1);

    await connection.endAsync();

    if(result1.length === 0)
    {
        throw new Error("invalid");
    }
      return result1;

};

module.exports = 
{
    adduser,loginuser,addorder,stopservice,forgotpassword
}