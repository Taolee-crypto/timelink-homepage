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
  const form = document.getElementById("ir-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = (form.querySelector("[name=name]") || {}).value || "";
      const org = (form.querySelector("[name=org]") || {}).value || "";
      const title = (form.querySelector("[name=title]") || {}).value || "";
      const email = (form.querySelector("[name=email]") || {}).value || "";
      const message = (form.querySelector("[name=message]") || {}).value || "";
      const body = [
        "TimeLink 투자 협의 문의",
        "",
        "이름: " + name,
        "소속: " + org,
        "직함: " + title,
        "회신 이메일: " + email,
        "",
        message
      ].join("\n");
      const href =
        "mailto:" +
        IR_EMAIL +
        "?subject=" +
        encodeURIComponent("[TimeLink] 투자 협의 문의 — " + (org || name || "Investor")) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = href;
    });
  }

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
