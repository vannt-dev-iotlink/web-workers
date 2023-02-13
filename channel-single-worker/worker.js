var receivedPort
onmessage = getMessage;

function getMessage(e){
  if (e.data.code == "start") {
    receivedPort = e.ports[0]
    receivedPort.postMessage("msg from worker "+ e.data.msg)
    receivedPort.onmessage = getPortMessage
  } else if (e.data.code == "msgch") {
    receivedPort.postMessage("msg got worker "+ e.data.msg)
  } else {
    postMessage("Data msg from worker: "+ e.data.msg)
  }
}

function getPortMessage(e) {
  console.log("Messages sent through the port will be handled here: ", e.data)
}