function inLogin(){
    var newMail=document.getElementById("emil").value;
    var regFive=/([a-zA-Z]+(@)[^\s]+)/g;

    if(!validEmail(newMail.value)){
            alert("Wrong email address");
            newMail.value="";
        }
        else if(document.getElementById("pwd").value===localStorage.getItem(newMail))
    alert("Welcome user");
    else
        alert("Wrong credentials");
}

 function validEmail(emailID) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(emailID).search (filter) != -1;
}