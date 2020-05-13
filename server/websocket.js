const express = require('express');
const expressWs = require('express-ws')
const router = express.Router()
expressWs(router);

router.ws('/test', (ws, req) => {
  //不知道是什么编码格式，意思就是“连接成功”
  ws.send('杩炴帴鎴愬姛')
  let interval
  //定时给客户端发送消息
  interval = setInterval(() => {
    if (ws.readyState === ws.OPEN) {
      ws.send(Math.random().toFixed(2))
    } else {
      clearInterval(interval)
    }
  }, 5000)

  ws.on('message', msg => {
    ws.send(msg)
  })
})

module.exports = router
