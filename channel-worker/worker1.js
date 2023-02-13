var channelPort;
onmessage = function(e) {
  if (e.data.code == "start") {
    channelPort = e.ports[0]
    channelPort.postMessage("worker1 channel post >> " + e.data.msg)
    channelPort.onmessage = getChannelMessage
  } else if(e.data.code=="msgw") {
    postMessage("worker1 got msg >> " + e.data.msg)
  } else if(e.data.code=="msgch") {
    channelPort.postMessage("worker1 got msg >> " + e.data.msg)
  }
}
function getChannelMessage(e) {
  postMessage("channel recieved msg in worker1 >>"  + e.data)
}
