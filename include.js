function include(thing) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(thing).innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", thing+'.xml', true);
  xhttp.send();
};
