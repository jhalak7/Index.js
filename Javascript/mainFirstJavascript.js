function errorone() {
  document.getElementById("errorone").innerHTML = " ";
}
function errortwo(){
	document.getElementById("errortwo").innerHTML=" ";
}



function add(){
	var firstp=document.getElementById("firstp").value;
	var second=document.getElementById("second").value;

	var result=Number(firstp)+Number(second);

   if (!isNaN(result))
	{
	if(!firstp)
	{
  document.getElementById("errorone").innerHTML = "*** Enter the value of a ";

	document.getElementById("result").innerHTML=" ";
	
	
}
	else{
		if(!second)
	{
  document.getElementById("errortwo").innerHTML = "*** Enter the value of b ";

	document.getElementById("result").innerHTML=" ";
	}
	else{
	document.getElementById("result").innerHTML="Addition of "+ firstp + " and "+second + " is "+result;
}
	}

}
	else{

  document.getElementById("errortwo").innerHTML = "*** Enter the integer value ";


	document.getElementById("result").innerHTML=" ";
	}
}


function sub(){
	var firstp=document.getElementById("firstp").value;
	var second=document.getElementById("second").value;

	var result=Number(firstp)-Number(second);

   if (!isNaN(result))
	{
	if(!firstp)
	{
  document.getElementById("errorone").innerHTML = "*** Enter the value of a ";

	document.getElementById("result").innerHTML=" ";
	
	if(!second)
	{
  document.getElementById("errortwo").innerHTML = "*** Enter the value of b ";

	document.getElementById("result").innerHTML=" ";
	}
}
	else{
	document.getElementById("result").innerHTML="Addition of "+ firstp + " and "+second + " is "+result;
	}
}
	else{

  document.getElementById("errortwo").innerHTML = "*** Enter the integer value ";


	document.getElementById("result").innerHTML=" ";
	}
}


function mul(){
	var firstp=document.getElementById("firstp").value;
	var second=document.getElementById("second").value;

	var result=Number(firstp)*Number(second);

   if (!isNaN(result))
	{
	if(!firstp)
	{
  document.getElementById("errorone").innerHTML = "*** Enter the value of a ";

	document.getElementById("result").innerHTML=" ";
	
	if(!second)
	{
  document.getElementById("errortwo").innerHTML = "*** Enter the value of b ";

	document.getElementById("result").innerHTML=" ";
	}
}
	else{
	document.getElementById("result").innerHTML="Addition of "+ firstp + " and "+second + " is "+result;
	}
}
	else{

  document.getElementById("errortwo").innerHTML = "*** Enter the integer value ";


	document.getElementById("result").innerHTML=" ";
	}
}


function div(){
	var firstp=document.getElementById("firstp").value;
	var second=document.getElementById("second").value;

	var result=Number(firstp)/Number(second);

   if (!isNaN(result))
	{
	if(!firstp)
	{
  document.getElementById("errorone").innerHTML = "*** Enter the value of a ";

	document.getElementById("result").innerHTML=" ";
	
	if(!second)
	{
  document.getElementById("errortwo").innerHTML = "*** Enter the value of b ";

	document.getElementById("result").innerHTML=" ";
	}
}
	else{
	document.getElementById("result").innerHTML="Addition of "+ firstp + " and "+second + " is "+result;
	}
}
	else{

  document.getElementById("errortwo").innerHTML = "*** Enter the integer value ";


	document.getElementById("result").innerHTML=" ";
	}
}