function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(220);
	noStroke();
	// textSize(32);
	// fill(180);
	// text(hour(), 10, 30);
	// fill(100);
	// text(minute(), 10, 60);
	// fill(0);
	// text(second(), 10, 90);

	fill('hsba(210, 100%, 90%, 0.3)');
	ellipse(250,300,450,450);
	fill('hsba(210, 100%, 80%, 0.6)');
	arc(250,300,450,450,1.5*PI,(hour()/6*PI-HALF_PI));

	fill('hsba(160, 100%, 80%, 0.3)');
	ellipse(550,200,350,350);
	fill('hsba(160, 100%, 60%, 0.6)');
	arc(550,200,350,350,1.5*PI,(minute()/30*PI-HALF_PI));

	fill('hsba(30, 100%, 90%, 0.3)');
	ellipse(500,450,250,250);
	fill('hsba(30, 100%, 90%, 0.6)');
	arc(500,450,250,250,1.5*PI,(second()/30*PI-HALF_PI));

}
