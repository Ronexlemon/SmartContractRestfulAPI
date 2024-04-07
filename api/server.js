const express = require("express");

const getRequests = require("../api/routes/getRoutes")
const writeRequests = require("../api/routes/writeRequests")

const Port = 3000;
const App = express();

App.use(express.json());

App.use("/api/read",getRequests);
App.use("/api/write",writeRequests);




App.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
