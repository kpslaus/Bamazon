var inquire = require('inquire');
var MySql = require('mysql');

var connection = MySql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "Bamazon"
});

connection.query(function(err){
	if(err)
		throw err;
});

connection.query('SELECT * FROM Products', function(err, res){
	for(var i = res.length - 1; i >= 0; i--){
		res[i]
		console.log(res[i].id + " " + res[i].productName + " " + res[i].departmentName + " " + res[i].price + " " + res[i].stockQuantity + " ")
	}
})

var item = {
	name: "choice",
	type: "list",
	choices: "buy",
	message: "What item would you like to buy?"
};

inquire.prompt(buy);

var amount = {
	name: "choice",
	type: "list",
	choices: "amount",
	message: "How many would you like to but?"
};

inquire.prompt(amount);

if ( $(item).exists(){

})

connection.query("UPDATE Products SET ? WHERE ?",
	[{
		stockQuantity: 100
	},	{
		productName: "productName"
	}], function(err, res){
		if(err){
			throw err;
		}

	});

connection.end();









