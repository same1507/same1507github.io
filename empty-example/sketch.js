/*var colors =[];
var osc;
var size = 100
var notes[];*/
var bubbles = [];

function setup() {
	createCanvas(600,400);
	/*createCanvas(windowWidth,windowHeight);	
  	bubbles[0] = new bubble();
  	bubbles[1] = new bubble();
  	bubbles[2] = new bubble();
  	bubbles[3] = new bubble();
	colors[0] = color(74,166,140);
	colors[1] = color(238,199,84);
	colors[2] = color(88,48,14);
	colors[3] = color(203,75,62);
	colors[4] = color(53,76,90);

	notes(987.77,293.66,164.81,2793.83,1479.98,880.00,880.00);
	
	size = 100;
	grow = true;

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(200);
	osc.amp(0.2);
	osc.start();

	var.delay = new p5.Delay();
	delay.process(osc, .12, .7, .2300);

	if (mouseX>0&&mouseX<=width/6){osc.freq(notes[0]);}	
	if (mouseX>width/6&&mouseX<=2*width/6){osc.freq(notes[1]);}
	if (mouseX>2*width/6&&mouseX<=3*width/6){osc.freq(notes[2]);}
	if (mouseX>3*width/6&&mouseX<=4*width/6){osc.freq(notes[3]);}
	if (mouseX>4*width/6&&mouseX<=5*width/6){osc.freq(notes[4]);}
	if (mouseX>5*width/6&&mouseX<=6*width/6) {osc.freq(notes[5]);}
	if (mouseX>6*width/6&&mouseX<=7*width/6) {osc.freq(notes[6]);}*/
}

function draw() {
	background(0);

	for (var i = 0; i<bubbles.length; i++){
	bubbles[i].move();
  	bubbles[i].display();
  	for (var i = 0; i < bubbles.lenght; i++){
  		if (i != j && bubbles[i].intersects(bubbles[j])){
  			bubbles[i].speedX= bubbles[i].speedX*-1;
  			bubbles[i].speedY= bubbles[i].speedY*-1;
  		}
  	}
  }
 }

  function mouseDragged(){
  	bubbles.push(new Bubble(mouseX, mouseY));
  }

  function Bubble(x,y){
	this.x=x;
	this.y=y;
	this.r = random(10,20);
	this.speedX = random(-2,2);
	this.speedY = random(-2,2);

	this.display = function(){
		fill(255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.move = function(){
		this.x = this.x + this.speedX;
		this.y = this.y + this.speedY;
		this.lifespan = this.lifespan -1;

		if ((this.x > width) || (this.x < 0)) {
			this.speedX = this.speedX * -1;
		}
		if ((this.y > height) || (this.y < 0)) {
			this.speedY = this.speedY * -1;
		}
	}

	/*this.intersects = function(other){
		var d = dist(this.x, this.y, other.x, other.y)
		if (d < this.r + other.r){
			return true;
			else{
				return false;*/
			}
		}
	}
	/*background(255);
	fill(255,3);
	rect(0,0, width,height);

	if (size==100){ grow=false;}
	if (size==0){grow=true}

	if (grow){ size++; }
	else size--;

	if(mouseIsPressed) {
		fill(0);
	}

			fill(255,3);
		rect(0,0,width,height);
		var size = random(100);
		if(mouseIsPressed){
			fill(colors[parseInt(random(5))]);
		}else fill(255);	
	
	if(mouseIsPressed){
		fill(0);
	}else fill(255);
	ellipse(mouseX,mouseY,random(200),random(200));
	ellipse(width-mouseX,mouseY,random(200),random(200));
	ellipse(width,height-mouseY,random(200),random(200));
	ellipse(width-mouseX,height-mouseY,random(200),random(200));*/
  
  }
  
