// Progressive enhancement: remove no-js as early as possible.
document.documentElement.classList.remove("no-js");

document.addEventListener("DOMContentLoaded", function () {
  var triggers = document.querySelectorAll(".faq-trigger");

  triggers.forEach(function (trigger) {
    var panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;

    // Start collapsed now that JS is running.
    trigger.setAttribute("aria-expanded", "false");
    panel.classList.remove("open");

    trigger.addEventListener("click", function () {
      var expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      panel.classList.toggle("open", !expanded);
    });
  });
});
