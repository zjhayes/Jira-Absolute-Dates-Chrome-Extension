(() => {
  let debounceTimer = null;

  function replaceRelativeDates() {
    if (debounceTimer) {
      cancelAnimationFrame(debounceTimer);
    }

    debounceTimer = requestAnimationFrame(() => {
      const timeElements = document.querySelectorAll('time.livestamp');

      timeElements.forEach(timeEl => {
        const parentSpan = timeEl.closest('span[title]');
        if (parentSpan) {
          const title = parentSpan.getAttribute('title');
          if (title && timeEl.textContent !== title) {
            timeEl.textContent = title;
          }
        }
      });
    });
  }

  function init() {
    const observer = new MutationObserver(replaceRelativeDates);
    observer.observe(document.body, { childList: true, subtree: true });

    replaceRelativeDates();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();