//Crear Boards
var A = new Array(4);
A[1] = new Array(4);
A[2] = new Array(4);
A[3] = new Array(4);

var B= new Array(4);
B[1] = new Array(4);
B[2] = new Array(4);
B[3] = new Array(4);

var C = new Array(4);
C[1] = new Array(4);
C[2] = new Array(4);
C[3] = new Array(4);


function create_board() {
    //Limpiar boards
    clear_board(A);
    clear_board(B);
    clear_board(C);
}

//Set todas las posiciones del Board M = 0
function clear_board(M){
    M[1].fill(0,1,4);
    M[2].fill(0,1,4);
    M[3].fill(0,1,4);
    //console.log("listo");   
}

//Retorna el valor actual de la pos en la matriz M
//Recibe Matriz M y la posición numérica. Ej: A,9
//Retorna el jugador
//      (1) (2) (3)
//     +---+---+---+
// (1) | 1 | 2 | 3 |
// (2) | 4 | 5 | 6 |
// (3) | 7 | 8 | 9 |
//     +---+---+---+
function check_position(M, pos) {
    ans = -1;
    switch (pos) {
        case 1:
            ans = M[1][1];
            //console.log(ans);   
            break;
        case 2:
            ans = M[1][2];
            //console.log(ans);   
            break;
        case 3:
            ans = M[1][3];
            //console.log(ans);   
            break;
        case 4:
            ans = M[2][1];
            //console.log(ans);   
            break;
        case 5:
            ans = M[2][2];
            //console.log(ans);   
            break;
        case 6:
            ans = M[2][3];
            //console.log(ans);   
            break;    
        case 7:
            ans = M[3][1];
            //console.log(ans);   
            break;
        case 8:
            ans = M[3][2];
            //console.log(ans);   
            break;
        case 9:
            ans = M[3][3];
            //console.log(ans);   
            break;         
        default:
            ans = 0;
            break;
    }
    return ans;    
}

//Set Jugada, recibe M, pos, y el jugador
function move(M, pos, player) {
    if (check_position(M,pos)==0) {
        switch (pos) {
            case 1:
                M[1][1] = player;   
                break;
            case 2:
                M[1][2] = player;   
                break;
            case 3:
                M[1][3] = player;   
                break;
            case 4:
                M[2][1] = player;   
                break;
            case 5:
                M[2][2] = player;   
                break;
            case 6:
                M[2][3] = player;   
                break;    
            case 7:
                M[3][1] = player;   
                break;
            case 8:
                M[3][2] = player;   
                break;
            case 9:
                M[3][3] = player;   
                break;         
            default:
                -1;
                break;
        }
    } else {
        console.log("La casilla está llena beibi");
    }
    print_board(M);
}

//Imprimir Tablero M en consola.
function print_board(M) {
    console.log("| "+check_position(M, 1)+" | "+check_position(M, 2)+" | "+check_position(M, 3)+" |");
    console.log("| "+check_position(M, 4)+" | "+check_position(M, 5)+" | "+check_position(M, 6)+" |");
    console.log("| "+check_position(M, 7)+" | "+check_position(M, 8)+" | "+check_position(M, 9)+" |");
}

function print_boards() {
    console.log("A:");
    console.log("| "+check_position(A, 1)+" | "+check_position(A, 2)+" | "+check_position(A, 3)+" |");
    console.log("| "+check_position(A, 4)+" | "+check_position(A, 5)+" | "+check_position(A, 6)+" |");
    console.log("| "+check_position(A, 7)+" | "+check_position(A, 8)+" | "+check_position(A, 9)+" |");
    console.log("B:");
    console.log("| "+check_position(B, 1)+" | "+check_position(B, 2)+" | "+check_position(B, 3)+" |");
    console.log("| "+check_position(B, 4)+" | "+check_position(B, 5)+" | "+check_position(B, 6)+" |");
    console.log("| "+check_position(B, 7)+" | "+check_position(B, 8)+" | "+check_position(B, 9)+" |");
    console.log("C:");
    console.log("| "+check_position(C, 1)+" | "+check_position(C, 2)+" | "+check_position(C, 3)+" |");
    console.log("| "+check_position(C, 4)+" | "+check_position(C, 5)+" | "+check_position(C, 6)+" |");
    console.log("| "+check_position(C, 7)+" | "+check_position(C, 8)+" | "+check_position(C, 9)+" |");
}

//CHECK WINNER
//check_winnerZ : Si hay ganador en el eje Z (No recibe parámetros)
//Check_winnerH(M): Si hay ganador horizontal en el Board M.
//Check_winnerV(M): Si hay ganador Vertical en el Board M.
//Check_winnerD(M): Si hay ganador Diagonal en el Board M.

function check_winnerZ() {
    ans = -1;
    for(i=1;i<10;i++){
        //console.log(i);
        //Eje Z
        if(check_position(A,i)==check_position(B,i) && check_position(B,i)==check_position(C,i) && check_position(C,i)!=0){
            ans = check_position(A,i);
            console.log("Ganó alguien en el eje Z="+i);
        }
    }
    console.log("ans = "+ans);
    return ans;
}

function check_winnerH(M) {
    if(check_position(M,1)==check_position(M,2) && check_position(M,2)==check_position(M,3) && check_position(M,1)!=0){
        console.log("Ganó "+ check_position(M,1)+" en (1)");
        return check_position(M,1);
    }
    if(check_position(M,4)==check_position(M,5) && check_position(M,5)==check_position(M,6) && check_position(M,4)!=0){
        console.log("Ganó "+ check_position(M,4)+" en (2)");
        return check_position(M,4);
    }
    if(check_position(M,7)==check_position(M,8) && check_position(M,8)==check_position(M,9) && check_position(M,7)!=0){
        console.log("Ganó "+ check_position(M,7)+" en (3)");
        return check_position(M,7);
    }
    return -1;
}

function check_winnerV(M) {
    if(check_position(M,1)==check_position(M,4) && check_position(M,4)==check_position(M,7) && check_position(M,7)!=0){
        console.log("Ganó "+ check_position(M,1)+" en (1)");
        return check_position(M,1);
    }
    if(check_position(M,2)==check_position(M,5) && check_position(M,5)==check_position(M,8) && check_position(M,8)!=0){
        console.log("Ganó "+ check_position(M,2)+" en (2)");
        return check_position(M,2);
    }
    if(check_position(M,3)==check_position(M,6) && check_position(M,6)==check_position(M,9) && check_position(M,9)!=0){
        console.log("Ganó "+ check_position(M,3)+" en (3)");
        return check_position(M,3);
    }
    return -1;
}

function check_winnerD(M) {

    if(check_position(M,1)==check_position(M,5) && check_position(M,5)==check_position(M,9) && check_position(M,1)!=0){
        console.log(check_position(M,1)+" Diagonal Principal");
        return check_position(M,1);
    }
    if(check_position(M,3)==check_position(M,5) && check_position(M,5)==check_position(M,7) && check_position(M,3)!=0){
        console.log(check_position(M,3)+" Diagonal Secundaria");
        return check_position(M,3);
    }
    return -1;
}