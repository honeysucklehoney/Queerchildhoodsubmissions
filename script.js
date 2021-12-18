

var consent = document.getElementById("con");
// var moreText = document.getElementById("letslarger");


console.log("hi");


function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("consent");
  // Get the output text
  var text = document.getElementById("email");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
