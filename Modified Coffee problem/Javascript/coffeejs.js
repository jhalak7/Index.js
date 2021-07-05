function regular()
{  

	reg=prompt("How many bags of Regular coffee you need");
	setReg();
}
function setReg()
{
	return reg;
}
function decaf()
{
	dec=prompt("How many bags of Decaf coffee you need");
	setDec();
}
function setDec()
{
	return dec;
}

function mocha()
{
	moc=prompt("How many bags of Mocha coffee you need");
	setMoc();
}
function setMoc()
{
	return moc;
}

function checkout()
{
var total=reg*9+dec*11+moc*8;
var discountAmount=0;
document.getElementById("quanreg").innerHTML=reg;
document.getElementById("quanmoc").innerHTML=moc;
document.getElementById("quandec").innerHTML=dec;
document.getElementById("totreg").innerHTML=reg*9;
document.getElementById("totmoc").innerHTML=moc*11;
document.getElementById("totdec").innerHTML=dec*8;
document.getElementById("totall").innerHTML=total;
document.getElementById("ch").style.color="#FFFFFF";
document.getElementById("ch").style.backgroundColor="#000000";
if(total>100)
	discountAmount=15;
document.getElementById("disc").innerHTML="-"+discountAmount;
document.getElementById("finalAmount").innerHTML=total-discountAmount;
}