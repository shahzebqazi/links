(function () {
  var section = document.querySelector("[data-postcard-carousel]");
  if (!section) return;

  var track = section.querySelector(".postcard-carousel__track");
  var tiles = Array.prototype.slice.call(track.querySelectorAll(".postcard-tile"));
  var prevBtn = section.querySelector("[data-carousel-prev]");
  var nextBtn = section.querySelector("[data-carousel-next]");
  var dotsRoot = section.querySelector(".postcard-carousel__dots");
  var mq = window.matchMedia("(max-width: 767px)");
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

  function isCarousel() {
    return mq.matches;
  }

  function applySlide() {
    if (!isCarousel()) {
      track.style.transform = "";
      return;
    }
    track.style.transform = "translateX(-" + index * 100 + "%)";
  }

  function goTo(i) {
    if (!isCarousel()) return;
    index = (i + tiles.length) % tiles.length;
    applySlide();
    updateUi();
    restartAuto();
  }

  function updateUi() {
    dots.forEach(function (dot, i) {
      var on = i === index;
      dot.setAttribute("aria-selected", on ? "true" : "false");
      dot.tabIndex = on ? 0 : -1;
    });
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    section.setAttribute(
      "aria-label",
      "Featured postcards — slide " + (index + 1) + " of " + tiles.length
    );
  }

  function stopAuto() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  function restartAuto() {
    stopAuto();
    if (!isCarousel() || reducedMotion()) return;
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
    if (!isCarousel()) return;
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", function (e) {
    if (!isCarousel() || touchStartX == null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(index + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  track.addEventListener("keydown", function (e) {
    if (!isCarousel()) return;
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

  mq.addEventListener("change", function () {
    if (!isCarousel()) {
      index = 0;
      stopAuto();
    }
    applySlide();
    updateUi();
    restartAuto();
  });

  applySlide();
  updateUi();
  restartAuto();
})();
