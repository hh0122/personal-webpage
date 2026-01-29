const form = document.querySelector(".contact-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  if (!button) return;
  button.textContent = "Message Sent";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = "Send Message";
    button.disabled = false;
    form.reset();
  }, 2500);
});
