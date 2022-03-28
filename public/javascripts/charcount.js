const textarea = document.getElementById('body');

textarea.addEventListener('input', event => {
  const currentLength = event.currentTarget.value.length;
  document.getElementById("char-count").innerHTML = currentLength + "/140";
  console.log("hello");
  if (currentLength >= 140) {
    document.getElementById("char-count").style.color = 'red';
  } else {
    document.getElementById("char-count").style.color = 'black';
  }
});