let d_canvas = document.getElementById('d');
let context = d_canvas.getContext('2d');
// let x = document.getElementById('pig');
let x = new Image();
x.src='../../img/0860170001.png'
context.drawImage(x,0,0);
context.drawImage(x,200,100,100,100);
context.drawImage(x,100,0,200,200,200,200,200,200)