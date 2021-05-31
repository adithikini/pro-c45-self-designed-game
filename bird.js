class Bird extends Baseclass{
   constructor(x,y){
       super(x,y,50,50)

       this.trajectory=[]
       this.smokeimage=loadImage("smoke.png")
       this.image=loadImage("angrybird.png")
       
   }
   display(){
       /*var position= this.body.position
       imageMode(CENTER)*/

       super.display()

       if(this.body.velocity.x>10 && this.body.position.x>200){
           var position=[this.body.position.x,this.body.position.y]
           this.trajectory.push(position)
       }
for(var i=0;i<this.trajectory.length;i++){
    image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1],20,20)
}

}
}