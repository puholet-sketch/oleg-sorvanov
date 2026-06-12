(function () {
  const STORAGE_KEY = "portfolio-lang";
  const html = document.documentElement;
  const body = document.body;

  /* ── Language switcher ── */
  function setLang(lang) {
    const isEn = lang === "en";
    html.classList.toggle("lang-en", isEn);
    html.lang = isEn ? "en" : "ru";
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
  }

  const saved = (() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return null;
    }
  })();

  setLang(saved === "en" ? "en" : "ru");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  /* ── Mobile nav toggle ── */
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const moreBtn = document.querySelector(".nav-more-btn");
  const morePanel = document.getElementById("nav-more-panel");

  function closeMobileNav() {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    body.classList.remove("nav-open");
    closeMorePanel();
  }

  function closeMorePanel() {
    if (!moreBtn || !morePanel) return;
    moreBtn.setAttribute("aria-expanded", "false");
    morePanel.classList.remove("is-open");
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", open ? "false" : "true");
      siteNav.classList.toggle("is-open", !open);
      body.classList.toggle("nav-open", !open);
      if (open) closeMorePanel();
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 767px)").matches) {
          closeMobileNav();
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileNav();
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        closeMobileNav();
      }
    });
  }

  /* ── More dropdown ── */
  if (moreBtn && morePanel) {
    moreBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = moreBtn.getAttribute("aria-expanded") === "true";
      moreBtn.setAttribute("aria-expanded", open ? "false" : "true");
      morePanel.classList.toggle("is-open", !open);
    });

    document.addEventListener("click", (e) => {
      if (!moreBtn.contains(e.target) && !morePanel.contains(e.target)) {
        closeMorePanel();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMorePanel();
    });
  }
})();
