function Blip() {
	var rMax=side/2*.85;
	this.rad=random(0,2*PI);
	this.r=random(rMax);
	this.x;
	this.y;
	this.frame=0;

  this.update=function(){
		if (frameCount-30>=this.frame){
		this.rad=radR
		this.r=random(rMax*.1,rMax); //random(rMax);
		this.x=this.r*cos(this.rad);
		this.y=this.r*sin(this.rad);
		this.frame=frameCount;
		console.log(this.frame);
		}
	}
  this.show=function(){
    fill(255,0,0);
    noStroke();
    ellipse(this.x,this.y,side/50,side/50)
  }
}
/* MOVING BLIPS
	var rMax=side/2*.85;
  this.x=random(-rMax,rMax);
  this.y=random(-sqrt(pow(rMax,2)-pow(this.x,2)),sqrt(pow(rMax,2)-pow(this.x,2)));
  this.vx=random(-maxBlipSpeed,maxBlipSpeed);
  this.vy=random(-maxBlipSpeed,maxBlipSpeed);

  this.update=function(){
    this.x+=this.vx;
    this.y+=this.vy;
    if (sqrt(pow(this.x,2)+pow(this.y,2))>=rMax){
      this.x=random(-rMax,rMax);
      this.y=random(-sqrt(pow(rMax,2)-pow(this.x,2)),sqrt(pow(rMax,2)-pow(this.x,2)));
      this.vx=random(-maxBlipSpeed,maxBlipSpeed);
      this.vy=random(-maxBlipSpeed,maxBlipSpeed);
    }
  }
  this.show=function(){
    fill(0,255,0,100);
    noStroke();
    ellipse(this.x,this.y,side/50,side/50)
  }
}
*/
