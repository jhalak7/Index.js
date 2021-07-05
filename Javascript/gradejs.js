function showGrade()
{
document.write("Select grade value: <select name=dropdown id=jet>");
for (var i=0; i <=100; i++)
{
document.write("<option>" + i + "</option>");
}
}

function check()
{
	var num=document.getElementById("jet").value;
	if(num>=80)
	document.getElementById("resu").innerHTML="You will get Grade A";
		else if(num<80 && num>60)
	document.getElementById("resu").innerHTML="You will get Grade B";
		else
	document.getElementById("resu").innerHTML="You will get Grade C";
}