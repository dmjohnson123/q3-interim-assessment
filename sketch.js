var numbers = [15, 22, 48, 37];
var habits = ["I", "Like", "Fruits"];
var j = 0;

function setup(){
    createCanvas(600,400);
    background(0);  
}

function draw(){
   if(mouseIsPressed){
    squares(mouseX, mouseY);  
    strokeWeight(4);
    stroke(255);
    
    var x = 0;
    while(x<630){
        fill(146, 19, 50);
        ellipse(x, 255, 25, 25);
        x = x +50;
        
    for(var i = 0; i<4; i++){
    ellipse((i+1)*100,200,numbers[i], numbers[i]);    
    } 
    
    fill(233);
    textSize(50);
    text(habits[j], 230, 150);
    }
    
    function mousePressed(){
        j++;
        if(j==habits.length){
            j=0;
        }
    }
    
    for(var x = 0; x < 630; x= x +50){
        fill(55, 135, 277);
        ellipse(x, 100, 25, 25);
    }
    }
}

function squares(x,y){
    noStroke();
    fill(178, 234, 36);
    ellipse(mouseX, mouseY, 100, 100);
}