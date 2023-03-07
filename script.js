let modal = document.querySelector(".modal");
let modalBtn = document.querySelectorAll(".pop");

let poolModal = document.querySelector(".modal-talent");
let grayModalBtn = document.querySelectorAll(".pop2");

modalBtn.forEach((popUp) =>
  popUp.addEventListener("click", () => {
    popUp.classList.add("pop");
    modal.style.display = "flex";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  })
);

grayModalBtn.forEach((grayBtn) => {
  grayBtn.addEventListener("click", () => {
    poolModal.style.display = "flex";
    poolModal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  });
});

window.addEventListener("click", function (e) {
  const target = e.target;
  if (e.target === modal) {
    modal.style.display = "none";
  } else if (e.target === poolModal) {
    poolModal.style.display = "none";
  }
});

// navbar
let navContainer = document.getElementById("menu");
let links = navContainer.getElementsByClassName("btn");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";
  });
}
