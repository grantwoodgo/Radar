function Radar(i) {
  var scanWidth=.1; //width of scanning arc
  var speed=.05;
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
    this.radMaskL=this.radMaskR-scanWidth*15; //replace # with numRadars
  }
  this.show=function(){

    fill(0,0,0,40); //10
    noStroke();
    arc(0,150,width/1.1,height,this.radR,this.radL);
    fill(0,0,0);
    noStroke();
    arc(0,150,width/1.1,height,this.radMaskR,this.radMaskL);
    //Radar Lines
    fill(0,255,0,5);
    noStroke();
    arc(0,150,width/1.1,height,this.radLine-.005,this.radLine);

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
