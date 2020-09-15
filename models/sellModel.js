const mongoose = require('mongoose')

const sellSchema = new mongoose.Schema({
    items: [
        {
           details : String ,
           price: String,
           quantity: String
        }
    ],
    discount: Number,
    distype: String,
    total:Number,
    revenue:String,
    customer:{
        paymentType:String,
        phone: String,
        name: String,
        email: String,
        shippingAddress: String,
        city: String,
        pincode: String
    },
    User: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [ true , 'Customer details must be posted by User/owner']
    },
    date: String
},
{
    toJSON: {virtuals:true},
    toObject: {virtual:true}
}
)

const Sell = mongoose.model('Sell', sellSchema);

module.exports = Sell