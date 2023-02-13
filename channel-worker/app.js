var worker1 = new Worker("worker1.js")
var worker2 = new Worker("worker2.js")
var channel= new MessageChannel()

worker1.onmessage = function(e) {
  document.getElementById("log").innerHTML += "<br>" + e.data
  console.log(e.data)
}
worker1.postMessage({
  code : "start",
  msg : "ping worker1"
},[channel.port2])

worker2.onmessage = function(e) {
  document.getElementById("log").innerHTML += "<br>" + e.data
  console.log(e.data)
}

worker2.postMessage({
  code : "start",
  msg : "ping worker2"
},[channel.port1])

function sendw1() {
  var msg = document.getElementById("msg").value
  if (msg && msg != "start")
    worker1.postMessage({
      code : "msgw",
      msg
    });
    document.getElementById("msg").value = ""
}

function sendw2() {
  var msg = document.getElementById("msg").value
  if (msg && msg != "start")
    worker2.postMessage({
      code : "msgw",
      msg
    })
    document.getElementById("msg").value = ""
}

function sendch1() {
  var msg = document.getElementById("msg").value
  if (msg && msg != "start")
  worker1.postMessage({
    code : "msgch",
    msg
  })
  document.getElementById("msg").value = ""

}

function sendch2() {
  var msg = document.getElementById("msg").value
  if (msg && msg != "start")
  worker2.postMessage({
    code : "msgch",
    msg
  })
  document.getElementById("msg").value = ""
}
