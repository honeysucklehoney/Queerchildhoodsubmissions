
console.log("hi");


function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("consent");
  // Get the output text
  var text = document.getElementById("email");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.opacity = "100%";
    $(text).attr('href','mailto:Qu33rchildh00d@gmail.com?subject=Queer%20childhood%20submission');

  } else {
    text.style.opacity = "40%";
    $(text).attr('href','queerchildhoodsubmissions.html');

  }
}
