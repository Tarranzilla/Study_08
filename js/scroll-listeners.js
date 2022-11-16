const li = document.querySelectorAll(".menu-item");
const sec = document.querySelectorAll(".section-anchor");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("menu-item-active"));
  li[len].classList.add("menu-item-active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);
