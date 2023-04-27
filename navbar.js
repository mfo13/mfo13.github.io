function navbar() {
  var width = '100%';
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    width = (screen.width+200).toString()+'px';
  }
  document.getElementById('menuicon').classList.toggle("change");
  document.getElementById('menuicon').innerHTML = document.getElementById('menuicon').innerHTML=='x' ? '+' : 'x';
  document.getElementById('menu').style.display = document.getElementById('menu').style.display=='none' ? 'block' : 'none';
  document.getElementById('menutable').style.background = document.getElementById('menu').style.display=='none' ? 'white' : 'black';
  document.getElementById('menutable').style.width = document.getElementById('menu').style.display=='none' ? '0px' : '200px';
  document.getElementById('maintable').style.width = document.getElementById('menu').style.display=='none' ? '100%' : width;
}