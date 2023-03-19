// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Sono', sans-serif;
let font = document.createElement("div");
font.className = "fonts";
font.innerHTML = `
<span class="Open s">Open Sans</span>
<span class="Roboto s">Roboto</span>
<span class="Sono s">Sono</span>
`;
font.style.cssText = `display:flex ; justify-content:space-around; flex-wrap:wrap`;
document.body.appendChild(font);
let openSpan = document.querySelectorAll("span")[0];
let robotoSpan = document.querySelectorAll("span")[1];
let sonoSpan = document.querySelectorAll("span")[2];
openSpan.style.cssText = `padding:20px ;background-color:#eee ;
 font-weight:bold; cursor:pointer`;
robotoSpan.style.cssText = `padding:20px ;background-color:#eee ;
 font-weight:bold; cursor:pointer;`;
sonoSpan.style.cssText = `padding:20px ;background-color:#eee ;
 font-weight:bold; cursor:pointer;`;
let fontSpans = document.querySelectorAll(".fonts span");
console.log(fontSpans);

fontSpans.forEach(function (e) {
  e.onclick = function () {
    fontSpans.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
    window.localStorage.setItem("font", this.textContent);
    document.body.style.fontFamily = window.localStorage.getItem("font");
  };
});
document.body.style.fontFamily = window.localStorage.getItem("font");

// end of fonts
//start of colors
let colors = document.createElement("div");
colors.className = "colors";
colors.innerHTML = `
<span class="red Color">Red</span>
<span class="green Color">green</span>
<span class="blue Color">blue</span>
<span class="yellow Color">yellow</span>
<span class="gray Color">gray</span>
<span class="eee Color">black</span>`;
document.body.appendChild(colors);
let spanColors = document.querySelectorAll(".colors span");
colors.style.cssText = `display:flex ; justify-content:space-around
; flex-wrap:wrap`;
let red = document.querySelectorAll(".colors span")[0];
let green = document.querySelectorAll(".colors span")[1];
let blue = document.querySelectorAll(".colors span")[2];
let yellow = document.querySelectorAll(".colors span")[3];
let gray = document.querySelectorAll(".colors span")[4];
let eee = document.querySelectorAll(".colors span")[5];
red.style.cssText = `padding:20px ;background-color: red ;
 font-weight:bold; cursor:pointer ;margin-top:10px`;
green.style.cssText = `padding:20px ;background-color:green ;
 font-weight:bold; cursor:pointer;margin-top:10px`;
blue.style.cssText = `padding:20px ;background-color:blue ;
 font-weight:bold; cursor:pointer;margin-top:10px`;
yellow.style.cssText = `padding:20px ;background-color:yellow;
 font-weight:bold; cursor:pointer;margin-top:10px`;
gray.style.cssText = `padding:20px ;background-color:gray ;
 font-weight:bold; cursor:pointer;margin-top:10px`;
eee.style.cssText = `padding:20px ;background-color:#eee ;
 font-weight:bold; cursor:pointer;margin-top:10px`;
spanColors.forEach(function (e) {
  e.onclick = function () {
    spanColors.forEach(function (e) {
      e.classList.remove("active");
    });

    window.localStorage.setItem("class", "active");
    this.classList.add(window.localStorage.getItem("class"));
    window.localStorage.setItem("backColor", this.textContent);
    document.body.style.backgroundColor =
      window.localStorage.getItem("backColor");
  };
});
document.body.style.backgroundColor = window.localStorage.getItem("backColor");

// end of colors
//start of fontSize
let fSize = document.createElement("div");
fSize.className = "fsize";
fSize.innerHTML = `
<span class="a size">16px</span>
<span class="b size">19px</span>
<span class="c size">22px</span>
<span class="d size">25px</span>
<span class="e size">27px</span>
<span class="f size">30px</span>`;
document.body.appendChild(fSize);
let spansize = document.querySelectorAll(".fsize span");
fSize.style.cssText = `display:flex ; justify-content:space-around
; flex-wrap:wrap`;
let a = document.querySelectorAll(".fsize span")[0];
let b = document.querySelectorAll(".fsize span")[1];
let c = document.querySelectorAll(".fsize span")[2];
let d = document.querySelectorAll(".fsize span")[3];
let e = document.querySelectorAll(".fsize span")[4];
let f = document.querySelectorAll(".fsize span")[5];
a.style.cssText = `padding:20px ;background-color: #eee  ;
 font-weight:bold; cursor:pointer ;margin-top:10px`;
b.style.cssText = `padding:20px ;background-color:#eee  ;
 font-weight:bold; cursor:pointer;margin-top:10px`;
c.style.cssText = `padding:20px ;background-color:#eee  ;
 font-weight:bold; cursor:pointer;margin-top:10px`;
d.style.cssText = `padding:20px ;background-color:#eee ;
 font-weight:bold; cursor:pointer;margin-top:10px`;
e.style.cssText = `padding:20px ;background-color:#eee  ;
font-weight:bold; cursor:pointer;margin-top:10px`;
f.style.cssText = `padding:20px ;background-color:#eee ;
 font-weight:bold; cursor:pointer;margin-top:10px`;

spansize.forEach(function (e) {
  e.onclick = function () {
    spansize.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
    window.localStorage.setItem("font-size", this.textContent);
    document.body.style.fontSize = window.localStorage.getItem("font-size");
  };
});
document.body.style.fontSize = window.localStorage.getItem("font-size");
