const mongoose = require('mongoose')

const productScehma = new mongoose.Schema({
    details: String,
    category: String,
    price: Number,
    User: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [ true , 'Product must be posted by User']
    }
})

const Product = mongoose.model('Product', productScehma);

module.exports = Product