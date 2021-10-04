// var runner,runner_Img;
// var obstacles,obstacleImg1,obstacleImg2;
// var reward,foodImg,jewelImg,treasureImg;
// var bg1,bg2,bg3,invisibleground;
// function preload(){
//     runner_Img=loadAnimation("images/img1.png","images/img2.png","images/img3.png",
//                  "images/img4.png","images/img5.png","images/img6.png");
//     obstacleImg1=loadImage("images/ufo.png");
//     obstacleImg2=loadImage("images/alien.png");
//    foodImg=loadImage("images/fruit.png");
//     jewelImg=loadImage("images/ruby.png");
//     treasureImg=loadImage("images/jewel.png");
//     bg1=loadImage("images/moon run.png");
//     bg2=loadImage("images/bg2.png");
//     bg3=loadImage("images/bg3.png");
// }
// function setup(){
//     var canvas=createCanvas(1200,600);
// runner=createSprite(100,250,50,50);
// runner.addAnimation("running",runner_Img);
// runner.scale=0.7;
// // runner.velocityX=8;
// // runner.velocityY=-13;
// // invisibleground=createSprite(100,300,50,20);

// // }
// function draw(){
// background("blue");
// Obstacles();
// Reward();
//

// camera.x=runner.x+500;
// camera.y=250;
// invisibleground.visible=false;
// invisibleground.x=runner.x;
// console.log(runner.x);

// drawSprites();
// }
// function Obstacles(){
// if(frameCount%120===0){

// randY=Math.round(random(100,300));
// // randX=Math.round(random(runner.x+200,runner.x+1000));
// obstacles=createSprite(runner.x+1000,randY,20,20);
// obstacles.shapeColor="white";
// rand=Math.round(random(1,2));
// switch(rand){
//     case 1:obstacles.addImage(obstacleImg1);
//             break;
//     case 2:obstacles.addImage(obstacleImg2);
//             break;
//             default:break;
// }
// obstacles.scale=0.5;
// obstacles.lifetime=200;

// }
// }
// function Reward(){
// if(frameCount%260===0){
  
//     // rex=Math.round(random(runner.x+200,runner.x+1000));
//     rey=Math.round(random(100,350));
//     reward=createSprite(runner.x+1000,rey,30,30);
//     rand=Math.round(random(1,2));
//     switch(rand){
//         case 1:reward.addImage(foodImg);
//         break;
//         // case 2:reward.addImage(jewelImg);
//         // break;
//         case 2:reward.addImage(treasureImg);
//         break;
//         default:break;
//     }
// reward.scale=0.3;
// reward.lifetime=200;
// }
// }