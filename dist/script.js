const burger = document.querySelector(".burger__menu");
const hNav = document.querySelector(".header__action");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  hNav.classList.toggle("open");
});

//header change color
const hColor = document.querySelector(".header");
window.addEventListener("scroll", () => {
  window.console.log(scrollY);
  if (window.scrollY >= 1) {
    hColor.classList.add("bg");
  } else {
    hColor.classList.remove("bg");
  }
});

// FAQs

const faqs = document.querySelectorAll(".faq__choice h4");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.querySelector("span").classList.toggle("open");
    faq.nextElementSibling.classList.toggle("open");
  });
});
