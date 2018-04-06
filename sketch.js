//GLOBAL VARIABLES
var h;
var m;
var s;
var tSize;
var radars=[];
var blips=[];
var numRadars=80; //100 //Resolution of sweep
var numBlips=2;
var hDisp=0;
var mDisp=0;
var sDisp=0;
var fracCase=.95;
var radR=0;
var radL=0;
var maxBlipSpeed=1;
var side;

function preload() {
	myFont=loadFont('Space Crusader.otf')
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	if(windowWidth<=windowHeight){side=windowWidth/2;}
	else {side=windowHeight/2;}
	background(0);
	fill(0,0,0,255);
  textFont(myFont);
  textSize(tSize);
	textAlign(CENTER,CENTER);
	translate(width/2,height/2);

	for (var i = 0; i < numRadars; i++) {
		radars[i]= new Radar(i);
		radars[i].update();
		radars[i].show();
	}

	for (var i = 0; i < numBlips; i++) {
		blips[i]= new Blip();
		blips[i].update();
		blips[i].show();
	}

}

function draw() {
	background(0);
	if(windowWidth<=windowHeight){side=windowWidth/2;}
	else {side=windowHeight/2;}
	translate(width/2,height/2-(side*1/5));
	if(hour()==0) {h='12';}
	else if (hour()<=9) {h='0'+hour();}
	else {h='0'+hour()%12;}
	if (m<=9) {m='0'+minute();}
	else {m=minute();}
	if (s<=9) {s='0'+second();}
	else {s=second();}
	tSize=side/5;
	textSize(tSize);
	fill(0,255,0);
	if(radars[0].radR>=PI && radars[0].radR<=1.05*PI){
		hDisp=h;
		mDisp=m;
		sDisp=s;
		hDispPrev=hDisp;
		mDispPrev=mDisp;
		sDispPrev=sDisp;
	}
	else{
		hDisp=hDispPrev;
		mDisp=mDispPrev;
		sDisp=sDispPrev;
	}
	//text(hDisp+':'+mDisp+':'+sDisp,0,0);
	if(radars[0].radR>=PI || radars[0].radR<PI/3){
			text(hDisp+':'+mDisp+':'+sDisp,0,0);
	}
	translate(0,side*1/5);
	fill(0,255,0,100);
	for (var i = 0; i < 8; i++) {
		rect(0,0,2,side/2*fracCase-30);
		rotate(2*PI/8);
	}

	for (var i = 0; i < numBlips; i++) {
		blips[i].show();
		if (random(4.05)>=4){
			blips[i].update();
		}
	}

	for (var i = 0; i < numRadars; i++) {
		radars[i].update();
		radars[i].show();
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
