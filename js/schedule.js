/**
 * Shows/hides table rows based on optional data-from / data-until (YYYY-MM-DD, local calendar day).
 * Rows without these attributes are always shown. Not for hiding sensitive URLs (HTML remains in source).
 */
(function () {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  document.querySelectorAll(".links-table tbody tr[data-from], .links-table tbody tr[data-until]").forEach(function (tr) {
    const from = tr.getAttribute("data-from");
    const until = tr.getAttribute("data-until");
    if (from) {
      const start = new Date(from + "T00:00:00");
      if (today < start) {
        tr.hidden = true;
        return;
      }
    }
    if (until) {
      const end = new Date(until + "T23:59:59.999");
      if (today > end) {
        tr.hidden = true;
      }
    }
  });
})();
