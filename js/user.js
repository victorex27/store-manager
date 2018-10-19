"use strict";
class User{


	constructor(id,password){

		this.id = id;
		this.password = password;
		
	}



	getId(){

		return this.id;
	}


}
module.exports = User;