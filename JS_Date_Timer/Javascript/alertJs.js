
var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();
function dateCheck(){
	document.getElementById("dateBut").innerHTML="Loading...";
	document.getElementById("dateBut").disabled=true;
	setTimeout(showDate,2000);
}
function monthCheck(){
	document.getElementById("monthBut").innerHTML="Loading...";
	document.getElementById("monthBut").disabled=true;
	setTimeout(showMonth,2000);
}
function yearCheck(){
	document.getElementById("yearBut").innerHTML="Loading...";
	document.getElementById("yearBut").disabled=true;
	setTimeout(showYear,2000);
}

function showDate(){
	alert("Today is"+day);
	document.getElementById("dateBut").innerHTML="Check the date";
	document.getElementById("dateBut").disabled=false;
}
function showMonth(){
	alert("Its November ("+month+")");
	document.getElementById("monthBut").innerHTML="What month is this?";
	document.getElementById("monthBut").disabled=false;
}
function showYear(){
	alert("Nope, Its "+year);
	document.getElementById("yearBut").innerHTML="Is this 2019?";
	document.getElementById("yearBut").disabled=false;
}