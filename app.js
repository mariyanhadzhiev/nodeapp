// external dependencies
const express = require("express");
const client = express()
const api = express()

// start db api
require('./database')(api)

// start client
require("./client")(client);


