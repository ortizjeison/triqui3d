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
function move(Board, pos, player) {

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
                M[1][1] = player;
                ans=true;   
                break;
            case 2:
                M[1][2] = player;
                ans=true;   
                break;
            case 3:
                M[1][3] = player;
                ans=true;   
                break;
            case 4:
                M[2][1] = player;
                ans=true;   
                break;
            case 5:
                M[2][2] = player;
                ans=true;   
                break;
            case 6:
                M[2][3] = player;
                ans=true;   
                break;    
            case 7:
                M[3][1] = player;
                ans=true;   
                break;
            case 8:
                M[3][2] = player;
                ans=true;   
                break;
            case 9:
                M[3][3] = player;
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