function resultfun()
{
	var count;
	var comp=Math.floor((Math.random()*10)%3);
	if (document.getElementById("rocke").checked) {
		count=0;
		if(comp==0){
			document.getElementById("result").innerHTML="Match results in a Draw...";
			document.getElementById("com").innerHTML="Computer chooses rock";
		}
		else if(comp==1)
		{
			document.getElementById("result").innerHTML="Computer wins!!! Better Luck next time...";
			document.getElementById("com").innerHTML="Computer chooses paper";

		}
		else if(comp==2)
		{
			document.getElementById("result").innerHTML="You won!!! Hurray Congratulations...";
			document.getElementById("com").innerHTML="Computer chooses scissor";

		}
	}
	if (document.getElementById("paper").checked) {
		count=1;
		if(comp==0){
			document.getElementById("result").innerHTML="You won!!! Hurray Congratulations...";
			document.getElementById("com").innerHTML="Computer chooses rock";
		}
		else if(comp==1)
		{
			document.getElementById("result").innerHTML="Match results in a Draw...";
			document.getElementById("com").innerHTML="Computer chooses paper";

		}
		else
		{
			document.getElementById("result").innerHTML="Computer wins!!! Better Luck next time...";
			document.getElementById("com").innerHTML="Computer chooses scissor";

		}
	}
	if (document.getElementById("scissor").checked) {
		count=2;
		if(comp==0){
			document.getElementById("result").innerHTML="Computer wins!!! Better Luck next time...";
			document.getElementById("com").innerHTML="Computer chooses rock";
		}
		else if(comp==1)
		{
			document.getElementById("result").innerHTML="You won!!! Hurray Congratulations...";
			document.getElementById("com").innerHTML="Computer chooses paper";

		}
		else
		{
			document.getElementById("result").innerHTML="Match results in a Draw...";
			document.getElementById("com").innerHTML="Computer chooses scissor";

		}
	}
	 comp=Math.floor((Math.random()*10)%3);
}