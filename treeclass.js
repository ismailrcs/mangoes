class Tree {


 constructor(x,y){


    this.x = x;
    this.y = y;
 
    var options = {


  isStatic : false


  }
   
  this.body = Bodies.rectangle(x, y, 50, 50, options);
  World.add(world,body);  

  this.treeimg = loadImage("PLUCKING-MANGOES/tree.png");
     }

     display(){


        image(this.treeimg,200,200);








     }

 




}