"use strict";
export default class Order{

	constructor(id,products,user){


		this.id = id;
		this.products = products;
		this.user = user;


		let today = new Date();

		let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

		let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

		//this.dateTime = date+' '+time;
		this.dateCreated = dateCreated;

	}

	public getId(){

		return this.id;
	}

	public getProductId(){

		return this.productId;
	}

	public getAttendantId(){

		return this.attendantId;

	}

	public getDateCreated(){

		return this.dateCreated;
	}



}