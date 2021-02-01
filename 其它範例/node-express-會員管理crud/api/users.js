const express = require('express')
const router = express.Router()

const User = require('../domain/user.js')

// mysql2 async-await用的
const dbMysql2 = require('../db/database')

// 執行sql用的async-await的函式
// sql 執行用的sql
// res 回應
// method restful的方法，預設為get
// multirow 是否為多資料回傳，預設為是
// instance 物件實體，預設為空物件
async function executeSQL(
  sql,
  res,
  method = 'get',
  multirows = true,
  instance = {}
) {
  try {
    const [rows, fields] = await dbMysql2.promisePool.query(sql)

    switch (method) {
      case 'post': {
        // 仿照json-server的回傳
        const insertId = { id: rows.insertId }
        // 合併id值
        const result = { ...instance, ...insertId }
        //回傳
        res.status(200).json(result)
        break
      }
      case 'put': {
        // 仿照json-server的回傳，有更新到會回傳單一值，沒找到會回到空的物件字串
        // console.log(rows.affectedRows)
        let result = {}
        if (rows.affectedRows) result = { ...instance }
        //回傳
        res.status(200).json(result)
        break
      }
      case 'delete': {
        // 仿照json-server的回傳
        res.status(200).json({})
        break
      }
      case 'get':
      default:
        {
          if (multirows) {
            // res.status(200).json({
            //   users: rows,
            // })
            res.status(200).json(rows)
          } else {
            // 仿照json-server的回傳，有找到會回傳單一值，沒找到會回到空的物件字串
            let result = {}
            if (rows.length) result = rows[0]
            res.status(200).json(result)
          }
        }
        break
    }
  } catch (error) {
    // 錯誤處理
    console.log(error)

    // 顯示錯誤於json字串
    res.status(200).json({
      message: error,
    })
  }
}

// instance 物件實體，預設為空物件
async function userLogin(sql, req, res, instance) {
  try {
    const [rows, fields] = await dbMysql2.promisePool.query(sql)

    // 仿照json-server的回傳，有找到會回傳單一值，沒找到會回到空的物件字串
    let result = {}
    if (rows.length) {
      result = rows[0]

      req.session.regenerate(function (err) {
        if (err) {
          res.status(200).json({ status: 2, message: '登入失敗' })
        }

        req.session.loginId = result.id
        req.session.loginName = result.name
        req.session.loginEmail = result.email
        req.session.loginUsername = result.username
        req.session.loginCreatedDate = result.createDate

        // 如果要用全訊息可以用以下的回傳
        // res.json({ status: 0, message: '登入成功' })
        res.status(200).json(result)
      })
    } else {
      res.status(200).json({ status: 1, message: '帳號或密碼錯誤' })

      //res.status(200).json(result)
    }
  } catch (error) {
    // 錯誤處理
    console.log(error)

    // 顯示錯誤於json字串
    res.status(200).json({
      message: error,
    })
  }
}

// 以下為路由

// 處理會員登入
router.post('/login', function (req, res, next) {
  let user = new User(
    req.body.name,
    req.body.username,
    req.body.password,
    req.body.email
  )

  // 回應都寫在userLogin方法裡(async-await)
  userLogin(user.getUserUserByUsernameAndPasswordSQL(), req, res, user)
})

// 處理會員登出
router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      res.status(200).json({ status: 1, message: '登出失敗' })
      return
    }

    // 清除所有的session
    req.session = null

    res.clearCookie('skey')
    res.status(200).json({ status: 0, message: '登出成功' })
  })
})

// 檢查是否登入
router.get('/checklogin', function (req, res, next) {
  const sess = req.session

  const id = sess.loginId
  const username = sess.loginUsername
  const name = sess.loginName
  const email = sess.loginEmail
  const createDate = sess.loginCreatedDate

  const isLogined = !!name

  if (isLogined) {
    res.status(200).json({ id, name, username, email, createDate })
  } else {
    // 登出狀態時回傳`{id:0}`
    res.status(200).json({ id: 0 })
  }
})

// get 處理獲取全部的資料列表
// AND查詢加入`?name=eddy&email=XXX&username=XXXX
router.get('/', (req, res, next) => {
  //console.log(req.query)

  if (!Object.keys(req.query).length) executeSQL(User.getAllUserSQL(), res)
  else executeSQL(User.getUserByQuerySQL(req.query), res)
})

// get 處理獲取單一筆的會員，使用id
router.get('/:userId', (req, res, next) => {
  executeSQL(User.getUserByIdSQL(req.params.userId), res, 'get', false)
})

// post 新增一筆會員資料
router.post('/', (req, res, next) => {
  // 測試response，會自動解析為物件
  // console.log(typeof req.body)
  // console.log(req.body)

  //從request json 資料建立新的物件
  let user = new User(
    req.body.name,
    req.body.username,
    req.body.password,
    req.body.email
  )

  executeSQL(user.addUserSQL(), res, 'post', false, user)
})

//delete 刪除一筆資料
router.delete('/:userId', (req, res, next) => {
  executeSQL(User.deleteUserByIdSQL(req.params.userId), res, 'delete', false)
})

// put 更新一筆資料
router.put('/:userId', (req, res) => {
  let user = new User(
    req.body.name,
    req.body.username,
    req.body.password,
    req.body.email
  )

  // id值為數字
  user.id = +req.params.userId

  executeSQL(user.updateUserByIdSQL(req.params.userId), res, 'put', false, user)
})

//export default router
module.exports = router
