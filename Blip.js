function Blip() {
  this.r=random(150,fracCase*.9*width/2);
  this.deg=random(2*PI);
  this.x=this.r*cos(this.deg);
  this.y=this.r*sin(this.deg);
  this.i=0;
  this.update=function(){
    if (radR<=3*PI/4){
      this.radRTemp=radR+2*PI;
    }
    if (this.deg<=this.radRTemp-3*PI/4){
      this.r=random(0,fracCase*.9*width/2);
      this.deg=radR;
      this.x=this.r*cos(this.deg);
      this.y=this.r*sin(this.deg);
      console.log('Loop 2');
    }
    this.radRTemp=radR;
  }
  this.show=function(){
    fill(0,255,0,100);
    noStroke();
    ellipse(this.x,this.y,10,10)
  }
}
