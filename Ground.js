class Ground {
    constructor (x, y, width, height){
        var ground_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        strokeWeight(3);
        fill(255, 255, 0);
        var groundPos = this.body.position;
        push();
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
     }
}