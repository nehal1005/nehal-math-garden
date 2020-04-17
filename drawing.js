
const BACKGROUND_COLOR = '#000000'
const LINE_COLOR = '#BCFF00'
const LINE_THICKNESS = 15;


var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;
 


function prepareCanvas() {
  console.log('Preparing Canvas');
  canvas = document.getElementById('my-canvas');
  context = canvas.getContext('2d');

  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0,0, canvas.clientWidth, canvas.clientHeight);

  context.strokeStyle = LINE_COLOR;
  context.lineWidth = LINE_THICKNESS;
  context.lineJoin = 'round';

  var isPainting = false;

  document.addEventListener('mousedown', function (event) {
    console.log('Mouse Pressed');
    isPainting = true;

    currentX = event.clientX - canvas.offsetLeft;
    currentY = event.clientY - canvas.offsetTop;


  });

  document.addEventListener('mousemove', function (event) {
    if (isPainting){
      previousX = currentX;
      currentX = event.clientX - canvas.offsetLeft;

      previousY = currentY;
      currentY = event.clientY - canvas.offsetTop;

      context.beginPath();
      context.moveTo(previousX, previousY);
      context.lineTo(currentX, currentY);
      context.closePath();
      context.stroke();
    }

  });

  document.addEventListener('mouseup', function (event) {
    console.log('Mouse Released');
    isPainting = false;
  });

  canvas.addEventListener('mouseleave', function (event) {
    isPainting = false;
  });


}

function clearCanvas() {
  currentX = 0;
  currentY = 0;
  previousX = 0;
  previousY = 0;

  context.fillRect(0,0, canvas.clientWidth, canvas.clientHeight);


}
