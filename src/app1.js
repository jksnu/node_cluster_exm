const express = require('express');
const port = 8000;

const app = express();  

app.get('/', (req, res) => {
  console.log(`Incoming req accepted by Process ${process.pid}`);
  for(let i=0; i<999999999999999; i++) {

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



