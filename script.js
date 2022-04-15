const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("[data-close]");
modalTrigger.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
});
//Tabs
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");
  function hideTab() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_activ");
    });
  }
  function showTabs(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_activ");
  }
  hideTab();
  showTabs();
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTab();
          showTabs(i);
        }
      });
    }
  });
});
