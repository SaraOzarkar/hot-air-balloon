class Tree{
    constructor(){
        this.body=Bodies.rectangle(50,height-500,50,50,{isStatic:true})
        World.add(world,this.body)
        this.image=loadImage("mountain.png")
        
        }
        
           display(){
        image (this.image,this.body.position.x,this.body.position.y,300,500)
           }

}