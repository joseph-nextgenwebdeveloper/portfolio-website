 

const PROJECTS = {

  freshfarm: {
    title: "FreshFarm App",
    tags: ["Flutter", "Python", "Django", "REST API"],
    status: "live",                     
    statusLabel: "Live",
    statusNote: "",
    images: [
      "assets/images/Agriflow-home.jpeg",
      "assets/images/Agriflow-login.jpeg",
      "assets/images/Agriflow-orders.jpeg",
      "assets/images/Agriflow-products.jpeg"
    ],
    overview: "A cross-platform mobile application connecting local farmers directly with buyers, cutting out unnecessary middlemen. Built with Flutter on the frontend and a Python/Django REST API on the backend, it handles product listings, order management, and role-based accounts for both farmers and consumers.",
    features: [
      "Farmer and consumer dashboards with role-based navigation",
      "Real-time product listings with photo support",
      "Order tracking and management",
      "M-Pesa STK Push payment integration",
      "Ratings and reviews tied to delivered orders"
    ],
    techStack: ["Flutter", "Dart", "Python", "Django REST Framework", "PostgreSQL", "M-Pesa API"],
    links: [
      { label: "Mobile Repo ↗", url: "https://github.com/joseph001technology/Farmers-App-Mobile", type: "ghost" },
      { label: "Backend Repo ↗", url: "https://github.com/joseph001technology/Farmers-App-Backend", type: "ghost" }
    ]
  },

  blog: {
    title: "Blog Web Application",
    tags: ["Python", "Django", "HTML/CSS"],
    status: "live",
    statusLabel: "Live",
    statusNote: "",
    images: [
      "assets/images/blog-home.png",
      "assets/images/blog-posts.png"
    ],
    overview: "A full-featured blogging platform with article publishing, commenting, and category management. The interface was designed with clean, semantic HTML, CSS, and JavaScript, and the app is deployed and running on PythonAnywhere.",
    features: [
      "Article creation, editing, and publishing workflow",
      "Commenting system on posts",
      "Category-based organization and filtering",
      "Responsive, user-friendly layout"
    ],
    techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "PythonAnywhere"],
    links: [
      { label: "GitHub ↗", url: "https://github.com/joseph-nextgenwebdeveloper/personal-blog", type: "ghost" },
      { label: "Live Demo ↗", url: "https://josephkiarie.pythonanywhere.com/blog/", type: "primary" }
    ]
  },

  church: {
    title: "Church Website",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "notdeployed",
    statusLabel: "Not Deployed",
    statusNote: "Fully built and functional locally, but not yet hosted anywhere public. Replace this note once you know where/when it'll go live, or with the reason it's on hold.",
    images: [
      "./assets/images/church-home.png",
      "./assets/images/church-services.png",
      "./assets/images/church-ministries.png"
    ],
    overview: "A responsive church website featuring event listings, ministry pages, media content, and a contact system designed to improve communication with church members. Built with clean, semantic HTML and CSS.",
    features: [
      "Events listing page",
      "Ministries overview section",
      "Media/content gallery",
      "Contact form for member communication"
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "GitHub ↗", url: "https://github.com/joseph001technology/church-website", type: "ghost" }
    ]
  },

  sabina: {
    title: "Sabina Designs",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    status: "live",
    statusLabel: "Live",
    statusNote: "",
    images: [
      "assets/images/elegance-home.png",
      "assets/images/elegance-products.png"
       
    ],
    overview: "A marketing and portfolio website built for my mother, Sabina — a tailor and fashion designer based in Thika, Kenya, working under the name Sabina Designs (\"Tailored Elegance, Crafted for You\"). With years of experience and a deep passion for textiles, she creates pieces that balance modern sophistication with timeless elegance, from bespoke evening gowns to perfectly tailored suits. I built this site to give her a professional online presence — a place to showcase her portfolio, tell her story as a designer, and make it easy for clients to reach her directly for custom orders.",
    features: [
      "Portfolio gallery organized by category — dresses, suits, casual wear, traditional wear, custom designs, and textile/embroidery detail shots",
      "\"The Designer\" section telling Sabina's story and craftsmanship background",
      "Mood board section covering design inspiration, materials, color palette, and technique",
      "Services overview: custom tailoring, alterations, fashion consultations, and bridal/occasion wear",
      "Direct custom-order flow via WhatsApp and email with pre-filled message templates",
      "Client testimonials section",
      "Contact section with phone, location, and appointment info"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    links: [
      { label: "Live Site ↗", url: "https://sabinakiarie.netlify.app/", type: "primary" },
      { label: "GitHub ↗", url: "https://github.com/joseph001technology/elegance-archive", type: "ghost" }
    ]
  }

};

(function () {
  const overlay = document.getElementById("project-modal-overlay");
  const closeBtn = document.getElementById("pm-close");
  const mainImg = document.getElementById("pm-main-img");
  const thumbsWrap = document.getElementById("pm-thumbs");
  const tagsWrap = document.getElementById("pm-tags");
  const statusWrap = document.getElementById("pm-status");
  const statusNoteEl = document.getElementById("pm-status-note");
  const titleEl = document.getElementById("pm-title");
  const overviewEl = document.getElementById("pm-overview");
  const featuresEl = document.getElementById("pm-features");
  const stackEl = document.getElementById("pm-stack");
  const actionsEl = document.getElementById("pm-actions");
  const lightbox = document.getElementById("pm-lightbox");
  const lightboxImg = document.getElementById("pm-lightbox-img");
  const lightboxClose = document.getElementById("pm-lightbox-close");

  function openLightbox(src, alt) {
    if (!lightbox || !src) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  if (lightbox) {
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
    });
  }
  if (mainImg) {
    mainImg.addEventListener("click", () => openLightbox(mainImg.src, mainImg.alt));
  }

  // --- Sync each grid card's status badge with PROJECTS data ---
  // This runs on load so you never have to hand-edit the badge in
  // index.html again — just change `status`/`statusLabel` above.
  document.querySelectorAll(".project-card[data-project]").forEach(card => {
    const key = card.dataset.project;
    const data = PROJECTS[key];
    if (!data) return;

    const badge = card.querySelector(".project-status");
    if (badge) {
      badge.className = "project-status status-" + data.status;
      badge.innerHTML = `<span class="status-pulse"></span>${data.statusLabel}`;
    }
  });

  if (!overlay) return; // modal markup not present, bail safely

  function openModal(key) {
    const data = PROJECTS[key];
    if (!data) return;

    titleEl.textContent = data.title;
    overviewEl.textContent = data.overview;

    tagsWrap.innerHTML = data.tags
      .map(t => `<span class="project-tag">${t}</span>`)
      .join("");

    statusWrap.className = "project-status status-" + data.status;
    statusWrap.innerHTML = `<span class="status-pulse"></span><span id="pm-status-label">${data.statusLabel}</span>`;

    statusNoteEl.textContent = data.statusNote || "";

    featuresEl.innerHTML = data.features
      .map(f => `<li>${f}</li>`)
      .join("");

    stackEl.innerHTML = data.techStack
      .map(t => `<span class="project-tag">${t}</span>`)
      .join("");

    actionsEl.innerHTML = data.links
      .map(l => `<a href="${l.url}" target="_blank" class="project-btn${l.type === "ghost" ? " ghost" : ""}">${l.label}</a>`)
      .join("");

    // gallery
    mainImg.src = data.images[0] || "";
    mainImg.alt = data.title;
    mainImg.style.opacity = "1";
    thumbsWrap.innerHTML = "";
    if (data.images.length > 1) {
      data.images.forEach((src, i) => {
        const t = document.createElement("img");
        t.src = src;
        t.alt = data.title + " screenshot " + (i + 1);
        if (i === 0) t.classList.add("active");
        t.addEventListener("click", () => {
          mainImg.src = src;
          mainImg.style.opacity = "1";
          thumbsWrap.querySelectorAll("img").forEach(im => im.classList.remove("active"));
          t.classList.add("active");
        });
        thumbsWrap.appendChild(t);
      });
    }

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.project));
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });
})();