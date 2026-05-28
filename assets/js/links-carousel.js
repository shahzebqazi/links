(function () {
  var section = document.querySelector("[data-postcard-carousel]");
  if (!section) return;

  var track = section.querySelector(".postcard-carousel__track");
  var tiles = Array.prototype.slice.call(track.querySelectorAll(".postcard-tile"));
  var prevBtn = section.querySelector("[data-carousel-prev]");
  var nextBtn = section.querySelector("[data-carousel-next]");
  var dotsRoot = section.querySelector(".postcard-carousel__dots");
  var index = 0;
  var autoTimer;
  var touchStartX;
  var AUTO_MS = 6000;

  tiles.forEach(function (_, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "postcard-carousel__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Postcard " + (i + 1) + " of " + tiles.length);
    dot.addEventListener("click", function () {
      goTo(i);
    });
    dotsRoot.appendChild(dot);
  });

  var dots = Array.prototype.slice.call(dotsRoot.querySelectorAll(".postcard-carousel__dot"));

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function applyStack() {
    tiles.forEach(function (tile, i) {
      var depth = (i - index + tiles.length) % tiles.length;
      tile.setAttribute("data-stack-depth", String(depth));
    });
  }

  function goTo(i) {
    index = (i + tiles.length) % tiles.length;
    applyStack();
    updateUi();
    restartAuto();
  }

  function updateUi() {
    dots.forEach(function (dot, i) {
      var on = i === index;
      dot.setAttribute("aria-selected", on ? "true" : "false");
      dot.tabIndex = on ? 0 : -1;
    });
    section.setAttribute(
      "aria-label",
      "Postcard stack — card " + (index + 1) + " of " + tiles.length
    );
  }

  function stopAuto() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  function restartAuto() {
    stopAuto();
    if (reducedMotion()) return;
    autoTimer = setInterval(function () {
      goTo(index + 1);
    }, AUTO_MS);
  }

  prevBtn.addEventListener("click", function () {
    goTo(index - 1);
  });

  nextBtn.addEventListener("click", function () {
    goTo(index + 1);
  });

  track.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", function (e) {
    if (touchStartX == null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    }
  });

  section.addEventListener("mouseenter", stopAuto);
  section.addEventListener("mouseleave", restartAuto);
  section.addEventListener("focusin", stopAuto);
  section.addEventListener("focusout", function (e) {
    if (!section.contains(e.relatedTarget)) restartAuto();
  });

  applyStack();
  updateUi();
  restartAuto();
})();
