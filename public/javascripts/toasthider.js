setTimeout(playHideAnim, 3000);
setTimeout(deleteToast, 5000);
function playHideAnim() {
  document.getElementById("toast").classList.add("fadeout");
}
function deleteToast() {
  document.getElementById("toast").remove();
}
