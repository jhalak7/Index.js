function changeDeta(){
	var employee={
	firstName:"Amitabh",
	lastName:"Bacchhan"
				};
	document.getElementById("showDetails").innerHTML=" ";
	for(num in employee)
	document.getElementById("showDetails").innerHTML+=" "+employee[num];
}

function addProp()
{	
	changeDeta();
	document.getElementById("showDetails").innerHTML=" ";
	employee.age="60";
	for(num in employee)
	document.getElementById("showDetails").innerHTML+=" "+employee[num];
}

function changeProp()
{	
	changeDeta();
	employee.firstName="Shahrukh";
	employee.lastName="Khan";
	document.getElementById("showDetails").innerHTML=" ";
	for(num in employee)
	document.getElementById("showDetails").innerHTML+=" "+employee[num];
}

