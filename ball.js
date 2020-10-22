class Box {
  constructor(x, y, r) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':2.0
    }
    this.body = Bodies.circle(x, y,r, options);
    this.width = r;
    this.height = r;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle= this.body.angle;
    push  ();
    translate(pos.x,pos.y);
    rotate (angle);
    ellipseMode(RADIUS);
    fill(255);
    ellipse(0,0, this.width, this.height);
    pop();
  }
};
