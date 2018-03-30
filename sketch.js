var h;
var m;
var s;
var tSize;
var radars=[];
var numRadars=80; //100 //Resolution of sweep
var hDisp=0;
var mDisp=0;
var sDisp=0;

function preload() {
	myFont=loadFont('Space Crusader.otf')
}

function setup() {
	createCanvas(500,500);
	background(0);
	fill(255,0,0,255);
  textFont(myFont);
  textSize(tSize);
	textAlign(CENTER,CENTER);
	translate(width/2,height/2);
	for (var i = 0; i < numRadars; i++) {
		radars[i]= new Radar(i);
		radars[i].update();
		radars[i].show();
	}
}

function draw() {
	background(0);
	translate(width/2,height/2-60);
	if (hour()<=9) {h='0'+hour();}
	else {h='0'+hour()%12;}
	if (m<=9) {m='0'+minute();}
	else {m=minute();}
	if (s<=9) {s='0'+second();}
	else {s=second();}
	tSize=width/5;
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
	for (var i = 0; i < numRadars; i++) {
		radars[i].update();
		radars[i].show();
	}

}
