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
})();
