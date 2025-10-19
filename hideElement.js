// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the clickable element (for example, a button)
  const showButton = document.getElementById("shareShowButton");
  const showButtonIcon = document.getElementById("shareShowButtonIcon");
  const hideButton = document.getElementById("shareHideButton");
  const popover = document.getElementById("popup");


  hideButton.addEventListener("click", function () {
    popover.hidePopover();
  });

  popover.addEventListener("beforetoggle", function () {
    if (!showButton.style.backgroundColor) {
      showButton.style.backgroundColor = "var(--color-grey-500)";
      showButtonIcon.src = "/assets/images/icon-share-white.svg";
    } else {
      showButton.style.removeProperty("background-color");
      showButtonIcon.src = "/assets/images/icon-share.svg";
    }
  });
});
