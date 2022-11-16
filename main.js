(function (h, o, t, j, a, r) {
    h.hj =
        h.hj ||
        function () {
            (h.hj.q = h.hj.q || []).push(arguments);
        };
    h._hjSettings = { hjid: 3249710, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

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
