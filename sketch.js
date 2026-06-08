let ball = {
  x: 0, y: 0,
  speedX: 0, speedY: 0,
  w: 20, h: 20
};

let paddles= [
    { x: 10,  y: 200, w: 10, h: 80, speed: 4, upKey: 38, downKey:  40},
    { x: 780, y: 200, w: 10, h: 80, speed: 4, upKey: 87, downKey: 83}
  ];

function setup() {
  createCanvas(800, 400);
  resetBall();
}

function draw() {
  drawStage();
  drawPaddle();
  moveBall();
  movePaddle(paddles)
  textSize(30);
  text(keyCode, 200, 200)
}

function drawStage() {
  background(0);
  stroke(255);
  strokeWeight(3);
  line(width/2, 0, width/2, height);
  strokeWeight(1);
  fill("gold");
  ellipse(ball.x, ball.y, ball.w, ball.h)
}

function resetBall() {
  ball.x = width / 2;
  ball.y = height / 2;
  ball.speedX = random([-3, 3]);
  ball.speedY = random(-3, 3);
}



function drawPaddle() {
  fill(255);
  for (let i = 0; i < paddles.length; i++) {
    let p = paddles[i];
    rect(p.x, p.y, p.w, p.h, 4);
  }
}
function movePaddle(listOfPaddles) {

  for (let i = 0; i < listOfPaddles.length; i++) {
    let p = listOfPaddles[i];
    
    if(keyIsDown(p.upKey)){
      p.y=p.y-p.speed;
    }else if(keyIsDown(p.downKey)){
      p.y=p.y+p.speed;
    }
       //restrain within the boundaries
    if(p.y<0){
      p.y=0;
    }else if (p.y>height-p.h){
      p.y=height-p.h;
    }
  }
} 

function moveBall() {
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;

  if (ball.y < 0 || ball.y > height) {
    ball.speedY = -ball.speedY;
  }

  if (ball.x < -ball.w || ball.x > width + ball.w) {
    resetBall();
  }
}