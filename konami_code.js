const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const body = document.body;
  let index = 0;
  function callback(e) {
    const key = e.key;
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        window.alert('Congrats!');
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  body.addEventListener("keydown", callback);
}
