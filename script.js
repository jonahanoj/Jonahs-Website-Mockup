(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  const yearEl = document.querySelector("#year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Sticky header shadow on scroll */
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  if (toggle && menu) {
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  /* Front-end-only contact form */
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector("#name");
      const email = form.querySelector("#email");

      status.classList.remove("is-success", "is-error");

      if (!name.value.trim() || !email.value.trim()) {
        status.textContent = "Please enter your name and email so we can reach you.";
        status.classList.add("is-error");
        return;
      }

      if (!email.validity.valid) {
        status.textContent = "Please enter a valid email address.";
        status.classList.add("is-error");
        return;
      }

      /* Demo only - no backend. Wire to Formspree / Netlify Forms / etc. later. */
      status.textContent =
        "Thanks! This is a demo form - your message wasn’t sent. We’ll wire this up when you’re ready.";
      status.classList.add("is-success");
      form.reset();
    });
  }

  /* First-load + scroll reveals */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.body.classList.add("is-booting");

  function finishBoot() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.remove("is-booting");
        document.body.classList.add("is-ready");
      });
    });
  }

  if (document.readyState === "complete") {
    finishBoot();
  } else {
    window.addEventListener("load", finishBoot);
  }

  if (!reduceMotion) {
    var revealEls = document.querySelectorAll(
      "main .section, main .intro, main .services-preview, main .trust-band, main .cta-band, main .page-header, .service-card, .gallery-item, .testimonial, .town-list li, .contact-grid > *"
    );
    revealEls.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.setProperty("--reveal-delay", Math.min(i % 6, 5) * 70 + "ms");
    });

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );
      document.querySelectorAll(".reveal").forEach(function (el) {
        io.observe(el);
      });
    } else {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-in");
      });
    }
  }

})();
