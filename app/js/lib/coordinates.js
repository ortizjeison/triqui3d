function place_cilindro(geo, Point, Board) {
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
            break;
        case 'B':
            geo.position.y=(altura+2*separacion)+delta;
            move_ficha(geo,altura+2*separacion);
            break;
        case 'C':
            geo.position.y=(altura+4*separacion)+delta;
            move_ficha(geo,altura+4*separacion);
            break;
        default:
            console.log("Revise el board please");
            break;
    }
}

function move_ficha(geo, dest) {
    
    size=0;
    geo.scale.set(size,size,size);
    delta=0.1;

    function loop(){
        if(geo.position.y>=dest){
            geo.position.y-=delta;
            size+=delta/4;
            geo.scale.set(size,size,size);
            requestAnimationFrame(loop);    
        }
    }
    loop();
};

//Función de rotar 3 mesh.
function rotate_figura(g1,g2,g3){
    delta=0.1;
    function loop(){
        g1.rotation.y +=delta;
        g2.rotation.y +=delta;
        g3.rotation.y +=delta;
        requestAnimationFrame(loop);
    }
    loop();
}