const express = require('express')

const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')

const app = express()

app.use(express.json())
 
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)

app.all('*', (req, res, next) => {
	res.status(404).json({
		status: 'fail',
		message: `Cant find ${req.originalUrl} on this server`
    });
});

module.exports = app