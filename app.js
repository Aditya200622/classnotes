// ================= MOBILE NAV MENU =================
const menuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Close menu after click (mobile UX)
document.querySelectorAll(".navbar nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});


// ================= RESPONSIVE FLOAT CARD FIX =================
const floatCard = document.querySelector(".float-card");
const heroImg = document.querySelector(".hero-img");

function adjustFloatCard() {
  if (window.innerWidth < 768) {
    floatCard.style.left = "50%";
    floatCard.style.bottom = "-40px";
    floatCard.style.transform = "translateX(-50%)";
    heroImg.style.width = "80%";
  } else {
    floatCard.style.left = "-70px";
    floatCard.style.bottom = "40px";
    floatCard.style.transform = "translateX(0)";
    heroImg.style.width = "450px";
  }
}

window.addEventListener("resize", adjustFloatCard);
window.addEventListener("load", adjustFloatCard);

// ================= SMOOTH SCROLL TOP =================
const scrollTopBtn = document.createElement("button");
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.innerHTML = "↑";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) scrollTopBtn.classList.add("show");
  else scrollTopBtn.classList.remove("show");
});

// ================= ANIMATION ON SCROLL =================
const elements = document.querySelectorAll(".fade-up");

function animateElements() {
  const trigger = window.innerHeight * 0.85;
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("active");
  });
}

window.addEventListener("scroll", animateElements);
window.addEventListener("load", animateElements);
