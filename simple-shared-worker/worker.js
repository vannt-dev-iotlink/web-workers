onconnect = function (event) {
  const port = event.ports[0];
  port.onmessage = function (e) {
    console.log("[  event   ]", event);
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
