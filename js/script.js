// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let downbtn = document.querySelector(".white");
let about = document.querySelector(".about");
let projects = document.querySelector(".projects");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    downbtn.style.color = "white";
    about.style = "background-color:#0f0c27";
    projects.style = "background-color:#0f0c27";
    downbtn.style.border = "1px solid white";
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    downbtn.style.color = "black";
    about.style = "background-color:#fff";
    projects.style = "background-color:#fff";
  }
};

// Get all the section elements
const sections = document.querySelectorAll("section");

// Listen for scroll events on the window
window.addEventListener("scroll", () => {
  let current = "";

  // Loop through each section to check its position relative to the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Add the active class to the current section's link in the navigation
  const links = document.querySelectorAll("ul li a");
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

function connect() {
  alert("Kindly Contact me from the social links given below....");
}
