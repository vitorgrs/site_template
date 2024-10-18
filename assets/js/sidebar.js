document.addEventListener("DOMContentLoaded", function() {
  const sidebarToggle = document.getElementById("sidebarCollapse");
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("main-manager");
  const sidebarTitle = document.querySelector(".title-user");
  const sidebarEmail = document.querySelector(".sidebar-email");
  const sidebarLogout = document.querySelector(".sidebar-logout");

  if (sidebarToggle && sidebar && content) {
    sidebarToggle.onclick = function() {
      sidebar.classList.toggle("collapsed");
      content.classList.toggle("expanded");

      if (sidebarTitle) {
        sidebarTitle.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
        sidebarEmail.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
        sidebarLogout.style.display = sidebar.classList.contains("collapsed") ? "none" : "block";
      }
    };
  }
});