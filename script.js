// ---------- Footer year ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Header: background on scroll ----------
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (window.scrollY > 30) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---------- Mobile nav ----------
const navLinks = document.getElementById("nav-links");
const navToggle = document.querySelector(".nav-toggle");
const closeNav = () => {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
};
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.body.style.overflow = open ? "hidden" : "";
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// ---------- Contact form: Netlify if available, mailto fallback ----------
const form = document.getElementById("catering-form");
if (form) {
  const hasNetlify = form.hasAttribute("data-netlify");
  form.addEventListener("submit", (e) => {
    // Let Netlify handle it on production
    if (hasNetlify && window.location.hostname.endsWith("netlify.app")) return;
    if (hasNetlify && window.location.hostname === "lomitobonito.com") return;

    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    const subject = `Catering inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
    window.location.href = `mailto:hello@lomitobonito.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  });
}
