(function () {
  const STORAGE_KEY = "portfolio-lang";
  const html = document.documentElement;

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
})();
