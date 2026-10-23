// Ganapati Atharvashirsha learning page: verse cards, modak progress, mind map.
(function () {
  const verses = window.GA_VERSES;
  const branches = window.GA_BRANCHES;
  const STORE = "balabharati-ga-learned";

  function loadLearned() {
    try { return JSON.parse(localStorage.getItem(STORE)) || []; } catch (e) { return []; }
  }
  function saveLearned(list) {
    try { localStorage.setItem(STORE, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  let learned = loadLearned();
  const listEl = document.getElementById("verse-list");
  const countEl = document.getElementById("modak-count");
  document.getElementById("modak-total").textContent = verses.length;

  function updateCount() {
    countEl.textContent = learned.length;
  }

  // ---- Learn cards ----
  function renderVerses() {
    listEl.innerHTML = "";
    verses.forEach(function (v, i) {
      const done = learned.indexOf(v.id) !== -1;
      const card = document.createElement("article");
      card.className = "ga-card" + (done ? " done" : "");
      card.id = v.id;

      const chips = v.words.map(function (w) {
        return '<button class="ga-chip" type="button" title="' + w[2] + '">' +
          '<span class="ga-chip-icon">' + w[0] + '</span>' +
          '<span class="ga-chip-word">' + w[1] + '</span>' +
          '<span class="ga-chip-mean">' + w[2] + '</span></button>';
      }).join("");

      card.innerHTML =
        '<header class="ga-card-head"><span class="ga-num">' + (i + 1) + '</span>' +
        '<span class="ga-icon">' + v.icon + '</span><h2>' + v.title + '</h2></header>' +
        '<div class="ga-lines">' + v.lines.map(function (l) { return "<p>" + l + "</p>"; }).join("") + '</div>' +
        '<div class="ga-chips">' + chips + '</div>' +
        '<details class="ga-meaning"><summary>💡 What does it mean?</summary><p>' + v.meaning + '</p></details>' +
        '<button class="control-button ' + (done ? "secondary" : "primary") + ' ga-learn" type="button">' +
        (done ? "🍬 Learned!" : "I learned it! 🍬") + '</button>';

      card.querySelector(".ga-learn").addEventListener("click", function () {
        if (learned.indexOf(v.id) === -1) {
          learned.push(v.id);
        } else {
          learned = learned.filter(function (x) { return x !== v.id; });
        }
        saveLearned(learned);
        renderVerses();
        updateCount();
      });

      // Tap a chip to flip between word and meaning
      card.querySelectorAll(".ga-chip").forEach(function (chip) {
        chip.addEventListener("click", function () { chip.classList.toggle("flipped"); });
      });

      listEl.appendChild(card);
    });
  }

  // ---- Mind map (SVG, radial) ----
  function renderMap() {
    const W = 640, H = 640, cx = W / 2, cy = H / 2, R = 220;
    let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Mind map of Ganapati Atharvashirsha">';
    const nodes = branches.map(function (b, i) {
      const a = (i / branches.length) * Math.PI * 2 - Math.PI / 2;
      return { b: b, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
    });
    nodes.forEach(function (n) {
      svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + n.x + '" y2="' + n.y + '" class="ga-map-line"/>';
    });
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="78" class="ga-map-centre"/>' +
      '<text x="' + cx + '" y="' + (cy - 8) + '" class="ga-map-emoji">🐘</text>' +
      '<text x="' + cx + '" y="' + (cy + 40) + '" class="ga-map-title">Ganapati</text>';
    nodes.forEach(function (n) {
      const count = verses.filter(function (v) { return v.branch === n.b.id; }).length;
      svg += '<g class="ga-map-node" tabindex="0" data-branch="' + n.b.id + '">' +
        '<circle cx="' + n.x + '" cy="' + n.y + '" r="62"/>' +
        '<text x="' + n.x + '" y="' + (n.y - 6) + '" class="ga-map-emoji small">' + n.b.icon + '</text>' +
        '<text x="' + n.x + '" y="' + (n.y + 28) + '" class="ga-map-label">' + n.b.label + '</text>' +
        '<text x="' + n.x + '" y="' + (n.y + 46) + '" class="ga-map-sub">' + count + ' part' + (count > 1 ? "s" : "") + '</text></g>';
    });
    svg += "</svg>";
    const mapEl = document.getElementById("mind-map");
    mapEl.innerHTML = svg;

    mapEl.querySelectorAll(".ga-map-node").forEach(function (g) {
      function go() {
        const first = verses.find(function (v) { return v.branch === g.dataset.branch; });
        showTab("learn");
        const el = document.getElementById(first.id);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("pulse");
        setTimeout(function () { el.classList.remove("pulse"); }, 1600);
      }
      g.addEventListener("click", go);
      g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") go(); });
    });
  }

  // ---- Tabs ----
  function showTab(name) {
    document.querySelectorAll("button.ga-tab").forEach(function (t) {
      t.classList.toggle("active", t.dataset.tab === name);
    });
    document.getElementById("tab-learn").hidden = name !== "learn";
    document.getElementById("tab-map").hidden = name !== "map";
  }
  document.querySelectorAll("button.ga-tab").forEach(function (t) {
    t.addEventListener("click", function () { showTab(t.dataset.tab); });
  });

  document.getElementById("reset-button").addEventListener("click", function () {
    learned = [];
    saveLearned(learned);
    renderVerses();
    updateCount();
  });

  renderVerses();
  renderMap();
  updateCount();
})();
