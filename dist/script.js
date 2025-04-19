const burger = document.querySelector(".burger__menu");
const hNav = document.querySelector(".header__action");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  hNav.classList.toggle("open");
});

const faqs = document.querySelectorAll(".faq__item--choice h4");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.querySelector("i").classList.toggle("open");
    faq.nextElementSibling.classList.toggle("open");
  });
});
