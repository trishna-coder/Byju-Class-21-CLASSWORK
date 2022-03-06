class Ball{
    constructor(x,y,radius){
        this.x = x
        this.y = y
        this.r = radius
        this.body = Bodies.circle(this.x, this.y, this.r)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill("Yellow")
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}