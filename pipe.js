function Pipe(){
  this.top = random(height/2);
  this.bottom = random(height/2); 
  this.width = 20;
  this.x = width; 
  this.speed = 3; 
  
  this.show = function(){
    stroke(255);
    noFill(); 
    rect(this.x,-1,this.width,this.top-10);  
    rect(this.x,height-this.bottom+10,this.width,this.bottom-10);  
  }
  
  this.update = function(){
    this.x -= this.speed; 
  } 
  
  this.hits = function(bird){
    if(bird.y < this.top || bird.y > height - this.bottom){ 
      if(this.x < 40 && this.x > 0){
        return true; 
      }
      return false; 
    }
  }
}