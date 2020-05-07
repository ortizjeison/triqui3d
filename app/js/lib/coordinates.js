function place(geo, Point, Board) {
    ans = -1;
    switch (Point) {
        case 1:
            geo.position.x = -3;
            geo.position.z = -3;
            ans = -3;
            //console.log(ans);   
            break;
        case 2:
            geo.position.x = 0;
            geo.position.z = -3;
            ans = 0;
            //console.log(ans);   
            break;
        case 3:
            geo.position.x = 3;
            geo.position.z = -3;
            ans = 3;
            //console.log(ans);   
            break;
        case 4:
            geo.position.x = -3;
            geo.position.z = 0;
            ans = -3;
            //console.log(ans);   
            break;
        case 5:
            geo.position.x = 0;
            geo.position.z = 0;
            ans = 0;
            //console.log(ans);   
            break;
        case 6:
            geo.position.x = 3;
            geo.position.z = 0;
            ans = 3;
            //console.log(ans);   
            break;    
        case 7:
            geo.position.x = -3;
            geo.position.z = 3;
            ans = -3;
            //console.log(ans);   
            break;
        case 8:
            geo.position.x = 0;
            geo.position.z = 3;
            ans = 0;
            //console.log(ans);   
            break;
        case 9:
            geo.position.x = 3;
            geo.position.z = 3;
            ans = 3;
            //console.log(ans);   
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
            console.log("Board A");
            break;
        case 'B':
            geo.position.y=altura+2*separacion;
            console.log("Board B");
            break;
        case 'C':
            geo.position.y=altura+3*separacion;
            console.log("Board C");
            break;
        default:
            console.log("Revise el board please");
            break;
    }
}