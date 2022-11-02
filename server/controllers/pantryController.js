const models = require('../models/pantryModels');

const pantryController = {};

pantryController.addItem = (err, req, res, next) => {
    const { name, date, category } = req.body;
    
    models.Item.Create({
        name, date, category
    })
    .then(data => {
        res.locals.item = data;
        return next()
    }).catch(err =>{ 
        return next({
            log: `pantryController.addIteme: ERROR: ${err}`,
            message: { err: `Error occurred in pantryController.addItems`}
        })
    })
    
}

module.exports = pantryController;