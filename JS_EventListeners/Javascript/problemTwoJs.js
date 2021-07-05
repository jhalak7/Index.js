function checkStyle(){
	if(document.getElementById("checkOne").checked)
	{
		document.getElementById("labelOne").classList.add("addStyl");
	}
	else
	{

		document.getElementById("labelOne").classList.remove("addStyl");
	}
}
function checkTwoStyle(){
	if(document.getElementById("checkTwo").checked)
	{
		document.getElementById("labelTwo").classList.add("addStyl");
	}
	else
	{

		document.getElementById("labelTwo").classList.remove("addStyl");
	}
}

function checkThreeStyle(){
	if(document.getElementById("checkThree").checked)
	{
		document.getElementById("labelThree").classList.add("addStyl");
	}
	else
	{

		document.getElementById("labelThree").classList.remove("addStyl");
	}
}