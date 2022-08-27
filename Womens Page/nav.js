let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
  } else {
    document.querySelector("#navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}