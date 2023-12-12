document.addEventListener("DOMContentLoaded", function () {
  var tablinks = document.querySelectorAll(".tab-links");
  var tabcontents = document.querySelectorAll(".tab-contents");

  function opentab(tabname, event) {
    tablinks.forEach(function (link) {
      link.classList.remove("active-link");
    });
    tabcontents.forEach(function (content) {
      content.classList.remove("active-tab");
    });

    // Make sure to check if the event parameter exists before using it
    if (event) {
      event.currentTarget.classList.add("active-link");
    }

    document.getElementById(tabname).classList.add("active-tab");
  }

  // Attach event listeners to tab links
  tablinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      opentab(link.getAttribute("data-tab"), event);
    });
  });
});