var add=()=>{
	var str=prompt("Enter a string with a summation task:"+"\n"+"Note:Values should be separated by '+'");

	var arr = str.split("+");
	var result=0;
	var count;
for (count = 0; count < arr.length; count++) {
  result += parseInt(arr[count]);
}

document.getElementById("demoId").innerHTML ="Result is " +result;
}