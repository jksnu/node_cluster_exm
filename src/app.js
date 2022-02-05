const http = require('http');
const cluster =  require('cluster');
const os = require('os');
const process = require('process');
const express = require('express');
const port = 8000;

const numCPUs = os.cpus().length;
console.log(`No of cpu = ${numCPUs}`);

//Creating child processes from main process based on number of cpus
if (cluster.isMaster) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();  

  app.get('/', (req, res) => {
    console.log(`Incoming req accepted by Process ${process.pid}`);
    for(let i=0; i<9999999999999999999; i++) {
  
    }
    res.send('hello world');
  });

  app.get('/test', (req, res) => {
    console.log(`Incoming req accepted by Process ${process.pid}`);
    res.send('Quickly say Hello World');
  });

  app.listen(port, () => {
    console.log(`app is listening at port ${port} by Process ${process.pid}`);
  });
}



