function saveDetails(){
	localStorage.setItem("userid",document.getElementById("userID").value);
	localStorage.setItem("name",document.getElementById("nameID").value);
	localStorage.setItem("age",document.getElementById("ageID").value);
	localStorage.setItem("mobile",document.getElementById("mobileID").value);
	document.getElementById("userID").value="";
	document.getElementById("nameID").value="";
	document.getElementById("ageID").value="";
	document.getElementById("mobileID").value="";
}
function showDetails(){
	document.getElementById("userValue").innerHTML=localStorage.getItem("userid");
	document.getElementById("nameValue").innerHTML=localStorage.getItem("name");
	document.getElementById("ageValue").innerHTML=localStorage.getItem("age");
	document.getElementById("mobileValue").innerHTML=localStorage.getItem("mobile");
}