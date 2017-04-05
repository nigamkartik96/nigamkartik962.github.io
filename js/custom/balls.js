function Balls(x, y,amp){
	this.x = x;
	this.y = y;
	this.speedX = 10;
	this.speedY = 10;
	//this.amp = amp;
	this.movement = function(){
		
		if(this.x >= width){
			this.speedX = random(-10);
		}
		else
		if( this.x <= 0){
			this.speedX = random(10);
		}
		if(this.y >=height){
			this.speedY = random(-10);
		}
		else
		if(this.y <=0){
			this.speedY = random(10);
		}
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
	}
	this.update = function(amp){
		if(amp){
			noStroke();
			fill(255*random(amp.getLevel()),255*random(amp.getLevel()),255*random(amp.getLevel()));
			ellipse(this.x, this.y,250*amp.getLevel(),500*amp.getLevel());
		}
		else{
			noStroke();
			fill('orange');
			ellipse(this.x,this.y, 50,50);
		}
	}
}