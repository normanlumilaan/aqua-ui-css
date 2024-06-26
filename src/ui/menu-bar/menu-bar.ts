function menubarClock(clockElem: Element | null): void {
  if (clockElem === null) return;

  function update(): void {
    const time = new Date().toLocaleString("en-US", {
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    if (clockElem) {
      clockElem.textContent = time;
    }
  }

  setInterval(update, 1000); // Update every minute
}

menubarClock(document.querySelector("#menubar-clock"));
