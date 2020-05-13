const express = require('express');
const expressWs = require('express-ws')
const router = express.Router()
expressWs(router);

router.ws('/test', (ws, req) => {
  //��֪����ʲô�����ʽ����˼���ǡ����ӳɹ���
  ws.send('连接成功')
  let interval
  //��ʱ���ͻ��˷�����Ϣ
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
