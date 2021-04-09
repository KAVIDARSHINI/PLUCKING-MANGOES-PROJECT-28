class Sling {
       constructor(bA,pB){
          
        var options = {
            bodyA : bA,
            pointB : pB,
            stiffness : 0.005,
            length : 10  
        }

        this.pointB = pB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

       }

       display(){
           if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            strokeWeight(5);
            line(posA.x,posA.y,posB.x,posB.y);
 
           }
           
       }

       attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

       

}