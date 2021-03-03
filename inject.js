var s = document.createElement("script");
s.src = chrome.runtime.getURL("speed.js");
s.async = false;
s.onload = function () {
	//this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);