"use strict";
const modalTrigger = document.querySelectorAll("[data-modal]"),
  modal = document.querySelector(".modal"),
  modalCloseBtn = document.querySelector("[data-close]");

modalTrigger.addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
});
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
});
console.log(modalTrigger);
