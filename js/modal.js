document.addEventListener("DOMContentLoaded", function () {
  let modal_overlay = document.querySelector(".modal_overlay");
  let open_modal = document.querySelector(".open_modal");
  let close_modal = document.querySelector(".close_modal");
  let show_alert = document.querySelectorAll(".show_alert");
  let alert_container = document.querySelector(".alert_container");

  open_modal.addEventListener("click", function () {
    modal_overlay.style.display = "flex";
  });

  close_modal.addEventListener("click", function () {
    modal_overlay.style.display = "none";
  });

  show_alert.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let alert_type = btn.dataset.type;
      let alert = document.createElement("div");
      alert.className = `alert alert_${alert_type}`;

      alert.textContent = {
        error: "Wow, no way, it's error!",
        success: "Success",
        warning: "Warning",
        info: "Info",
      }[alert_type];

      alert_container.appendChild(alert);
      setInterval(function () {
        alert.remove();
      }, 5000);
    });
  });
});
