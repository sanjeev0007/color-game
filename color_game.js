var colors=randomColor(6);

var box=document.querySelectorAll(".box");
var colorPicked=colorpick();
var displayColor=document.getElementById("colorDisplay");
var message=document.getElementById("message");

displayColor.textContent=colorPicked;

for (var i=0;i<box.length;i++) {

	box[i].style.backgroundColor=colors[i];


box[i].addEventListener("click",function(){



	var colorClicked=this.style.backgroundColor;

	if (colorClicked==colorPicked) {
		displayColor.textContent=colorPicked;
		message.textContent="Correct";
		changeColor(colorPicked);

	}
	else{
		this.style.backgroundColor= "#232323";
		message.textContent="Try Again!";
	}

});
}
function changeColor(color){

	for(var i=0;i<box.length;i++){
		box[i].style.backgroundColor=color;

	}

}

function colorpick(){

	var random =Math.floor(Math.random()*colors.length);
	return colors[random];

}

function randomColor(num){

	var arr = [];

	

	for(var i=0;i<num;i++){

		
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	arr.push("rgb(" + r + ", " + g + ", " + b + ")");

}
	return arr;
}