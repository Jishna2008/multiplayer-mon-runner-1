class Form{
    constructor(){

        this.input=createInput("Name");
        this.input.position(600,300);

        this.button=createButton("Play");
        this.button.position(600,400);
  
        this.reset=createButton("Reset");
        this.reset.position(50,500);
    }

    disappear(){
    
        this.greetings.hide();
    }
    display(){
        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();  

            playerCount+=1;
            player.index=playerCount
            player.updateCount(playerCount);

            player.name=this.input.value();
            player.updateName();
        
            console.log(player.name)
          
            this.greetings=createElement('h1');
            this.greetings.html("welcome");
           this.greetings.position(300,300);
        
        
        }    )
        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
            runner1.velocityY=0;
            runner2.velocityY=0;
            backg1.velocityX=0;
            obstacleGroup.setVelocityXEach(0);
             rewardGroup.setVelocityXEach(0);
        })
        // text(player.name,200,300);
         
     
    }
 
}