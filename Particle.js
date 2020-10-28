class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.r=r
      this.color=color(random(0,255),random(0,255),random(0,255))

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      rotate(this.body.angle)
     
      fill("brown");
      circle(0, 0, this.r);
      pop();
    }
  };
