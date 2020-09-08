const mongoose = require('mongoose')

const app = require('./app')

const DB = "mongodb+srv://saksham:tVhdUwhmzpTxi1Gr@cluster0.4vyjg.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then((con) => {
		console.log('DATABSE connected successfully');
	});

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}.....`);
});