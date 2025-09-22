const http = require('http');

const userRequestHandler=require('./Form')

const server = http.createServer(userRequestHandler);

const PORT=3001;
server.listen(PORT, () => {
  console.log(`Server is Running on Address http://localhost:${PORT}`)
});