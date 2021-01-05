class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visible=255
    
  }
display(){
  
  if(this.body.speed<3){
    super.display()
  }
  else{
    push()
    this.visible-=2
    tint(255,this.visible)
    imageMode(CENTER);
    image(this.image, this.body.position.x,this.body.position.y ,50,50);
    pop()
        
        
  World.remove(world,this.body)
  }
  

  
}
};