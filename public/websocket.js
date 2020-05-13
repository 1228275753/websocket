const msgBox = document.getElementById('msg-need-send')
const sendBtn = document.getElementById('send-btn')
const exit = document.getElementById('exit')
const receiveBox = document.getElementById('receive-box')

//连接地址   注意一下服务端的配置
const ws = new WebSocket('ws://localhost:3000/websocket/test')
// 连接成功后的回调
ws.onopen = e => {
  console.log(`WebSocket 连接状态： ${ws.readyState}`)
}
// 收到服务端数据的回调
ws.onmessage = data => {
  receiveBox.innerHTML += `<p>${data.data}</p>`
  receiveBox.scrollTo({
    top: receiveBox.scrollHeight,
    behavior: "smooth"
  })
}
// 连接关闭后的回调
ws.onclose = data => {
  console.log('WebSocket连接已关闭')
  console.log(data);
}

//绑定一个按钮，前端主动发送消息
sendBtn.onclick = () => {
  ws.send(msgBox.value)
}
exit.onclick = () => {
  ws.close()
}
