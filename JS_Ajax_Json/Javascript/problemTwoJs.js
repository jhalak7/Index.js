function valueChange(){
	var employee={
		"1":"Rahul",
		"2":"Ram",
		"3":"Rajesh"
	};
	document.getElementById("nameId").innerHTML=employee[document.getElementById("dropId").value];
}