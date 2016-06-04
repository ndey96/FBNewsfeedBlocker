var element = document.getElementById("contentArea");
if (element === null) {
	console.log("Failure");
}
console.log(element);
var imageUrl = "http://cdn.lamborghini.com/content/models/Centenario_LP_770-4/Lamborghini-Centenario-geneva-motorshow-2016-Frontslide-.jpg";
element.innerHTML = "<img src=" + imageUrl + " </img>";
// var newHTML = "YOLOLOLOLDSOSDFkjoinfnoifonibdfondbfonidbf";
// element.innerHTML = newHTML;
// document.removeChild(element);