var fetchData=() =>{ 
  var count=0;
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if(this.status==429)
      alert("Too many requests! Please Refresh the page");
    if (this.readyState == 4 && this.status == 200) {
      var parsedData=JSON.parse(this.responseText);
    var option="";
    var info = parsedData.data;
    var enteredId=document.getElementById("textId").value;
    var enteredName=document.getElementById("userId").value;

    for(var num=0;num<info.length;num++)
    {
      if(enteredId==info[num].id && enteredName==info[num].employee_name)
       { 
          count++;
          var userData={"id":info[num].id,"name":info[num].employee_name};
          localStorage.setItem("user",JSON.stringify(userData));

        }
    }

      if(count==1)
        alert("Welcome Back!!");
      else
        alert("You are not a valid user!!!");
    }
  };
  httpRequest.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
  httpRequest.send();

}