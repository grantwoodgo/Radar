function Radar(i) {
  var scanWidth=.1; //width of scanning arc
  var speed=.05;
  var frac=.9;
  var numCaseCirlces=6;
  this.i=i;
  this.radR=PI;//+this.i*5*scanWidth/(2*PI);
  this.radL=this.radR-scanWidth*(this.i+1);
  this.radMaskR=this.radR;
  this.radMaskL=this.radMaskR-scanWidth*(numRadars);

  this.update=function(){
    this.radR+=speed;
    this.radMaskR=this.radR;
    this.radLine=this.radR;
    if (this.radR>=2*PI) {
      this.radR=0;
    }
    this.radL=this.radR-scanWidth*(i+1);
    this.radMaskL=this.radMaskR-scanWidth*(numRadars);//15; //replace # with numRadars
    radR=this.radR;
    radL=this.radL;
  }
  this.show=function(){
    //All Black Masks
    fill(0,0,0,40); //10
    noStroke();
    arc(0,0,frac*side,frac*side,this.radR,this.radL);
    //Ultimate Opaque Mask
    fill(0,0,0);
    noStroke();
    arc(0,0,frac*side,frac*side,this.radMaskR,this.radMaskL);
    //Sweeping Radar Line
    fill(0,255,0,5);
    noStroke();
    arc(0,0,fracCase*side,fracCase*side,this.radLine-.005,this.radLine);
    //Radar Case
    noFill();
    stroke(0,255,0)
    strokeWeight(2);
    ellipse(0,0,fracCase*side,fracCase*side);
    stroke(0,255,0,2);
    strokeWeight(1);
    for (var i = 0; i < numCaseCirlces; i++) {
      ellipse(0,0,side*(i/numCaseCirlces),side*(i/numCaseCirlces))
    }
  }
}


/* ARC
rad+=.05; //speed
rad2=rad-.1;
fill(100,0,0,100);
noStroke();
arc(0,height/2,width,height*2,rad+.1,rad-.1)
fill(0,0,100,200);
noStroke();
arc(0,height/2,width,height*2,rad2+.1,rad2-.1);
*/
