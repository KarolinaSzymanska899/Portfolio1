// Navigation Menu:

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav > ul > li > a");
const questionContainers = document.querySelectorAll(".question-container");

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

questionContainers.forEach((container) => {
  const arrow = container.querySelector("i");
  const paragraph = container.querySelector("p");

  arrow.addEventListener("click", () => {
    paragraph.classList.toggle("hidden");
  });
});
