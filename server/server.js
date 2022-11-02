const path= require('path');
const express = require("express");
const app = express();
const cors = require("cors");
//require("dotenv").config({ path: "./config.env" });
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));
// get driver connection
//const dbo = require("./db/conn");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client')));

//catch-all route handler
app.use((req, res)=> res.status(404).send('Page not found'));

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
 
app.listen(port, () => {
  // perform a database connection when server starts
  //dbo.connectToServer(function (err) {
    //if (err) console.error(err);
 
  //});
  console.log(`Server is running on port: ${3000}`);
});