/**
 * ADARSH NAIR (ZORRO) — PORTFOLIO SCRIPT
 * Plain vanilla JavaScript (No build step, no framework)
 */

/* ==========================================================================
   CONFIGURATIONS (Easily editable)
   ========================================================================== */

// GitHub Username
const GH_USER = "PHANTOMZORRO";

// Repositories featured in the main chain (these will be excluded from "More from GitHub")
const FEATURED_REPOS = [
  "caps-platform",
  "caps-security-platform",
  "EduChain",
  "alfaazvault",
  "digital_will"
];

// Extra projects to append as blocks in the chain.
// Use the owner tool (#add-project) to generate JSON and paste here.
const EXTRA_PROJECTS = [
  /* Example:
  {
    title: "Project Name",
    tagline: "Short tagline",
    description: "Full description...",
    status: "Deployed", // "Deployed", "Testnet", "On GitHub", "Write-up pending"
    network: "Avalanche Fuji",
    language: "Solidity",
    bullets: ["Feature 1", "Feature 2"],
    tags: ["Solidity", "TypeScript"],
    sourceUrl: "https://github.com/PHANTOMZORRO/repo",
    liveUrl: "https://example.com"
  }
  */
];

// Contact Channels Configuration
const CONTACT_CONFIG = [
  {
    platform: "Email",
    handle: "adarshnairprof772006@gmail.com",
    href: "mailto:adarshnairprof772006@gmail.com",
    isEmail: true,
    iconClass: "icon-email",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`
  },
  {
    platform: "Telegram",
    handle: "@phantomzorro776",
    href: "https://t.me/phantomzorro776",
    iconClass: "icon-tg",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.7 8.03c-.12.58-.47.72-.95.45l-2.6-1.92-1.25 1.2c-.14.14-.26.26-.53.26l.19-2.65 4.82-4.36c.21-.19-.05-.29-.32-.11L8.24 13.52l-2.57-.8c-.56-.17-.57-.56.12-.83l10.04-3.87c.47-.17.88.11.77.78z"/></svg>`
  },
  {
    platform: "LinkedIn",
    handle: "Adarsh Nair",
    href: "https://www.linkedin.com/in/adarsh-nair-07734642b/",
    iconClass: "icon-li",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
  },
  {
    platform: "X",
    handle: "@phantomzorro776",
    href: "https://x.com/phantomzorro776",
    iconClass: "icon-x",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
  },
  {
    platform: "Instagram",
    handle: "@07_zorro_07",
    href: "https://instagram.com/07_zorro_07",
    iconClass: "icon-ig",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`
  },
  {
    platform: "GitHub",
    handle: "github.com/PHANTOMZORRO",
    href: "https://github.com/PHANTOMZORRO",
    iconClass: "icon-gh",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
  }
];

/* ==========================================================================
   THEME TOGGLE WITH LOCALSTORAGE CACHE
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  let currentTheme = "dark";
  try {
    const saved = localStorage.getItem("zorro_theme");
    if (saved === "light" || saved === "dark") {
      currentTheme = saved;
    }
  } catch (err) {
    console.warn("localStorage unavailable for theme preference:", err);
  }

  // Force dark side default as requested
  if (!localStorage.getItem("zorro_theme_v2")) {
    currentTheme = "dark";
    try {
      localStorage.setItem("zorro_theme", "dark");
      localStorage.setItem("zorro_theme_v2", "true");
    } catch (e) {}
  }

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    const active = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const newTheme = active === "light" ? "dark" : "light";
    applyTheme(newTheme);
    try {
      localStorage.setItem("zorro_theme", newTheme);
      localStorage.setItem("zorro_theme_v2", "true");
    } catch (err) {
      console.warn("Unable to persist theme to localStorage:", err);
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("theme-toggle");
  const modeText = document.getElementById("theme-mode-text");
  
  if (themeBtn) {
    if (theme === "light") {
      themeBtn.classList.add("is-light");
      themeBtn.setAttribute("aria-label", "Current: Light Mode. Click to switch to Dark Mode");
      if (modeText) modeText.textContent = "Light Mode";
    } else {
      themeBtn.classList.remove("is-light");
      themeBtn.setAttribute("aria-label", "Current: Dark Mode. Click to switch to Light Mode");
      if (modeText) modeText.textContent = "Dark Mode";
    }
  }
}

/* ==========================================================================
   TOAST NOTIFICATION (Accessible & Clean)
   ========================================================================== */
let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

/* ==========================================================================
   RENDER CONTACT SECTION
   ========================================================================== */
function renderContactList() {
  const container = document.getElementById("contact-list");
  if (!container) return;

  container.textContent = ""; // Clear existing

  CONTACT_CONFIG.forEach(item => {
    const row = document.createElement("div");
    row.className = "contact-row";

    // Icon tile
    const tile = document.createElement("div");
    tile.className = `contact-icon-tile ${item.iconClass}`;
    tile.innerHTML = item.svg; // Pre-sanitized local SVG constants
    row.appendChild(tile);

    // Info
    const info = document.createElement("div");
    info.className = "contact-info";

    const platformLabel = document.createElement("span");
    platformLabel.className = "contact-platform";
    platformLabel.textContent = item.platform;
    info.appendChild(platformLabel);

    const handleSpan = document.createElement("span");
    handleSpan.className = "contact-handle";
    handleSpan.textContent = item.handle || "Not added yet";
    info.appendChild(handleSpan);

    row.appendChild(info);

    // Actions
    const actions = document.createElement("div");
    actions.className = "contact-actions";

    if (!item.handle || !item.href) {
      const disabledBtn = document.createElement("button");
      disabledBtn.className = "btn btn-secondary btn-sm";
      disabledBtn.disabled = true;
      disabledBtn.textContent = "Unavailable";
      actions.appendChild(disabledBtn);
    } else if (item.isEmail) {
      // Open button
      const openBtn = document.createElement("a");
      openBtn.className = "btn btn-secondary btn-sm";
      openBtn.href = item.href;
      openBtn.textContent = "Open";
      actions.appendChild(openBtn);

      // Copy button
      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "btn btn-primary btn-sm";
      copyBtn.textContent = "Copy";
      copyBtn.addEventListener("click", () => {
        copyTextToClipboard(item.handle, "Copied email to clipboard!");
      });
      actions.appendChild(copyBtn);
    } else {
      // External link button
      const linkBtn = document.createElement("a");
      linkBtn.className = "btn btn-secondary btn-sm";
      linkBtn.href = item.href;
      linkBtn.target = "_blank";
      linkBtn.rel = "noopener noreferrer";
      linkBtn.textContent = "Visit ↗";
      actions.appendChild(linkBtn);
    }

    row.appendChild(actions);
    container.appendChild(row);
  });
}

function copyTextToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(successMsg))
      .catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (successful) {
      showToast(successMsg);
    } else {
      showToast("Selected text — press Ctrl+C to copy");
    }
  } catch (err) {
    console.error("Copy failed:", err);
    showToast("Unable to copy to clipboard");
  }
}

/* ==========================================================================
   RENDER EXTRA PROJECTS IN THE BLOCKCHAIN CHAIN
   ========================================================================== */
function renderExtraProjects() {
  const container = document.getElementById("extra-blocks-container");
  if (!container) return;

  container.textContent = "";

  if (EXTRA_PROJECTS.length === 0) return;

  EXTRA_PROJECTS.forEach((proj, idx) => {
    // Connector line
    const connector = document.createElement("div");
    connector.className = "block-connector";
    connector.setAttribute("aria-hidden", "true");

    const hashSpan = document.createElement("span");
    hashSpan.className = "block-connector-hash";
    const pseudoHash = "0x" + Math.random().toString(16).substring(2, 6) + "…" + Math.random().toString(16).substring(2, 6);
    hashSpan.textContent = pseudoHash;
    connector.appendChild(hashSpan);

    container.appendChild(connector);

    // Block
    const block = createProjectBlockElement(proj, 4 + idx + 1);
    container.appendChild(block);
  });

  // Update heading count if extra projects are added
  const heading = document.getElementById("projects-heading");
  if (heading) {
    const total = 4 + EXTRA_PROJECTS.length;
    const words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    const word = words[total - 1] || total.toString();
    heading.textContent = `${word} projects, chained`;
  }

  updateProjectCounter();
}

/**
 * Creates a project block DOM element (reusable for extra projects and live preview)
 */
function createProjectBlockElement(proj, blockNum) {
  const article = document.createElement("article");
  article.className = "chain-block" + (proj.featured ? " featured" : "");

  // Metadata Column
  const metaCol = document.createElement("div");
  metaCol.className = "block-meta";

  const heightDiv = document.createElement("div");
  heightDiv.className = "block-height";
  const heightNum = document.createElement("span");
  heightNum.className = "block-height-num";
  const numFormatted = String(blockNum).padStart(3, "0");
  heightNum.textContent = `BLOCK #${numFormatted}`;
  heightDiv.appendChild(heightNum);
  metaCol.appendChild(heightDiv);

  const metaList = document.createElement("div");
  metaList.className = "block-meta-list";

  // Status
  const statusItem = document.createElement("div");
  statusItem.className = "meta-item";
  const statusLabel = document.createElement("span");
  statusLabel.className = "meta-label";
  statusLabel.textContent = "Status";
  const statusVal = document.createElement("span");
  statusVal.className = "meta-value";

  const pill = document.createElement("span");
  const st = (proj.status || "On GitHub").toLowerCase();
  let pillClass = "neutral";
  if (st.includes("deployed")) pillClass = "deployed";
  else if (st.includes("testnet")) pillClass = "testnet";
  else if (st.includes("pending") || st.includes("write-up")) pillClass = "pending";
  pill.className = `status-pill ${pillClass}`;

  const dot = document.createElement("span");
  dot.className = "pill-dot";
  pill.appendChild(dot);
  pill.appendChild(document.createTextNode(proj.status || "On GitHub"));
  statusVal.appendChild(pill);

  statusItem.appendChild(statusLabel);
  statusItem.appendChild(statusVal);
  metaList.appendChild(statusItem);

  // Network
  if (proj.network) {
    const netItem = document.createElement("div");
    netItem.className = "meta-item";
    const netLabel = document.createElement("span");
    netLabel.className = "meta-label";
    netLabel.textContent = "Network";
    const netVal = document.createElement("span");
    netVal.className = "meta-value";
    netVal.textContent = proj.network;
    netItem.appendChild(netLabel);
    netItem.appendChild(netVal);
    metaList.appendChild(netItem);
  }

  // Language / Ecosystem
  if (proj.language) {
    const langItem = document.createElement("div");
    langItem.className = "meta-item";
    const langLabel = document.createElement("span");
    langLabel.className = "meta-label";
    langLabel.textContent = "Primary";
    const langVal = document.createElement("span");
    langVal.className = "meta-value";
    langVal.textContent = proj.language;
    langItem.appendChild(langLabel);
    langItem.appendChild(langVal);
    metaList.appendChild(langItem);
  }

  // Stars / Updated (if available)
  if (proj.stars !== undefined) {
    const starsItem = document.createElement("div");
    starsItem.className = "meta-item";
    const starsLabel = document.createElement("span");
    starsLabel.className = "meta-label";
    starsLabel.textContent = "Stars";
    const starsVal = document.createElement("span");
    starsVal.className = "meta-value";
    starsVal.textContent = `★ ${proj.stars}`;
    starsItem.appendChild(starsLabel);
    starsItem.appendChild(starsVal);
    metaList.appendChild(starsItem);
  }

  metaCol.appendChild(metaList);
  article.appendChild(metaCol);

  // Write-up Column
  const contentCol = document.createElement("div");
  contentCol.className = "block-content";

  const headerDiv = document.createElement("div");
  headerDiv.className = "block-header";

  const titleRow = document.createElement("div");
  titleRow.className = "block-title-row";

  const titleH3 = document.createElement("h3");
  titleH3.className = "block-title";
  titleH3.textContent = proj.title || "Untitled Project";
  titleRow.appendChild(titleH3);

  if (proj.tagline) {
    const taglineSpan = document.createElement("span");
    taglineSpan.className = "block-tagline";
    taglineSpan.textContent = `— "${proj.tagline}"`;
    titleRow.appendChild(taglineSpan);
  }

  headerDiv.appendChild(titleRow);

  if (proj.description) {
    const descP = document.createElement("p");
    descP.className = "block-description";
    descP.textContent = proj.description;
    headerDiv.appendChild(descP);
  }

  contentCol.appendChild(headerDiv);

  // Bullets
  if (Array.isArray(proj.bullets) && proj.bullets.length > 0) {
    const bulletsUl = document.createElement("ul");
    bulletsUl.className = "block-bullets";
    proj.bullets.forEach(bulletText => {
      const li = document.createElement("li");
      li.className = "block-bullet-item";
      li.textContent = bulletText;
      bulletsUl.appendChild(li);
    });
    contentCol.appendChild(bulletsUl);
  }

  // Tags
  if (Array.isArray(proj.tags) && proj.tags.length > 0) {
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "block-tags";
    proj.tags.forEach(tag => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "tag";
      tagSpan.textContent = tag;
      tagsDiv.appendChild(tagSpan);
    });
    contentCol.appendChild(tagsDiv);
  }

  // Links
  const linksDiv = document.createElement("div");
  linksDiv.className = "block-links";

  if (proj.liveUrl && proj.liveUrl.startsWith("https://")) {
    const liveA = document.createElement("a");
    liveA.className = "block-link primary";
    liveA.href = proj.liveUrl;
    liveA.target = "_blank";
    liveA.rel = "noopener noreferrer";
    liveA.textContent = "Live app ↗";
    linksDiv.appendChild(liveA);
  }

  if (proj.sourceUrl && proj.sourceUrl.startsWith("https://")) {
    const srcA = document.createElement("a");
    srcA.className = "block-link";
    srcA.href = proj.sourceUrl;
    srcA.target = "_blank";
    srcA.rel = "noopener noreferrer";
    srcA.textContent = "Source ↗";
    linksDiv.appendChild(srcA);
  }

  if (linksDiv.children.length > 0) {
    contentCol.appendChild(linksDiv);
  }

  article.appendChild(contentCol);
  return article;
}

/* ==========================================================================
   DYNAMIC PROJECT COUNTER
   ========================================================================== */
let totalDetectedProjects = 4 + EXTRA_PROJECTS.length;

function updateProjectCounter(extraGithubReposCount = 0) {
  const countEl = document.getElementById("hero-projects-count");
  if (!countEl) return;

  const total = 4 + EXTRA_PROJECTS.length + extraGithubReposCount;
  totalDetectedProjects = total;
  countEl.textContent = String(total);
}

/* ==========================================================================
   MORE FROM GITHUB (Safe DOM Construction)
   ========================================================================== */
async function fetchMoreFromGithub() {
  const grid = document.getElementById("github-repos-grid");
  const note = document.getElementById("github-note");
  if (!grid || !note) return;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.status === 403 || res.status === 429) {
      note.textContent = "GitHub API rate limit reached. All major projects are listed in the chain above.";
      return;
    }

    if (!res.ok) {
      note.textContent = "Unable to reach GitHub right now. Explore the featured chain above.";
      return;
    }

    const repos = await res.json();
    if (!Array.isArray(repos)) {
      note.textContent = "Every public repository is already shown above.";
      return;
    }

    // Filter out forks and featured repos
    const featuredSet = new Set(
      FEATURED_REPOS.map(r => r.toLowerCase()).concat(EXTRA_PROJECTS.map(p => (p.repoName || "").toLowerCase()))
    );

    const filtered = repos.filter(repo => {
      if (repo.fork) return false;
      const name = repo.name.toLowerCase();
      if (featuredSet.has(name)) return false;
      return true;
    });

    // Update dynamic project count on hero card!
    updateProjectCounter(filtered.length);

    grid.textContent = ""; // Clear loader

    if (filtered.length === 0) {
      note.textContent = "Every public repository is already shown above in the chain.";
      return;
    }

    // Render cards safely using textContent
    filtered.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";

      // Top info
      const topDiv = document.createElement("div");
      topDiv.className = "repo-top";

      const nameLink = document.createElement("a");
      nameLink.className = "repo-name-link";
      // Ensure only https link
      if (typeof repo.html_url === "string" && repo.html_url.startsWith("https://")) {
        nameLink.href = repo.html_url;
      } else {
        nameLink.href = `https://github.com/${GH_USER}/${encodeURIComponent(repo.name)}`;
      }
      nameLink.target = "_blank";
      nameLink.rel = "noopener noreferrer";
      nameLink.textContent = repo.name;

      const arrow = document.createElement("span");
      arrow.textContent = " ↗";
      arrow.style.opacity = "0.7";
      nameLink.appendChild(arrow);

      topDiv.appendChild(nameLink);

      const descP = document.createElement("p");
      descP.className = "repo-desc";
      descP.textContent = repo.description || "No description yet.";
      topDiv.appendChild(descP);

      card.appendChild(topDiv);

      // Meta info
      const metaDiv = document.createElement("div");
      metaDiv.className = "repo-meta";

      const metaLeft = document.createElement("div");
      metaLeft.className = "repo-meta-left";

      if (repo.language) {
        const langSpan = document.createElement("span");
        langSpan.className = "repo-lang";

        const dot = document.createElement("span");
        dot.className = "lang-dot";
        langSpan.appendChild(dot);

        const langText = document.createTextNode(repo.language);
        langSpan.appendChild(langText);
        metaLeft.appendChild(langSpan);
      }

      const starsSpan = document.createElement("span");
      starsSpan.className = "repo-stars";
      starsSpan.textContent = `★ ${repo.stargazers_count || 0}`;
      metaLeft.appendChild(starsSpan);

      metaDiv.appendChild(metaLeft);

      // Updated date
      if (repo.updated_at) {
        const dateObj = new Date(repo.updated_at);
        const mon = dateObj.toLocaleString("en-US", { month: "short" });
        const year = dateObj.getFullYear();
        const dateSpan = document.createElement("span");
        dateSpan.textContent = `Updated ${mon} ${year}`;
        metaDiv.appendChild(dateSpan);
      }

      // Live link if repo has an https homepage
      if (repo.homepage && typeof repo.homepage === "string" && repo.homepage.startsWith("https://")) {
        const liveLink = document.createElement("a");
        liveLink.className = "repo-live-link";
        liveLink.href = repo.homepage;
        liveLink.target = "_blank";
        liveLink.rel = "noopener noreferrer";
        liveLink.textContent = "Live ↗";
        metaDiv.appendChild(liveLink);
      }

      card.appendChild(metaDiv);
      grid.appendChild(card);
    });

    note.textContent = `${filtered.length} additional public repositories synced from GitHub.`;

  } catch (err) {
    if (err.name === "AbortError") {
      note.textContent = "GitHub request timed out. All primary projects are shown in the chain above.";
    } else {
      note.textContent = "GitHub is temporarily unreachable. All main projects are documented above.";
    }
    console.warn("GitHub fetch issue:", err);
  }
}

/* ==========================================================================
   OWNER TOOL: ADD PROJECT FROM GITHUB (#add-project)
   ========================================================================== */
function initOwnerTool() {
  const section = document.getElementById("add-project");
  const fetchBtn = document.getElementById("fetch-project-btn");
  const inputEl = document.getElementById("owner-repo-input");
  const feedbackEl = document.getElementById("owner-feedback");
  const previewWrap = document.getElementById("owner-preview-wrap");
  const previewTarget = document.getElementById("owner-preview-target");
  const jsonCodeEl = document.getElementById("generated-json-code");
  const copyJsonBtn = document.getElementById("copy-json-btn");

  if (!section || !fetchBtn || !inputEl) return;

  // Hash watcher for #add-project
  function checkHash() {
    if (window.location.hash === "#add-project") {
      section.removeAttribute("hidden");
      section.setAttribute("aria-hidden", "false");
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
        inputEl.focus();
      }, 100);
    } else {
      section.setAttribute("hidden", "");
      section.setAttribute("aria-hidden", "true");
    }
  }

  window.addEventListener("hashchange", checkHash);
  checkHash(); // Run on initial load

  // Fetch logic
  fetchBtn.addEventListener("click", () => handleFetchProject());
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleFetchProject();
    }
  });

  async function handleFetchProject() {
    const rawVal = inputEl.value.trim();
    if (!rawVal) {
      showError("Please enter a repository name, owner/repo, or GitHub URL.");
      return;
    }

    const parsed = parseRepoIdentifier(rawVal);
    if (!parsed) {
      showError("Could not recognize repository format. Use owner/repo or bare repo name.");
      return;
    }

    const { owner, repo } = parsed;

    feedbackEl.textContent = "";
    const loadingSpan = document.createElement("span");
    loadingSpan.className = "feedback-loading";
    loadingSpan.textContent = `Fetching GitHub data for ${owner}/${repo}…`;
    feedbackEl.appendChild(loadingSpan);

    if (previewWrap) previewWrap.style.display = "none";

    try {
      // 1. Fetch Repo Info
      const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (repoRes.status === 404) {
        showError(`Repository "${owner}/${repo}" was not found on GitHub.`);
        return;
      }
      if (repoRes.status === 403 || repoRes.status === 429) {
        showError("GitHub API rate limit reached. Please try again in a few minutes.");
        return;
      }
      if (!repoRes.ok) {
        showError(`GitHub error (${repoRes.status}): Could not load repository.`);
        return;
      }
      const repoData = await repoRes.json();

      // 2. Fetch Languages
      let languagesList = [];
      try {
        const langRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/languages`);
        if (langRes.ok) {
          const langData = await langRes.json();
          languagesList = Object.keys(langData).slice(0, 4);
        }
      } catch (e) {
        console.warn("Could not fetch languages:", e);
      }
      if (languagesList.length === 0 && repoData.language) {
        languagesList = [repoData.language];
      }

      // 3. Fetch README (raw text)
      let readmeText = "";
      try {
        const readmeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
          headers: { "Accept": "application/vnd.github.raw" }
        });
        if (readmeRes.ok) {
          readmeText = await readmeRes.text();
        }
      } catch (e) {
        console.warn("Could not fetch README:", e);
      }

      // Parse README according to strict prompt specs
      const parsedData = parseReadmeAndData(readmeText, repoData, languagesList);

      feedbackEl.textContent = ""; // Clear loading

      // Show preview
      if (previewWrap && previewTarget && jsonCodeEl) {
        previewTarget.textContent = "";
        const previewBlock = createProjectBlockElement(parsedData, 5);
        previewTarget.appendChild(previewBlock);

        const jsonString = JSON.stringify(parsedData, null, 2);
        jsonCodeEl.textContent = jsonString;

        previewWrap.style.display = "block";
        previewWrap.scrollIntoView({ behavior: "smooth" });
      }

    } catch (err) {
      console.error(err);
      showError("Cannot reach GitHub. Check your internet connection or try again later.");
    }
  }

  function showError(msg) {
    feedbackEl.textContent = "";
    const errDiv = document.createElement("div");
    errDiv.className = "feedback-error";
    errDiv.textContent = msg;
    feedbackEl.appendChild(errDiv);
  }

  // Copy JSON button
  if (copyJsonBtn && jsonCodeEl) {
    copyJsonBtn.addEventListener("click", () => {
      copyTextToClipboard(jsonCodeEl.textContent, "Copied project JSON to clipboard!");
    });
  }
}

/**
 * Parses input string into { owner, repo }
 */
function parseRepoIdentifier(input) {
  let clean = input.trim();
  // Strip trailing slashes
  clean = clean.replace(/\/+$/, "");

  // Match full GitHub URL
  const urlMatch = clean.match(/^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)/i);
  if (urlMatch) {
    return { owner: urlMatch[1], repo: urlMatch[2].replace(/\.git$/, "") };
  }

  // Match owner/repo
  if (clean.includes("/")) {
    const parts = clean.split("/").filter(Boolean);
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1] };
    }
  }

  // Bare repo name -> default to GH_USER
  if (/^[a-zA-Z0-9_.-]+$/.test(clean)) {
    return { owner: GH_USER, repo: clean };
  }

  return null;
}

/**
 * Parses README text and repository metadata into structured project block
 */
function parseReadmeAndData(readme, repoData, topLanguages) {
  const lines = readme.split(/\r?\n/);

  // 1. First H1 as title
  let title = repoData.name;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      title = trimmed.replace(/^#+\s*/, "").trim();
      break;
    }
  }

  // 2. Tagline: First blockquote or repo description (clip at 140 chars)
  let tagline = repoData.description || "";
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith(">")) {
      tagline = trimmed.replace(/^>\s*/, "").trim();
      break;
    }
  }
  if (tagline.length > 140) {
    tagline = tagline.substring(0, 137).trim() + "…";
  }

  // 3. Description: First real paragraph outside install/setup/usage/license/API sections (clip at 320)
  let description = repoData.description || "";
  const ignoredSectionKeywords = ["install", "setup", "usage", "license", "api", "contribut", "prerequisite", "getting started", "table of contents"];

  let inIgnoredSection = false;
  let candidateParagraph = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("#")) {
      const headingText = line.toLowerCase();
      inIgnoredSection = ignoredSectionKeywords.some(kw => headingText.includes(kw));
      continue;
    }

    if (inIgnoredSection) continue;

    // Skip empty lines, blockquotes, badges, images, bullet items
    if (!line || line.startsWith(">") || line.startsWith("[!") || line.startsWith("![") || line.startsWith("-") || line.startsWith("*") || line.startsWith("```")) {
      continue;
    }

    // Found candidate line
    candidateParagraph = line;
    break;
  }

  if (candidateParagraph) {
    description = candidateParagraph;
  }
  if (description.length > 320) {
    description = description.substring(0, 317).trim() + "…";
  }

  // 4. Bullets: up to 4 bullets (prefer sections named features/overview/what it does; skip link-only bullets, prerequisites, etc.; treat numbered lists as bullets)
  const bullets = [];
  let inFeatureSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("#")) {
      const headingLower = line.toLowerCase();
      if (headingLower.includes("feature") || headingLower.includes("overview") || headingLower.includes("what it does") || headingLower.includes("highlight")) {
        inFeatureSection = true;
      } else {
        inFeatureSection = false;
      }
      continue;
    }

    const isBullet = line.match(/^(\*|-|\d+\.)\s+(.+)$/);
    if (isBullet) {
      let content = isBullet[2].trim();
      // Skip link-only bullets, prerequisites, license, etc.
      if (content.startsWith("http") || content.startsWith("[http") || content.toLowerCase().includes("license")) {
        continue;
      }
      // Remove markdown bold/italics
      content = content.replace(/\*\*(.*?)\*\*/g, "$1").replace(/__(.*?)__/g, "$1");
      if (inFeatureSection && bullets.length < 4) {
        bullets.push(content);
      } else if (!inFeatureSection && bullets.length < 4 && bullets.length === 0) {
        // Collect candidate bullets if no feature section found yet
        bullets.push(content);
      }
    }
  }

  // 5. Blockchain network detection from README text in exact order specified:
  // Avalanche Fuji, Sepolia, Ethereum, Polygon, Arbitrum, Optimism, Base, Solana, Avalanche
  const networksToDetect = [
    "Avalanche Fuji",
    "Sepolia",
    "Ethereum",
    "Polygon",
    "Arbitrum",
    "Optimism",
    "Base",
    "Solana",
    "Avalanche"
  ];

  let detectedNetwork = "";
  for (const net of networksToDetect) {
    const regex = new RegExp(`\\b${net}\\b`, "i");
    if (regex.test(readme)) {
      detectedNetwork = net;
      break;
    }
  }

  // 6. Tags: top 4 languages + up to 5 topics
  const topics = Array.isArray(repoData.topics) ? repoData.topics.slice(0, 5) : [];
  const combinedTags = Array.from(new Set([...topLanguages, ...topics]));

  // Live app check
  const liveUrl = (repoData.homepage && repoData.homepage.startsWith("https://")) ? repoData.homepage : "";

  return {
    repoName: repoData.name,
    title: title,
    tagline: tagline,
    description: description,
    status: "On GitHub",
    network: detectedNetwork || "Off-chain",
    language: repoData.language || (topLanguages[0] || ""),
    stars: repoData.stargazers_count || 0,
    bullets: bullets.slice(0, 4),
    tags: combinedTags,
    sourceUrl: repoData.html_url || `https://github.com/${repoData.full_name}`,
    liveUrl: liveUrl
  };
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderContactList();
  renderExtraProjects();
  initOwnerTool();
  fetchMoreFromGithub();
});
