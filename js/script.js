// Navigation Menu

let isMenuOpen = false;

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    menuButton.classList.add("open");
    menu.classList.add("menu-open");
  } else {
    menuButton.classList.remove("open");
    menu.classList.remove("menu-open");
  }
});

// shows the answers in Section About:

/*
const arrowsDown = document.querySelectorAll("#arrow-down");
const extraSentences = document.querySelectorAll("#extra-sentence");

arrowsDown.onclick = function () {
  extraSentences[i].style.display = "block";
};
*/
