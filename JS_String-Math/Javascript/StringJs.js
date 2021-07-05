var nomber = /^[0-9]+$/;
function upper(){
	var checkFirst=document.getElementById("firstCheck");
	var nameString=document.getElementById("stringName").value;
	if(checkFirst.checked==true)
	{	
		alert(nameString.toUpperCase());
		checkFirst.innerHTML="Convert String to Lowercase";
	}
	else{
			alert(nameString.toLowerCase());
	}
}
function testEmail(){

	var checkSecond=document.getElementById("secondCheck");
	var emailString=document.getElementById("emailCheck").value;
	if(checkSecond.checked==true)
	{	
		if(!validEmail(emailString))
		{
		alert("Email entered is invalid");
		}
		else
		{
			alert("Thank you..");
		}	
	}
}
function twoPhone(){
	var phoneString=document.getElementById("phoneId").value;
	if(phoneString.length!=10)
	{
		alert("Invalid phone number");
	}
	else if(!phoneString.match(nomber))
	{
		alert("Mobile number should only contain integer");
	}
	else
	{
		alert("First two characters are:"+phoneString.substring(0,2));
	}
}
function faxLength(){
	if(!document.getElementById("faxId").value.match(nomber))
		alert("Fax should be consists of only integers");
	else
	alert("Length of Fax number is:"+document.getElementById("faxId").value.length);
}
 function validEmail(emailID) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(emailID).search (filter) != -1;
}