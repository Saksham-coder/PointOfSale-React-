const Sell = require('./../models/sellModel')

exports.postSell = async(req, res) => {
    try{
        console.log(req.body)
        const newSell = await Sell.create(req.body)
        console.log(newSell)
        res.status(201).json({
            status: 'success',
            data: newSell
        });
    }catch(err){
        console.log(err)
    }
}

exports.getSell = async(req, res) => {
    try{
        const newSell = await Sell.findById(req.params.id)
        console.log(newSell)
        res.status(200).json({
            status: 'success',
            data: newSell
        });
    }catch(err){
        console.log(err)
    }
}