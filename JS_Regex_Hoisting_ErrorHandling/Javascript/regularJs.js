
const ex1 = "The quick brown fox jumped over the lazy dog";
const ex2 = "A1B2C3D4E5F6G7H8I9J10";
const ex3 = "The salad costs $9.99";
const ex4 = "Contact customer support on 0800 300 500";
const ex5 = "You can contact me on Twitter @codebubb or james@juniordevelopercentral.com";
function loadContent()
{
document.getElementById("statementOne").innerHTML=ex1;
document.getElementById("statementTwo").innerHTML=ex2;
document.getElementById("statementThree").innerHTML=ex3;
document.getElementById("statementFour").innerHTML=ex4;
document.getElementById("statementFive").innerHTML=ex5;

}
function buttonOne(){
	var regOne=/\b[a-zA-Z]{3}\b/g;
	document.getElementById("solutionOne").innerHTML=ex1.match(regOne);
}
function buttonTwo(){
	var regTwo=/[a-zA-Z]/g;
	document.getElementById("solutionTwo").innerHTML=ex2.match(regTwo).join("");
}
function buttonThree(){
	var regThree=/([^$]+$)/g;
	document.getElementById("solutionThree").innerHTML=ex3.match(regThree);
}
function buttonFour(){
	var regFour=/\d/g;
	document.getElementById("solutionFour").innerHTML=ex4.match(regFour).join("");
}
function buttonFive(){
	var regFive=/([a-zA-Z]+(@)[^\s]+)/g;
	document.getElementById("solutionFive").innerHTML=ex5.match(regFive);
}