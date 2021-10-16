// script for the first div
// adding the h3 tag
var tag = document.createElement("h3");
var text = document.createTextNode("Different shades of Pallete Beds");
tag.appendChild(text);
var element = document.getElementById("content");
element.appendChild(tag);

// adding the p tag
var tag = document.createElement("p");
var text = document.createTextNode("Pallete Bed One");
tag.appendChild(text);
var element = document.getElementById("content");
element.appendChild(tag);

// adding an image 
var img = document.createElement("img");
img.src = "bed2.jpg";
var src = document.getElementById("content");
src.appendChild(img);


// js code for second div

// adding the h3 tag
var tag = document.createElement("h3");
var text = document.createTextNode(" Different shades of Pallete Beds");
tag.appendChild(text);
var element = document.getElementById("container");
element.appendChild(tag);

// adding the p tag
var tag = document.createElement("p");
var text = document.createTextNode("Pallete Bed two");
tag.appendChild(text);
var element = document.getElementById("container");
element.appendChild(tag);

// adding an image 
var img = document.createElement("img");
img.src = "bed3.jpg";
var src = document.getElementById("container");
src.appendChild(img);