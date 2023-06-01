/*
Title: Uptime Monitoring Application 
Description: A RESTFul API to monitor up pr down of user defined links
Author: Naifs Fuad 
Date: 27May,2023
*/

//dependencies
const http = require("http");
const handleReqRes = require("./helpers/handleReqRes");
const environmentToExport = require("./helpers/environment");
const data = require("./lib/data");
//app object module scaffolding
const app = {};

// data.delete("test", "newFile", (err) => {
//   console.log(err);
// });
//configuration
app.config = { port: 4000 };

// create server
app.createServer = () => {
  const server = http.createServer(app.handleRequest);

  server.listen(environmentToExport.port, () => {
    console.log(`Server listening on port ${environmentToExport.port}`);
  });
};

//Handling req and response
app.handleRequest = handleReqRes;
app.createServer();
