const express = require('express')
const app = express()
const expressWs = require('express-ws')
const websocket = require('./websocket')

expressWs(app);

app.use(express.static('public'))
app.use('/websocket', websocket)
app.get('*', (req, res) => {})
app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
/*
* 后端模块我也不是太懂
* 大致意思应该是引用并使用相应的模块
* 作为一个前端，反正我就是能用就行，哈哈哈哈
*/

