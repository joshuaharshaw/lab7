var groceryList = [
{name: "Donut", price: 1.69, quantity: 0}, 
{name: "Bagel", price: 2.19,  quantity: 0}, 
{name: "Loaf", price: 1.19,  quantity: 0},
{name: "Pastry", price: 1.22,  quantity: 0}, 
{name: "Pie", price: 7.01,  quantity: 0}
];

function tallyItems (groceries) {

	var subtotal = 0;

	for (var i = 0; i < groceries.length; i++) {
	
		var listItem = groceries[i].name;
		var listPrice = groceries[i].price;

		var finalItem = `<div class="foodItem">${listItem} <span>$${listPrice}</span></div>`;

		var target = document.getElementById("list-content");

		target.innerHTML+= finalItem;


		subtotal+=groceries[i].price;

	}

	target.innerHTML+= `<div class="foodItem">Subtotal <span>$${subtotal.toFixed(2)}</span></div>`;

	document.getElementById("finalTotal").innerHTML = "$" + (subtotal * 1.06).toFixed(2);

}

tallyItems(groceryList);
// function addItem (e) {
	
// 	var target = document.getElementById('list-content');
	
// 	var item = e.dataset.index;

// 	var totalItem = 


// 	if (item.quantity === 0) {

// 		target.append(totalItem);

// 	}
// } 