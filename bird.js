function Bird(){
  this.x = 40; 
  this.y = height/2; 
  this.width = 20; 
  
  this.gravity = 0.6; 
  this.velocity = 0;
  this.lift =  10; 
  
  this.show = function(){
    fill(255); 
    ellipse(this.x, this.y, this.width); 
  }
  
  this.update = function(){
    this.velocity += this.gravity; 
    this.velocity *= 0.9;
    this.y += this.velocity; 
    if(this.y > height){
      this.y = height; 
      this.velocity = 0; 
    }
    if(this.x <= 0){
      this.y = 0; 
      this.velocity = 0; 
    }
  }
  
  this.up = function(){
    this.velocity -= this.lift;
  }
}