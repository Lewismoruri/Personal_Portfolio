var typed = new Typed(".text", {
  strings: [
    "Data Analyst",
    "Business Intelligence Analyst",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
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
  // Resume Popup
const resumeBtn   = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const resumeClose = document.querySelector(".resume-close");

resumeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resumeModal.style.display    = "block";
  document.body.style.overflow = "hidden";  // disable background scroll
});

resumeClose.addEventListener("click", () => {
  resumeModal.style.display    = "none";
  document.body.style.overflow = "auto";  // re-enable background scroll
});

window.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display    = "none";
    document.body.style.overflow = "auto";  // re-enable background scroll
  }
});

const resumeDownload = document.getElementById("resumeDownload");

if (resumeDownload) {
  resumeDownload.addEventListener("click", () => {
    const pdfUrl = "assets/LewisMoruriCV.pdf";

    const newTab = window.open("", "_blank");

    newTab.document.write(`
      <html>
      <body>
      <a id       = "downloadLink"
         href     = "${pdfUrl}"
         download = "Lewis_Moruri_Resume.pdf">
      </a>

      <script>
        document.getElementById('downloadLink').click();

        setTimeout(() => {
          window.close();
        }, 1500);
      <\/script>

      </body>
      </html>
    `);
  });
}
