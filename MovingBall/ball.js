var positionX=0;
var positionY=0;
var velocity = 50;
var revarse=true
var ball = document.getElementById('ball');
function moveBall(){
    var xmin=0;
    var xmax=500;
    
if(revarse ===true){
    positionX=positionX + velocity;
    ball.style.left=positionX +'px';
    positionY=positionY + velocity;
    ball.style.top=positionY +'px';
    if(positionX>=xmax){
        revarse=false;
    }
}else{
    positionX=positionX - velocity;
    ball.style.left=positionX +'px';
    positionY=positionY - velocity;
    ball.style.top=positionY +'px';
    if(positionX===xmin){
        revarse=true;
    }
}

      
}
setInterval(moveBall, 100)
