var worker = new Worker("worker.js")
var channel = new MessageChannel()

worker.onmessage = function(e) {
  document.querySelector("#log").innerHTML += "<br>" + e.data
}

worker.postMessage({
  code : "start",
  msg : "start port"
}, [channel.port1])

channel.port2.onmessage = function(event) {
  // Message is in event.data
  alert("Message is: " + event.data)
}

channel.port2.postMessage("channel port1 message");

function sendw() {
  var msg = document.getElementById("msg").value
  if (msg && msg != "start")
  worker.postMessage({
      code : "msgw",
      msg
  });
document.getElementById("msg").value = ""
}

function sendch() {
  var msg = document.getElementById("msg").value
  if (msg && msg != "start")
  worker.postMessage({
      code : "msgch",
      msg
  });
  document.getElementById("msg").value = ""
}
