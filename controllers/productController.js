const Product = require('./../models/productModel')

exports.postProduct = async(req, res) => {
    try{
        const newProduct =await Product.create(req.body)
        res.status(201).json({
            status: 'success',
            data: newProduct
        });
    }catch(err){
        console.log(err)
    }
}

exports.getProduct = async(req, res) => {
    try{
        const newProduct =await Product.find()
        res.status(201).json({
            status: 'success',
            data: newProduct
        });
    }catch(err){
        console.log(err)
    }
}