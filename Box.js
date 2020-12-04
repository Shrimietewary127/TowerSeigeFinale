class Box extends BaseClass {
  constructor(x,y, width, height){
    super(x,y,width,height)
  
  this. Visibility=255
  

}

display(){
  //console.log(this.body.speed);

  if(this.body.speed<5){
    super.display()  
}
else{
 
World.remove(world,this.body);
  push();
  this. Visibility=this.Visibility-5
  tint(255,this.Visibility);
  
  pop();
 
}

  
}
score(){

if(this.Visibility<0&&this.Visibility>-150){

score++;

}

}
}
