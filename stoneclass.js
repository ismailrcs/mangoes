class Stone {

constructor(){

var options = {

 isStatic : false,
 restitution : 0,
 friction : 1,
 density: 1.2

}

 this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image = loadImage("Pluckingmangoes/stone.png");
World.add(world, this.body);


}


    display(){
       
      
        imageMode(CENTER);
        image(this.image, 200,200 );
        
      }

}
