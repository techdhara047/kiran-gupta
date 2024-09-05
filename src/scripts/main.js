document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks[0].style.color = "brown";
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      // navLinks.classList.remove("active");
      navLinks.forEach((link) => (link.style.color = "inherit"));
      e.target.style.color = "brown";
    });
  });

  // header on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // menu button -> drawer
  const menuIcon = document.querySelector("[data-menu]");
  const aboutElm = document.querySelector("[data-about]");
  const cancelElm = document.querySelector("[data-cancel]");

  if (menuIcon && aboutElm) {
    menuIcon.addEventListener("click", () => {
      const isOpen = aboutElm.style.transform === "translateX(0%)";
      aboutElm.style.transform = isOpen
        ? "translateX(-100%)"
        : "translateX(0%)";
    });
  } else {
    console.error("Menu icon or about element not found.");
  }

  cancelElm.addEventListener("click", () => {
    aboutElm.style.transform = "translateX(100%)";
  });
});
