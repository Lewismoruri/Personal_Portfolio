var typed = new Typed(".text", {
  strings: [
    "Data Analyst",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

if (menuToggle && primaryNavigation) {
  const closeMenu = () => {
    primaryNavigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.innerHTML = "<i class='bx bx-menu' aria-hidden='true'></i>";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNavigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuToggle.innerHTML = isOpen
      ? "<i class='bx bx-x' aria-hidden='true'></i>"
      : "<i class='bx bx-menu' aria-hidden='true'></i>";
  });

  primaryNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && primaryNavigation.classList.contains("is-open")) {
      closeMenu();
      menuToggle.focus();
    }
  });
}

  // Skills Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
      // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    skillCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
  // main.js

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank");
    }
  });
});
// Contact Form

const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await response.json();

      if (data.success) {
        formMessage.textContent =
          "✓ Message sent successfully! I'll get back to you soon.";

        formMessage.className = "success-message";

        contactForm.reset();

        submitBtn.textContent = "Message Sent ✓";

        setTimeout(() => {
          submitBtn.textContent = "Submit Message";
          submitBtn.disabled = false;
          formMessage.textContent = "";
        }, 4000);

      } else {
        formMessage.textContent =
          "Something went wrong. Please try again.";

        formMessage.className = "error-message";

        submitBtn.textContent = "Submit Message";
        submitBtn.disabled = false;
      }

    } catch (error) {
      formMessage.textContent =
        "Something went wrong. Please check your connection and try again.";

      formMessage.className = "error-message";

      submitBtn.textContent = "Submit Message";
      submitBtn.disabled = false;
    }
  });
}
