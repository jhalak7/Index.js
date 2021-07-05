function inSignup(){
	var newEmail=document.getElementById("emailId");
	var newPass=document.getElementById("passId");

	var regFive=/([a-zA-Z]+(@)[^\s]+)/g;
	if(document.getElementById("rpassId").value!==newPass.value)
		{
			alert("Password is not matching");
			document.getElementById("rpassId").value="";
		}
		else if(!validEmail(newEmail.value)){
			alert("Wrong email address");
			newEmail.value="";
		}
		else{
			localStorage.setItem(newEmail.value,newPass.value);
	document.getElementById("backId").style.color="#ffffff";
	document.getElementById("backId").style.backgroundColor="#ff8b3d";
	document.getElementById("backId").style.cursor="pointer";
	}
}
 function validEmail(emailID) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(emailID).search (filter) != -1;
}


