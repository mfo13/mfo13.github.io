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

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) && document.readyState='complete' {
    width = (screen.width+200).toString()+'px';
  }
};
