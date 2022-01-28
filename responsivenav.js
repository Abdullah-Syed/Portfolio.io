function myFunction() {
    var x = document.getElementById("myTopNavigation");
    if (x.className === "navBar") {
      x.className += "responsive";
    } else {
      x.className = "navBar";
    }
  }