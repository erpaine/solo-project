const { Router } = require("express");
const express = require("express");
const pantryController = require("../controllers/pantryController");

const router = express.Router();

//const dbo = require("../db/conn");

//const db = dbo.getDb();

//create a pantry item
router.post('/route/item', pantryController.addItem, 
  (req, res) => {
    console.log('added');
    console.log(res.locals.item);
    res.status(200).json(res.locals.item)}
  );

router.get('/', pantryController.getAllItems, 
    (req, res) => res.status(200).json(res.locals.allItems)  
);



module.exports = router;