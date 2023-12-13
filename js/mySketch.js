function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	instructions();
	frameRate(7)
}

function draw() {
	if (mouseIsPressed){
		createCircle();
	} 
}

function createCircle() {
	//range of diameter size values
	let diameterSize = [280, 240, 200, 160, 120, 80, 60];
	
	//"randomizing" diameter 
	//(randomly selecting values from within diameterSize Array)
	let d = random(diameterSize)  
	
	while (d > 0) {
		fill(randomPalette());
		circle(mouseX, mouseY, d);
		d -= 20;	
	}
}

function instructions() {
	fill(0);
	text("click on the screen to create ripples", 10, 15);
}