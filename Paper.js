class Paper {
    constructor (x, y, radius) {
        var paper_options = {
            isStatic: false, 
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(this.x, this.y, (this.r - 20)/2, paper_options);
        World.add(world, this.body);
    }

    display() {
       var paperPosition = this.body.position;
       push();
       translate(paperPosition.x, paperPosition.y);
       imageMode(CENTER);
       strokeWeight(3);
       fill(255, 0, 255);
       image(this.image, 0, 0, this.r, this.r);
       pop();
    }
}