var positionX = 100
var positionY = 100
var name = ' Louis'
var moving = true
var directionX = 5
var directionY = 5
var score = 0
var paddle_positionY = 80
var paddle_positionX = 380

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

rect(paddle_positionX, paddle_positionY, 10, 50)

if (keyIsPressed) {
  if(key == 'w'){
    paddle_positionY = paddle_positionY -1
  }
}
if (keyIsPressed) {
  if(key == 's'){
    paddle_positionY = paddle_positionY +1
  }
}
console.log(' The square is moving ' +moving)

}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 1) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 2) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 3) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 4) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 5) {
 directionX = -directionX}  
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 6) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 7) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 8) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 9) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 10) {
 directionX = -directionX}       
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 11) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 12) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 13) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 14) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 15) {
 directionX = -directionX}  
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 16) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 17) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 18) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 19) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 20) {
 directionX = -directionX}  
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 21) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 22) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 23) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 24) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 25) {
 directionX = -directionX}  
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 26) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 27) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 28) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 29) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 30) {
 directionX = -directionX}    
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 31) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 32) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 33) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 34) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 35) {
 directionX = -directionX}  
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 36) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 37) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 38) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 39) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 40) {
 directionX = -directionX}       

 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 41) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 42) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 43) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 44) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 45) {
 directionX = -directionX}  
 
 if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 46) {
  directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 47) {
    directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 48) {
      directionX = -directionX}

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 49) {
        directionX = -directionX}  

if (positionX == paddle_positionX && paddle_positionY == paddle_positionY + 50) {
 directionX = -directionX}   
     
 if (keyIsPressed) {
  if(key == 'w'){
    paddle_positionY = paddle_positionY -1
  }
}
if (keyIsPressed) {
  if(key == 's'){
    paddle_positionY = paddle_positionY +1
  }
}
 
 
  
  

