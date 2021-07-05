
function jonArray(){
	var count=0,countPass=0;
	var employees={
		"username":["abc123","jhalak","employee"],
		"password":["abc123","qwerty","mypass"]
	};
	employees.username.push("1");
	employees.password.push("1");
	for(var num=0;num<4;num++){
	if(document.getElementById("userNameId").value===employees.username[num])
	count++;
	if(document.getElementById("passwordId").value===employees.password[num])
	countPass++;
	}
	if(count==1 && countPass==1)
		alert("Welcome! You are a valid user");
	else if(count==1 && countPass!=1)
		alert("Sorry! Wrong password");
	else
		alert("Wrong Username, Not a valid user");
}