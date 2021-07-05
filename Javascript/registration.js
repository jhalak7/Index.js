
function inErrorLogin(){
    var disable=false;
    var newMail=document.getElementById("emil");
    var emailLoginError=document.getElementById("emailLoginError");
    emailLoginError.innerHTML="&nbsp;";
    document.getElementById("passLoginError").innerHTML="&nbsp;";

        if(!validEmail(newMail.value)){
            emailLoginError.innerHTML="Wrong email address";
            disable=true;

        }
        if(!newMail.value)
        {
            emailLoginError.innerHTML="*** Enter the Email";
            disable=true;
        }
        
        if(!document.getElementById("pass").value)
        {
        document.getElementById("passLoginError").innerHTML="*** Enter the Password";
        disable=true;
        }
        document.getElementById("loginId").disabled=disable;
        if(!disable)
        {
        document.getElementById("loginId").style.cursor="pointer";
        document.getElementById("loginId").style.color = "white";
        document.getElementById("loginId").addEventListener("mouseover", function() {
            document.getElementById("loginId").style.color = "rgb(228, 224, 224)";
        });
        document.getElementById("loginId").addEventListener("mouseout", function() {
            document.getElementById("loginId").style.color = "white";
        });
        }
    
}


function inLogin(){
    //You can get values here on click in Login page
}

function inRegisterError(){
    var disable=false;
    var newMail=document.getElementById("emil");
    var firstError=document.getElementById("firstError");
    var secondError=document.getElementById("secondError");
    var emailError=document.getElementById("emailError");
    var passError=document.getElementById("passError");
    var conpassError=document.getElementById("conpassError");
    firstError.innerHTML="&nbsp;";
    secondError.innerHTML="&nbsp;";
    emailError.innerHTML="&nbsp;";
    passError.innerHTML="&nbsp;";
    conpassError.innerHTML="&nbsp;";

    if(!validEmail(newMail.value)){
        emailError.innerHTML="Wrong email address";
        disable=true;
    }
    else if(document.getElementById("pass").value!==document.getElementById("conpass").value)
    {
        conpassError.innerHTML="Password and Confirm password does not match";
        disable=true;

    }
  
    if(!document.getElementsByTagName("input")[0].value)
    {
    firstError.innerHTML="*** Enter the First Name";
    disable=true;
    }
    if(!document.getElementsByTagName("input")[1].value)
    {
    secondError.innerHTML="*** Enter the Last Name";
    disable=true;
    }
    if(!document.getElementsByTagName("input")[2].value)
    {
    emailError.innerHTML="*** Enter the Email";
    disable=true;
    }
    if(!document.getElementsByTagName("input")[3].value)
    {
    passError.innerHTML="*** Enter the Password";
    disable=true;
    }
    if(!document.getElementsByTagName("input")[4].value)
    {
    conpassError.innerHTML="*** Enter the Password";
    disable=true;
    }


    document.getElementById("loginId").disabled=disable;
    if(!disable)
    {
    document.getElementById("loginId").style.cursor="pointer";
    document.getElementById("loginId").style.color = "white";
    document.getElementById("loginId").addEventListener("mouseover", function() {
        document.getElementById("loginId").style.color = "rgb(228, 224, 224)";
    });
    document.getElementById("loginId").addEventListener("mouseout", function() {
        document.getElementById("loginId").style.color = "white";
    });
    }
}

function inRegister(){
    //Get values here on click on Register button
    alert("d")
}

 function validEmail(emailID) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@(\bgmail\b)+\.(\bcom\b)+(\.[\w\-\+_]+)*\s*$/;
    return String(emailID).search (filter) != -1;
}