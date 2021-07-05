var rotate=() =>{

	var arra=["one","two","three"];
	var last=arra.shift();
	arra.push(last);

	document.getElementById("valueId").innerHTML=arra;
}

var secondIndexOf=()=>{
	var coun=0;
	const stringOne=prompt("Enter the first string");
	const stringTwo=prompt("Enter the second string");
	for(var count=0;count<stringOne.length-1;count++)
	{
	if(stringOne.substring(count,count+2)==stringTwo)
		coun++;
	}
	document.getElementById("stringId").innerHTML=coun+" occurences found";

}

var concatUp=()=>{
	var arrayOne=[1,2,3];
	var arrayTwo=[8,5];
	var arrayThree=["a","b"];
	var arrayFour=["c","d"];
	if(arrayOne.length<=arrayTwo.length)
		document.getElementById("concatId1").innerHTML+=" = ["+arrayOne.concat(arrayTwo)+"]";
	else
		document.getElementById("concatId1").innerHTML+=" = ["+arrayTwo.concat(arrayOne)+"]";
	if(arrayThree.length<=arrayFour.length)
		document.getElementById("concatId2").innerHTML+=" = ["+arrayThree.concat(arrayFour)+"]";
	else
		document.getElementById("concatId2").innerHTML+=" = ["+arrayFour.concat(arrayThree)+"]";
}


var list=()=>{
	var names=["Huey","Dewey","Louie","Rich"];

	document.getElementById("listId").innerHTML=names;
	var str=" ";
	for(var tan=0;tan<names.length;tan++)
	{
		if(tan==names.length-1)
			str+=" and ";
		else if(tan>0 && tan<names.length-1)
			str+=","
		str+=" "+names[tan];
	}
	document.getElementById("listId").innerHTML=str;
}