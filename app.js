const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('REST API is running on port 8080');
});

/* middleware/tunnel added for all routes */
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});


/* http://localhost:8080/products */
app.get('/products', (req, res) => {
	res.json([
		{
			"id": 1,
			"name": "Crompton Silent Pro Fan",
			"price": 6250,
			"brand": "Crompton"
		},
		{
			"id": 2,
			"name": "Wipro Fan",
			"price": 2250,
			"brand": "Wipro"
		},
		{
			"id": 3,
			"name": "Phillips Fan",
			"price": 4250,
			"brand": "Phillips"
		}
	]);
});