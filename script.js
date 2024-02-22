/**
 * The function `myMenuFunction` toggles the responsive class on the element with the id "myNavMenu" to
 * create a responsive navigation menu.
 */
function myMenuFunction() {
  var menuBth = document.getElementById("myNavMenu");
  if (menuBth.className === "nav-menu") {
    menuBth.className += " responsive";
  } else {
    menuBth.className = "nav-menu";
  }
}

/*-------- Dark Mode-------- */

/* This code snippet is responsible for toggling a dark mode feature on a webpage. */
const body = document.querySelector("body"),
  toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/*---------------typing effect----------- */

/* The code snippet `var typingEffect = new Typed(".typedText", { strings: ["Frontend Developer
","Software Engineer ","Coder "], loop: true, typeSpeed: 100, backSpeed: 80, backDelay: 2000, });`
is creating a typing effect on an element with the class "typedText". It uses the Typed.js library
to display a series of strings ("Frontend Developer", "Software Engineer", "Coder") in a typing
animation style. */
var typingEffect = new Typed(".typedText", {
  strings: ["Frontend Developer ","Software Engineer ","Coder "],

  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
/*---------------scroll animation--------------- */

/* The code snippet you provided is using the ScrollReveal library to create scroll animations on
specific elements of a webpage. Here's a breakdown of what it's doing: */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 100 });
sr.reveal(".social_icons", { delay: 100 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});
/* The code snippet you provided is using the ScrollReveal library to create scroll animations from the
left side on specific elements of a webpage. */

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* The code snippet `const srRight = ScrollReveal({ origin: "left", distance: "80px", duration: 2000,
reset: true, }); srRight.reveal(".skill", { delay: 100 }); srRight.reveal(".skill-box", { delay: 100
});` is using the ScrollReveal library to create scroll animations from the left side on specific
elements of a webpage. It sets up a new instance of ScrollReveal with the specified configuration
options like origin, distance, duration, and reset. Then, it applies the reveal animation with a
delay of 100ms to elements with the classes "skill" and "skill-box". This will animate these
elements when they come into view during scrolling, revealing them from the left side with the
specified animation duration and distance. */
const srRight = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});
srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/*-----------active link */

/**
 * The function `scrollActive` adds an "active-link" class to navigation menu links based on the
 * current scroll position on the page.
 */
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll",scrollActive);