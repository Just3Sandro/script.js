const word = document.getElementById("word");
const res = document.getElementById("result");

word.oninput = () => {
   document.location.hash = word.value;
}
