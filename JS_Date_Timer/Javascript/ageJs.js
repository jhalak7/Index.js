function yearsOld(){
	var dateOfBirth=prompt("Hey amigo, What's your date of birth? Please submit in DDMMYYYY format");
	var dateAge=new Date();
	var ageInYears=0;

var dayAge=dateAge.getDate();  
var monthAge=dateAge.getMonth()+1;  
var yearAge=dateAge.getFullYear();
	var arrayAge=[];
	if(dateOfBirth.length==8)
	{
		var dobDate=dateOfBirth.substring(0,2);
		var dobMonth=dateOfBirth.substring(2,4);
		var dobYear=dateOfBirth.substring(4,8);
		ageInYears=yearAge-dobYear-1;
		if(monthAge-dobMonth>-2 && dayAge-dobDate>0)
			ageInYears++;
		alert("Your age is"+ageInYears);
	}
	else
	{
		alert("Please refresh the page");
	}
}