// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the clickable element (for example, a button)
  const showButton = document.getElementById("shareShowButton");

  const hideButton = document.getElementById("shareHideButton");


  // Get the element you want to hide
  const target = document.getElementById("footer");
  const popupTarget = document.getElementById("popup");

  // Add click event listener
  showButton.addEventListener("click", function () {
    target.style.display = "none";
    popupTarget.style.display = "flex";
  });

    hideButton.addEventListener("click", function () {
      popupTarget.style.display = "none";
      target.style.removeProperty("display");
    });
});
