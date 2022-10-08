// Navigation Menu

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav > ul > li > a");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  menu.classList.toggle("menu-open");
});

menuItems.forEach((e) => {
  e.addEventListener("click", () => {
    menuButton.classList.remove("open");
    menu.classList.remove("menu-open");
  });
});

// shows the answers in Section About:

/*
const arrowsDown = document.querySelectorAll("#arrow-down");
const extraSentences = document.querySelectorAll("#extra-sentence");

arrowsDown.onclick = function () {
  extraSentences[i].style.display = "block";
};
*/
