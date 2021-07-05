function emp()
{
	var employees=["Manish","Kumar","Ajay","Vijay"];
	document.getElementById("ini").innerHTML=employees.toString();
}

function Sort()
{
	var employees=["Manish","Kumar","Ajay","Vijay"];
	document.getElementById("dis").innerHTML=employees.sort().toString();

}

function Reverse()
{
	var employees=["Manish","Kumar","Ajay","Vijay"];
	document.getElementById("dis").innerHTML=employees.reverse().toString();

}

function Push()
{
	var employees=["Manish","Kumar","Ajay","Vijay"];
	employees.pop();
	employees.push("New employee");
	document.getElementById("dis").innerHTML=employees.toString();

}

function remove()
{
	var employees=["Manish","Kumar","Ajay","Vijay"];
	employees.pop();
	document.getElementById("dis").innerHTML=employees.toString();

}