var ballArray = [];
var amp,song,x;
function setup(){
	song = loadSound("assests/sounds/Caravan.mp3",done);
	createCanvas(500,500);
	background('black');
	drawBalls();
	
}
function draw(){
	background('black');
	for(var i = 0; i < ballArray.length; i++){
		ballArray[i].update(amp);
		ballArray[i].movement();
		if(amp)
		console.log(amp.getLevel());
	}
}
function drawBalls(){
	for( var i = 1; i<=50; i++){
		ballArray.push(new Balls(random(450),random(450)));
	}
}
function done(){
	song.play();
	amp = new p5.Amplitude();
	amp.setInput(song);
}

