// import mysql from 'mysql2'
const mysql = require('mysql2')

// 資料庫連結資訊
const connection = {
  host: 'localhost',
  user: 'react',
  password: '123456',
  database: 'react',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}

// 一般使用
const pool = mysql.createPool(connection)

// promise用
const promisePool = pool.promise()

// export default {
//   pool,
//   promisePool,
// }

// const dbMysql2 = {
//   pool,
//   promisePool,
// }

module.exports = {
  pool,
  promisePool,
}
