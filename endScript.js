document.body.contentEditable = true;
var element = document.getElementById("contentArea");
if (element === null) {
	console.log("Failure");
}
console.log(element);
var imageUrl = "http://cdn.lamborghini.com/content/models/Centenario_LP_770-4/Lamborghini-Centenario-geneva-motorshow-2016-Frontslide-.jpg";
// console.log("style: ", element.style);
var imgStyleString = ""
element.innerHTML = "<img src=" + imageUrl + " width=\"500\"</img>";