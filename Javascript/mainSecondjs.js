function one() {
  document.getElementById("vone").innerHTML =" ";
}
function two(){
	document.getElementById("vtwo").innerHTML=" ";
}
function three() {
  document.getElementById("vthree").innerHTML =" ";
}
function four(){
	document.getElementById("vfour").innerHTML=" ";
}
function five() {
  document.getElementById("vfive").innerHTML =" ";
}

function submitValues(){
	var onet=document.getElementById("onev").value;
	var twot=document.getElementById("twov").value;
	var threet=document.getElementById("threev").value;
	var fourt=document.getElementById("fourv").value;
	var fivet=document.getElementById("fivev").value;
		
	var count=0;
		if(!onet){
		document.getElementById("vone").innerHTML="***User name cant be blank";
		console.info("one");
		count++;
		}
		if(!twot){
		document.getElementById("vtwo").innerHTML="***Enter the email";
		count++;
		}
		if(!threet){
		document.getElementById("vthree").innerHTML="***Enter the password";
		count++;
		}
		if(!fourt){
		document.getElementById("vfour").innerHTML="***Enter the password";
		count++;
		}
		if(!fivet){
		document.getElementById("vfive").innerHTML="***Enter the mobile number";
		count++;
		}
		if(count==0)
		{
		if(!checkPassword(threet))
		{
		document.getElementById("vthree").innerHTML="**Minimum 6 character with a special character";
		}
		else if(fourt!==threet)
			document.getElementById("vfour").innerHTML="Password and Confirm password should match";
		else if(!fivet.length==10)
			document.getElementById("vfive").innerHTML="Mobile number's length should be 10";
		else{
		alert("Values accepted");

		document.getElementById("vtwo").innerHTML="w1111111111111wwwwwwwww";
		one();
		two();
		three();
		four();
		five();
	}}
	else{
		alert("Wrong values");
		document.getElementById("vtwo").innerHTML="wwwwwwwwww";
	}
}

function checkPassword(str)
  {
    var re = /(?=.*\d).{6,}/;
    return re.test(str);
  }

