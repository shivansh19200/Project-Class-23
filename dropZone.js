class Box {
    constructor(x,y,width,height){
        var options = {
            setStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world , this.body);
    }
    display(){
        push();
        var p = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(p.x, p.y,this.width,this.height);
        pop();
    }
}