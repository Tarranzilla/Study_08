const burger = document.getElementById("burger-primary");
const nav2 = document.querySelector(".nav-secondary");
let nav2Open = false;

burger.addEventListener("click", () => {
  if (nav2Open === false) {
    nav2.classList.add("nav-secondary-open");
    burger.classList.add("burger-active");
    nav2Open = true;
    console.log("secondary nav open");
  } else {
    nav2.classList.remove("nav-secondary-open");
    burger.classList.remove("burger-active");
    nav2Open = false;
    console.log("secondary nav closed");
  }
});
