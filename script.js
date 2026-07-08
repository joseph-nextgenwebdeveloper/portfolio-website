/* =============================================
   SCRIPT.JS — JOSEPH NGIGI KIARIE PORTFOLIO
   ============================================= */
 
// --- HAMBURGER MENU ---
function toggleMenu() {
  const menu = document.getElementById("menu-links");
  const icon = document.getElementById("hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
 
// --- CUSTOM CURSOR ---
const cursor = document.getElementById("cursor");
const follower = document.getElementById("cursor-follower");
 
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;
 
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});
 
function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + "px";
  follower.style.top = followerY + "px";
  requestAnimationFrame(animateFollower);
}
animateFollower();
 
// --- NAV SCROLL STYLE ---
const desktopNav = document.getElementById("desktop-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    desktopNav && desktopNav.classList.add("scrolled");
  } else {
    desktopNav && desktopNav.classList.remove("scrolled");
  }
});
 
// --- SCROLL REVEAL ---
const revealEls = document.querySelectorAll(".reveal");
 
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
 
        // Animate skill bars when skill card becomes visible
        if (entry.target.classList.contains("skill-card")) {
          const bars = entry.target.querySelectorAll(".skill-bar span");
          bars.forEach((bar) => {
            const targetWidth = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 100);
          });
        }
      }
    });
  },
  { threshold: 0.12 }
);
 
revealEls.forEach((el) => observer.observe(el));
 
// --- STAGGER HERO REVEALS ---
document.addEventListener("DOMContentLoaded", () => {
  const heroEls = document.querySelectorAll("#profile .reveal");
  heroEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 200 + i * 160);
  });
});
 
// --- ACTIVE NAV LINK on scroll ---
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
 
function setActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "var(--accent)";
    }
  });
}
window.addEventListener("scroll", setActiveNav);
 
// --- PARALLAX HERO GRID ---
const heroGrid = document.querySelector(".hero-bg-grid");
window.addEventListener("scroll", () => {
  if (heroGrid) {
    heroGrid.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }
});
 
// --- TILT EFFECT ON PROJECT CARDS ---
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 5;
    const rotateY = (x / rect.width) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.transition = "transform 0.5s ease, border-color var(--transition), box-shadow var(--transition)";
    setTimeout(() => { card.style.transition = ""; }, 500);
  });
});
 
// --- CONTACT CARD HOVER ---
document.querySelectorAll(".contact-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.borderColor = "rgba(0,229,160,0.4)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.borderColor = "";
  });
});
 
// --- TYPED TEXT EFFECT FOR HERO SUBTITLE (optional enhancement) ---
const heroSub = document.querySelector(".hero-sub");
if (heroSub) {
  const text = heroSub.textContent;
  heroSub.textContent = "";
  heroSub.style.opacity = "1";
  let i = 0;
  setTimeout(() => {
    const type = () => {
      if (i < text.length) {
        heroSub.textContent += text[i];
        i++;
        setTimeout(type, 18);
      }
    };
    type();
  }, 900);
}
 
// --- FOOTER YEAR ---
const yearEl = document.querySelector(".footer-copy");
if (yearEl) {
  yearEl.textContent = yearEl.textContent.replace("2025", new Date().getFullYear());
}
 