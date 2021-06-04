var paddle1, paddle2, box1, ball, edges
var score1 = 0
var score2 = 0
function setup() {
  createCanvas(2500,1300);
  paddle1 = createSprite(1500, 100, 100, 8 )
  paddle1.shapeColor = rgb(160, 75, 100)
  paddle2 = createSprite(1500, 1250, 100, 8 )
  paddle2.shapeColor = rgb(160, 75, 100)
  box1 = createSprite(1500, 650, 75, 75)
  box1.shapeColor = "brown"
  ball = createSprite(1500, 200, 10, 10)
  ball.shapeColor = "black"
  ball.velocityX = 8
  ball.velocityY = 6

}

function draw() {
  background(0,50, 255);
  edges = createEdgeSprites()
  ball.bounceOff(edges)  
  paddle1.x = mouseX
  if (keyDown(LEFT_ARROW)) {
    paddle2.x = paddle2.x - 10
  }
  if (keyDown(RIGHT_ARROW)) {
    paddle2.x = paddle2.x + 10
  }
  ball.bounceOff(paddle1)
  ball.bounceOff(paddle2)
  if(ball.isTouching(paddle1)) {
    score1 = score1 + 1
  }
  if(ball.isTouching(paddle2)) {
    score2 = score2 + 1
  }
 // score1.shapeColor = 'white'
  text('SCORE1: ' + score1, 700, 600)
 // score2.shapeColor = 'white'
  text('SCORE2: ' + score2, 700, 630)

  drawSprites();
  
}

