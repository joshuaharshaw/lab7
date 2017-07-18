var groceryList = [
{name: "Salmon",price: 5.69}, 
{name: "Apples",price: 3.19}, 
{name: "Pretzels",price: 6.45},
{name: "Water",price: 1.22}, 
{name: "Pop",price: 2.01}];


function tallyItems (groceries) {

	console.log("This is your tally for the day:");

	var subtotal = 0;

	for (var i = 0; i < groceries.length; i++) {
	
	var listItem = groceries[i].name + ": " + groceries[i].price;
	
	subtotal+=groceries[i].price;

	console.log(listItem);
	}

	console.log("Subtotal: $" + subtotal.toFixed(2));

	console.log("Final Total: $" + (subtotal * 1.06).toFixed(2));

}

