const sectionFaders = document.querySelectorAll(".fade-in");

const appearOnScroll_options = {
  threshold: 0.01,
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOnScroll_options);

sectionFaders.forEach((sectionFader) => {
  appearOnScroll.observe(sectionFader);
});
