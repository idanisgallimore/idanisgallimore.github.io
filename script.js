window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-50px";
  }
}