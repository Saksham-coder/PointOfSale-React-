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

exports.getSingleProduct =async(req, res) => {
    try{
        const newProduct =await Product.findById(req.params.id)
        res.status(201).json({
            status: 'success',
            data: newProduct
        });
    }catch(err){ 
        console.log(err)
    }
}

exports.updateSingleProduct=async(req, res) => {
    try{
        const newProduct =await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
        });
        console.log(newProduct)
        res.status(201).json({
            status: 'success',
            data: newProduct
        });
    }catch(err){ 
        console.log(err)
    }
}