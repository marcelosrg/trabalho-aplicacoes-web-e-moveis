const header = document.querySelector("header");

function StickNavBar() {
  header.classList.toggle('stick', window.scrollY);

}

window.addEventListener("scroll", StickNavBar);
