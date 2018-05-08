function setup(){
    createCanvas(500,500);
}

function mouseDragged(){
    // Bonus - shape gets random fill color when created
    // randomFill();

    // Bonus - random shape every time created
    // randomShape();

    ellipse(mouseX,mouseY, random(20),random(20));
}

// Bonus - random shape every time created
function randomShape(){
    const pick = random(3);
    if( pick < 1 ){
        rect(mouseX,mouseY, random(20),random(20));
    }else if( pick < 2 ){
        ellipse(mouseX,mouseY, random(20),random(20));
    }else{
        triangle(mouseX,mouseY, mouseX + random(20), mouseY + random(20),mouseX - random(20), mouseY - random(20));
    }
}

// Bonus - shape gets random fill color when created
function randomFill(){
    fill(random(255),random(255),random(255));
}


// Bonus - on mouse click background changes to a random color
// function mousePressed(){
//     background(random(255),random(255),random(255));
// }
