var hid = document.getElementById('div1');

// var bub = document.getElementsByClassName('bubbles');

hid.style.visibility = 'hidden'; 
// bub.style.visibility = 'hidden'; 

var audio = new Audio('fix-you1.mp3');
audio.play();

$(document).ready(function(){
  
  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 10;
      
      var color = "background: rgb("+getRandomInt(245,249)+","+getRandomInt(247,254)+","+getRandomInt(113,181)+");";
      
      var sizeInt = getRandomInt(8, 15);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
    }
  }, 1);
});
 
  




const minBubbles = 30;
const maxBubbles = minBubbles * 2;
const minSize = 10;
const maxSize = 28;
const minDelay = 10;
const maxDelay = 28;
const minPos = 0;
const maxPos = 100;
const minBlur = 0;
const maxBlur = 3;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const $bubbles = document.querySelector('[class="bubbles"]');
const totalBubbles = getRandomIntInclusive(minBubbles, maxBubbles);
const bubbleElements = Array(totalBubbles).fill(null).map(() => {
  const bubbleSize = getRandomIntInclusive(minSize, maxSize);
  const bubblePos = getRandomIntInclusive(minPos, maxPos);
  const blurSize = getRandomIntInclusive(minBlur, maxBlur);
  const animationDelay = getRandomIntInclusive(minDelay, maxDelay);
  const $container = document.createElement('div');
  $container.className = 'bubble-container';
  $container.style.left = `${bubblePos}%`;
  $container.style.filter = `blur(${blurSize}px)`;
  $container.style.animationDuration = `${animationDelay}s`;
  const $bubble = document.createElement('div');
  $bubble.className = 'bubble';
  $bubble.style.width = `${bubbleSize}px`;
  $bubble.style.height = `${bubbleSize}px`;
  $container.appendChild($bubble);
  $bubbles.appendChild($container);
  return {
    $container: $container,
    $bubble: $bubble
  };
});

let ready = true;
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', e => {
  mouseX = e.pageX;
  mouseY = e.pageY;
}, false);

function calcDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

const minDistanceMult = 2;
const maxDistanceMult = 4;

function updateElement(elem) {
  const width = parseInt(elem.$bubble.style.width, 10);
  const css = getComputedStyle(elem.$container);
  const computedWidth = parseInt(css.width, 10);
  const x = mouseX - (elem.$container.offsetLeft + computedWidth / 2);
  const y = mouseY - (elem.$container.offsetTop + parseInt(css.height, 10) / 2);
  const distance = calcDistance(x, y);
  if (distance <= computedWidth) {
    elem.$bubble.classList.add('bubbleHover');
    elem.$bubble.classList.remove('minDistance');
    elem.$bubble.classList.remove('maxDistance');
  } else {
    elem.$bubble.classList.remove('bubbleHover');
    if (distance <= width * minDistanceMult) {
      elem.$bubble.classList.add('minDistance');
      elem.$bubble.classList.remove('maxDistance');
    } else if (distance <= width * maxDistanceMult) {
      elem.$bubble.classList.remove('minDistance');
      elem.$bubble.classList.add('maxDistance');
    } else {
      elem.$bubble.classList.remove('minDistance');
      elem.$bubble.classList.remove('maxDistance');
    }
  }
}

function update() {
  if (ready) {
    ready = false;
    bubbleElements.forEach(updateElement);
    ready = true;
  }
}

const interval = 100;
let intervalId = document.hasFocus() && setInterval(update, interval);
document.addEventListener('mouseenter', () => {
  if (!intervalId) {
    update();
    intervalId = setInterval(update, interval);
  }
}, false);
document.addEventListener('mouseleave', () => {
  ready = false;
  intervalId = clearInterval(intervalId);
  bubbleElements.forEach(elem => elem.$bubble.className = 'bubble');
  ready = true;
}, false);





  var ball = document.getElementById("light");
  var field = document.getElementById("wrap");
  var maxX =  field.offsetWidth - ball.offsetWidth;
  var maxY = field.offsetHeight - ball.offsetHeight;
  var rect = ball.getBoundingClientRect();
  var y = rect.top;
  var x = rect.left;
  function newS(){

    var el = document.getElementById("div1");
    var b = document.getElementById('light');
    el.style.visibility = 'visible';
  function fadeIn(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

  fadeIn(el, 3000);

}

  function moveIt(){    

  var randomX= Math.floor(Math.random() * maxX) ;
  var randomY = Math.floor(Math.random() * maxY) ;
  ball.style.left = randomX + 'px';
  ball.style.top = randomY + 'px';
  
}

    window.onmousemove = logMouseMove;
    function logMouseMove(event) {
          
          let e = event|| window.event;  
          var posX = e.clientX;
          var posY = e.clientY;
          let rect = ball.getBoundingClientRect();
          var y = rect.top;
          var x = rect.left;

          console.log(posX,x,posY);
          
          if ((posX <=x+20  && posX>= x-20)  ||(posY <=y+20  && posY>= y-20) ) {

              moveIt();
              
          }

     }

 
setTimeout(newS, 17000);

