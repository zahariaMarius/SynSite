window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").classList.remove("navbar-dark");
    document.getElementById("navbar").classList.add("navbar-light");
  } else {
    document.getElementById("navbar").classList.remove("navbar-light");
    document.getElementById("navbar").classList.add("navbar-dark");
  }
}