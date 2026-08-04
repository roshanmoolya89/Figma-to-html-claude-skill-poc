/**
 * Rudra Portable Cabins — Home page behavior
 * - Hero carousel: auto-rotates every 6s, supports dot navigation.
 *   (Auto-rotate interval and dot-nav are an assumption — the static Figma
 *   frame only exposed 3 slide end-states and dot indicators, not timing
 *   or control behavior. See /design/spec-home.md Open questions.)
 * - Newsletter form: basic client-side handling, no backend defined in spec.
 */

(function heroCarousel() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const slides = Array.from(hero.querySelectorAll(".hero__slide"));
  const dots = Array.from(hero.querySelectorAll(".hero__dot"));
  const AUTO_ROTATE_INTERVAL_MS = 6000;
  let currentIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (currentIndex === -1) currentIndex = 0;
  let timer = null;

  function goToSlide(index) {
    slides[currentIndex].classList.remove("is-active");
    dots[currentIndex]?.classList.remove("is-active");
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add("is-active");
    dots[currentIndex]?.classList.add("is-active");
  }

  function startAutoRotate() {
    stopAutoRotate();
    timer = setInterval(() => goToSlide(currentIndex + 1), AUTO_ROTATE_INTERVAL_MS);
  }

  function stopAutoRotate() {
    if (timer) clearInterval(timer);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      startAutoRotate();
    });
  });

  hero.addEventListener("mouseenter", stopAutoRotate);
  hero.addEventListener("mouseleave", startAutoRotate);

  startAutoRotate();
})();

(function newsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector(".newsletter-form__input");
    if (!input || !input.value) return;

    // No backend/API endpoint defined in spec — placeholder confirmation only.
    input.value = "";
    input.placeholder = "Thanks for subscribing!";
    setTimeout(() => {
      input.placeholder = "Enter your email";
    }, 3000);
  });
})();
