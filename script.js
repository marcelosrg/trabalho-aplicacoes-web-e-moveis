const header = document.querySelector("header");

function StickNavBar() {
  header.classList.toggle('stick', window.scrollY);

}

window.addEventListener("scroll", StickNavBar);




const scrollIcon = document.querySelector(".scroll-icon")

function ScrollMenu () {
  scrollIcon.classList.toggle("active", window.scrollY > 80);
}

window.addEventListener("scroll", ScrollMenu)




const process = document.querySelectorAll(".processPhases");

process.forEach((processPhases) => {
  processPhases.addEventListener("click", () => {
    processPhases.classList.toggle("active")
  })
});
