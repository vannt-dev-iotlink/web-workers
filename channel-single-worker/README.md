#channel-single-worker

Message Channel is a communication mechanism for message passing between to two different contexts. It was implemented with two ports, messages sent in one port are delivered at other port.
This is the only way to establish direct communication between webworkers. This project will demonstrate how it works.

A simple web worker test. [Demo](https://vannt192.github.io/web-workers/channel-single-worker/).

To run this code locally you'll need to serve it.

For example if you have [node](https://nodejs.org/) installed, navigate to the folder containing the code and run:

`npx lite-server`