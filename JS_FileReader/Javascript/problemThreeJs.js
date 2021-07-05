

  var openFile = function() {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      document.getElementById("contentId").innerHTML="Content: "+text;
      document.getElementById("lengthId").innerHTML="Length: "+text.byteLength;
    };
    reader.readAsText(input.files[0]);
  }
