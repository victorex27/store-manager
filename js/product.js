"use strict";
export default class Product{

	constructor(id,name,price,quantity,inventory){

		
		this.name = name;
		this.price = Number(price);
		this.quantity = Number(quantity);
		this.id =id;
		this.quantity = quantity;
		this.inventory = inventory;


	}

	

	getName(){

		return this.name;
	}

	getPrice(){

		return this.price;
	}

	getQuantity(){

		return this.quantity;
	}
}