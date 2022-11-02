const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Emily_Paine:L0j5FrAIwCda9Lha@cluster0.bebdqci.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Pantry'
})
.then(() => console.log('Connected to MongoDB.'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    expiration_date: Number,
    category: String,
});

const Item = mongoose.model('item', itemSchema);

const categorySchema = new Schema({
    name: String,

});

const Category = mongoose.model('category', categorySchema);

module.exports = {
    Item,
    Category
};