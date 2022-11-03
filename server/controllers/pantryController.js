
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

pantryController.deleteItem = (req, res, next) => {
    const id = req.params.id;
    models.Item.findOneAndDelete({ _id: id })
    .then(next())
    .catch(err => {
        return next({
            log: `pantryController.deleteItem: ERROR: ${err}`,
            message: { err: `Error occurred in pantryController.deleteItem`}
        });
    });
};

pantryController.updateItem = (req, res, next) => {
    const id = req.params.id;
    const filter = { _id: id }
    const { name, expirationDate, category } = req.body;
    const update = { name, expirationDate, category }
    models.Item.findOneAndUpdate(filter, update)
    .then(next())
    .catch(err => {
        return next({
            log: `pantryController.updateItem: ERROR: ${err}`,
            message: { err: `Error occurred in pantryController.updateItem`}
        });
      });
}

module.exports = pantryController;