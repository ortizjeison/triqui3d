function place_cilindro(geo, Point, Board) {
    ans = -1;
    switch (Point) {
        case 1:
            geo.position.x = -3;
            geo.position.z = -3;   
            break;
        case 2:
            geo.position.x = 0;
            geo.position.z = -3;  
            break;
        case 3:
            geo.position.x = 3;
            geo.position.z = -3;  
            break;
        case 4:
            geo.position.x = -3;
            geo.position.z = 0;   
            break;
        case 5:
            geo.position.x = 0;
            geo.position.z = 0;  
            break;
        case 6:
            geo.position.x = 3;
            geo.position.z = 0;  
            break;    
        case 7:
            geo.position.x = -3;
            geo.position.z = 3;   
            break;
        case 8:
            geo.position.x = 0;
            geo.position.z = 3;  
            break;
        case 9:
            geo.position.x = 3;
            geo.position.z = 3;  
            break;         
        default:
            ans = -1;
            console.log("Error, revise el punto");
            break;
    }

    altura = 0.2;
    separacion = 3;
    switch (Board) {
        case 'A':
            geo.position.y=altura;
            //console.log("Board A");
            break;
        case 'B':
            geo.position.y=altura+2*separacion;
            //console.log("Board B");
            break;
        case 'C':
            geo.position.y=altura+4*separacion;
            //console.log("Board C");
            break;
        default:
            console.log("Revise el board please");
            break;
    }
}

//Place Fichas
function place_ficha(geo, Point, Board) {
    scene.add(geo);
    ans = -1;
    switch (Point) {
        case 1:
            geo.position.x = -3;
            geo.position.z = -3;   
            break;
        case 2:
            geo.position.x = 0;
            geo.position.z = -3;  
            break;
        case 3:
            geo.position.x = 3;
            geo.position.z = -3;  
            break;
        case 4:
            geo.position.x = -3;
            geo.position.z = 0;   
            break;
        case 5:
            geo.position.x = 0;
            geo.position.z = 0;  
            break;
        case 6:
            geo.position.x = 3;
            geo.position.z = 0;  
            break;    
        case 7:
            geo.position.x = -3;
            geo.position.z = 3;   
            break;
        case 8:
            geo.position.x = 0;
            geo.position.z = 3;  
            break;
        case 9:
            geo.position.x = 3;
            geo.position.z = 3;  
            break;         
        default:
            ans = -1;
            console.log("Error, revise el punto");
            break;
    }

    altura = 0.2;
    delta = 4;
    separacion = 3;
    switch (Board) {
        case 'A':
            geo.position.y=altura+delta;
            move_ficha(geo,altura);
            //console.log("Board A");
            break;
        case 'B':
            geo.position.y=(altura+2*separacion)+delta;
            move_ficha(geo,altura+2*separacion);
            //console.log("Board B");
            break;
        case 'C':
            geo.position.y=(altura+4*separacion)+delta;
            move_ficha(geo,altura+4*separacion);
            //geo.position.y=altura+4*separacion;
            //console.log("Board C");
            break;
        default:
            console.log("Revise el board please");
            break;
    }
}

function move_ficha(geo, dest) {
    //console.log(geo.position.y);
    //console.log(dest);
    size=0;
    geo.scale.set(size,size,size);
    delta=0.1;

    function loop(){
        if(geo.position.y>=dest){
            geo.position.y-=delta;
            size+=delta/4;
            geo.scale.set(size,size,size);
            
            //console.log(geo.position.y);
            //console.log(dest);
            requestAnimationFrame(loop);    
        }
    }
    loop();
};

function rotate_figura(g1,g2,g3){
    function loop(){
        g1.rotation.y +=0.1;
        g2.rotation.y +=0.1;
        g3.rotation.y +=0.1;
        requestAnimationFrame(loop);
    }
    loop();
}