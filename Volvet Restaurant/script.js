// Navbar toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => { navLinks.classList.toggle("active"); });

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    if(top < windowHeight - 100) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// FAQ Accordion
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Online Menu Ordering
const orderButtons = document.querySelectorAll(".order-btn");
const menuItemInput = document.getElementById("menuItem");

orderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    menuItemInput.value = btn.dataset.item;
    menuItemInput.scrollIntoView({behavior:"smooth", block:"center"});
  });
});

const orderForm = document.getElementById("order-form");
const orderConfirmation = document.getElementById("orderConfirmation");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("customerName").value;
  const item = document.getElementById("menuItem").value;
  orderConfirmation.textContent = `Thank you, ${name}! Your order for "${item}" has been received.`;
  orderForm.reset();
});