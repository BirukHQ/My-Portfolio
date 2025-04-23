// script.js

document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const portfolio = document.getElementById("portfolio");
  const header = document.querySelector("header");

  enterBtn.addEventListener("click", () => {
    document.querySelector(".hero").style.display = "none";
    portfolio.classList.add("show");
    header.classList.add("sticky");
  });
});
