var positionX = 100
var positionY = 100
var name = ' Louis'
var moving = true
var directionX = 10
var directionY = 10
var score = 0
var paddle_position = 100

function mousePressed() {
  moving = !moving
}

function setup() {
  createCanvas(400, 200)
}

function draw() {
  background(100,150,250)
  console.log('The option is ' + positionX)
  text('My name is' + name, 10, 30)
  text('Score ' + score, 200,100)
if (positionX == 0) {score=score+1}
if (positionY == 0) {score=score+1}

if (moving) {
  positionX = positionX + directionX
  positionY = positionY + directionY
}
 if (positionX==390 || positionX == 0 ){
   directionX=-directionX;
 }
 if (positionY==190 || positionY == 0 ){
  directionY=-directionY;
 }
ellipse (positionX, positionY, 10,10)

rect(10,paddle_position,10,50)
if (keyIsPressed) {
  if(key == 'w'){
    paddle_position = paddle_position -1
  }
}
if (keyIsPressed) {
  if(key == 's'){
    paddle_position = paddle_position +1
  }
}
console.log(' The square is moving ' +moving)

}

