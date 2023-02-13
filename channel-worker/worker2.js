var channelPort;
onmessage = function(e) {
  if (e.data.code == "start") {
    channelPort = e.ports[0]
    channelPort.postMessage("worker2 channel post >> " + e.data.msg)
    channelPort.onmessage = getChannelMessage
  } else if(e.data.code=="msgw") {
    postMessage("worker2 got msg >> " + e.data.msg)
  } else if(e.data.code=="msgch") {
    channelPort.postMessage("worker2 got msg >> " + e.data.msg)
  }
}
function getChannelMessage(e) {
  postMessage("channel recieved msg in worker2 >> " + e.data)
}