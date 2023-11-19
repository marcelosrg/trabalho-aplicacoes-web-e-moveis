const header = document.querySelector("header");

function StickNavBar() {
  header.classList.toggle('stick', window.scrollY);

}

window.addEventListener("scroll", StickNavBar);


const process = document.querySelectorAll(".processPhases");

console.log(process)
process.forEach((processPhases) => {
  processPhases.addEventListener("click", () => {
    processPhases.classList.toggle("active")
  })
});
