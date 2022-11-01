const express = require("express");

const routes = express.Router();

const dbo = require("../db/conn");

const db = dbo.getDb()

//create a pantry item


module.exports = routes;