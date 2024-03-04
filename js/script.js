let h2 = prompt('what is the h2 font Size? ');
let siteColor = prompt('what background color ddo you want? ');
let textColor = prompt('what color of the text do you want? ');
let siteFont = prompt('what font family do you want? ');

document.querySelector('h2').style.fontSize = h2
document.body.style.backgroundColor = siteColor;
document.body.style.color = textColor;
document.body.style.fontFamily = siteFont;