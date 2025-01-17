(() => {
  function replaceRelativeDates() {
    const timeElements = document.querySelectorAll('time.livestamp');
    timeElements.forEach(timeEl => {
      const dateTimeAttr = timeEl.getAttribute('datetime');
      if (dateTimeAttr) {
        const dateObj = new Date(dateTimeAttr);
        timeEl.textContent = dateObj.toLocaleString(); // or any custom format
      }
    });
  }

  // Since Jira is often a single-page app, consider re-running your logic
  // whenever the DOM changes:
  const observer = new MutationObserver(replaceRelativeDates);
  observer.observe(document.body, { childList: true, subtree: true });

  // Run once on initial load:
  replaceRelativeDates();
})();