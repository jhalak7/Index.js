function ageCheck(){
	var age=document.getElementById("textAge").value;
	try{
		if(age<18) throw "more than 18 years ";
		if(isNaN(age)) throw "a number ";
		alert("Age is "+ age);
	}catch(error)
	{
		alert("Age should be "+error);
	}

}
