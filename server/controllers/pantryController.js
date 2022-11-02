
const models = require('../models/pantryModels');

const pantryController = {};

pantryController.addItem = (req, res, next) => {
    //console.log('req.body', req.body);
    const { name, expirationDate, category } = req.body;
    //console.log('destructured obj,', { name, expirationDate, category });
    const newItem = { name, expirationDate, category };
    models.Item.create(newItem)
    .then(data => {
        //console.log("data: ", data);
        res.locals.item = data;
        next()
    }).catch(err =>{ 
        next({
            log: `pantryController.addIteme: ERROR: ${err}`,
            message: { err: `Error occurred in pantryController.addItems`}
        })
    })
    
};

pantryController.getAllItems = (req, res, next) => {
    models.Item.find({}).exec()
      .then(data => {
        res.locals.allItems = data;
        return next();
      })
      .catch(err => {
        return next({
            log: `pantryController.getAllItems: ERROR: ${err}`,
            message: { err: `Error occurred in pantryController.getAllItems`}
        });
      });

};

module.exports = pantryController;