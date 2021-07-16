window.onscroll = function () {
  fixNavTop();
};

const nav = document.getElementById("nav");
const sticky = nav.offsetTop;
function fixNavTop() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
