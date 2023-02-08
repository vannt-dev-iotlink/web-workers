const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');
const result1 = document.querySelector('.result1');

if (window.Worker) {
  const worker = new Worker("worker.js")
  const fibonacciWorker = new Worker("fibonacci.js");
  first.onchange = function() {
    worker.postMessage([first.value, second.value])
    console.log('Message posted first to worker');
  }
  second.onchange = function() {
    worker.postMessage([first.value, second.value]);
    console.log('Message posted second to worker');
  }

  worker.onmessage = function(e) {
    result1.textContent = e.data;
    console.log('Message received from worker1', e);
  }

  fibonacciWorker.onmessage = function (event) {
    result.textContent = event.data;
    console.log("Got: " + event.data + "\n");
  };

  fibonacciWorker.onerror = function (error) {
    console.log(`Worker error: ${error.message} \n`);
    throw error;
  };


} else {
  console.log('Your browser doesn\'t support web workers.');
}
