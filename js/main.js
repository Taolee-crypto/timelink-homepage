(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }
  const path = location.pathname.replace(/\/$/, "") || "/";
  const file = path.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (a) {
    const href = a.getAttribute("href") || "";
    if (href === file || (file === "" && href === "index.html") || (file === "index.html" && href === "./")) {
      a.classList.add("active");
    }
  });

  const IR_EMAIL = "mununglee@gmail.com";

  // FormSubmit handles form submission; do not intercept with mailto

  document.querySelectorAll("[data-copy-email]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const text = btn.getAttribute("data-copy-email") || IR_EMAIL;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          const prev = btn.textContent;
          btn.textContent = "복사됨";
          setTimeout(function () {
            btn.textContent = prev;
          }, 1600);
        });
      }
    });
  });
})();
