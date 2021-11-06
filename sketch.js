var caixa;








function setup() {
  createCanvas(400,400);

  caixa = createSprite (120,90,30,30);

}

function draw() 
{
  background("limegreen");

if(keyDown("left")){
 caixa.x = caixa.x -3;

}
  if(keyDown("right")){
    caixa.x = caixa.x +3;
  }
  if(keyDown("up")){
    caixa.y = caixa.y -3;
  }
  if(keyDown("down")){
    caixa.y = caixa.y +3;
  }







  drawSprites();
}




