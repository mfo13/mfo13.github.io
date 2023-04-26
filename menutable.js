function menutable() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("menutable").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "navbar.xml", true);
  xhttp.send();
};
