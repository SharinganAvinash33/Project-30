class Box extends SuperClass {
  constructor(x, y){
    super(x,y,60,80);
    this.visibility=255;
  }
  display(){
    if(this.body.speed<1.5){
    super.display();
    }
    else{
      World.remove(world,this.body);
      push()
      this.visibility=this.visibility-10;
      
      rectMode(CENTER);
      fill(this.visibility)
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      pop()
    }
  }
}
