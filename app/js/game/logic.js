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

start();
function start() {

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
//Recibe Matriz M y la posición numérica. 

//Ej: A,9
//Retorna el jugador
//      (1) (2) (3)
//A=   +---+---+---+
// (1) | 1 | 2 | 3  |
// (2) | 4 | 5 | 6  |
// (3) | 7 | 8 | 9* |
//     +---+---+---+

//Recibe un id de ficha
//retorna el jugador al que pertenece.
function id2p(fichaid){
    if(fichaid>=first1 && fichaid<=last1){
        return 1;
    }else if(fichaid>=first2 && fichaid<=last2){
        return 2;
    }else{
        console.log("id fuera de los rangos");
        return -1;
    }
}

//Recibe id y devuelve el respectivo mesh
function getmesh(f) {
    switch (f) {
        case 43:
            return fa1;
            break;
        case 44:
            return fa2;
            break;
        case 45:
            return fa3;
            break;
        case 46:
            return fa4;
            break;
        case 47:
            return fa5;
            break;
        case 48:
            return fa6;
            break;
        case 49:
            return fa7;
            break;
        case 50:
            return fa8;
            break;
        case 51:
            return fa9;
            break;
        //Player 2
        case 52:
            return fb1;
            break;
        case 53:
            return fb2;
            break;
        case 54:
            return fb3;
            break;
        case 55:
            return fb4;
            break;
        case 56:
            return fb5;
            break;
        case 57:
            return fb6;
            break;
        case 58:
            return fb7;
            break;
        case 59:
            return fb8;
            break;
        case 60:
            return fb9;
            break;
        default:
            break;
    }
}

//Recibe 3 ids de ficha y las pone a rotar.
function rotate(f1,f2,f3){
    rotate_figura(getmesh(f1),getmesh(f2),getmesh(f3));
}

function check(Board, pos) {
    switch (Board) {
        case 'A':
            M=A;
            break;
        case 'B':
            M=B;
            break;            
        case 'C':
            M=C;
            break;
        default:
            break;
    }

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
function move(Board, pos, ficha_id) {

    switch (Board) {
        case 'A':
            M=A;
            break;
        case 'B':
            M=B;
            break;            
        case 'C':
            M=C;
            break;
        default:
            break;
    }


    if (check(M,pos)==0) {
        switch (pos) {
            case 1:
                M[1][1] = ficha_id;
                ans=true;   
                break;
            case 2:
                M[1][2] = ficha_id;
                ans=true;   
                break;
            case 3:
                M[1][3] = ficha_id;
                ans=true;   
                break;
            case 4:
                M[2][1] = ficha_id;
                ans=true;   
                break;
            case 5:
                M[2][2] = ficha_id;
                ans=true;   
                break;
            case 6:
                M[2][3] = ficha_id;
                ans=true;   
                break;    
            case 7:
                M[3][1] = ficha_id;
                ans=true;   
                break;
            case 8:
                M[3][2] = ficha_id;
                ans=true;   
                break;
            case 9:
                M[3][3] = ficha_id;
                ans=true;   
                break;         
            default:
                -1;
                break;
        }
    } else {
        ans=false;
        console.log("La casilla está llena beibi");
        return ans;
    }
    print_board(M);
}

//Imprimir Tablero M en consola.
function print_board(M) {
    console.log("| "+check(M, 1)+" | "+check(M, 2)+" | "+check(M, 3)+" |");
    console.log("| "+check(M, 4)+" | "+check(M, 5)+" | "+check(M, 6)+" |");
    console.log("| "+check(M, 7)+" | "+check(M, 8)+" | "+check(M, 9)+" |");
}

function print_boards() {
    console.log("A:");
    console.log("| "+check(A, 1)+" | "+check(A, 2)+" | "+check(A, 3)+" |");
    console.log("| "+check(A, 4)+" | "+check(A, 5)+" | "+check(A, 6)+" |");
    console.log("| "+check(A, 7)+" | "+check(A, 8)+" | "+check(A, 9)+" |");
    console.log("B:");
    console.log("| "+check(B, 1)+" | "+check(B, 2)+" | "+check(B, 3)+" |");
    console.log("| "+check(B, 4)+" | "+check(B, 5)+" | "+check(B, 6)+" |");
    console.log("| "+check(B, 7)+" | "+check(B, 8)+" | "+check(B, 9)+" |");
    console.log("C:");
    console.log("| "+check(C, 1)+" | "+check(C, 2)+" | "+check(C, 3)+" |");
    console.log("| "+check(C, 4)+" | "+check(C, 5)+" | "+check(C, 6)+" |");
    console.log("| "+check(C, 7)+" | "+check(C, 8)+" | "+check(C, 9)+" |");
}