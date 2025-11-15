// Smooth Scroll Up Button Example (optional)
document.addEventListener("scroll", () => {
  const btn = document.querySelector(".scroll-top");
  if (window.scrollY > 400) btn.classList.add("show");
  else btn.classList.remove("show");
});
