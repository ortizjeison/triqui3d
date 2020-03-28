function create_board() {
    //Create Level A
    var A = new Array(4);
    A[1] = new Array(4);
    A[2] = new Array(4);
    A[3] = new Array(4);

    //Create player
    clear_board(A);

    console.log(A[1][3]);
    //console.log(A[3][3]);
    //check_position(A,1)
}

//Set all Board M as 0
function clear_board(M){
    M[1].fill(0,1,4);
    M[2].fill(0,1,4);
    M[3].fill(0,1,4);
}

//Retorna el valor actual de la pos en la matriz M
//Recibe Matriz M y la posición numérica. Ej: A,9
// +---+---+---+
// | 1 | 2 | 3 |
// | 4 | 5 | 6 |
// | 7 | 8 | 9 |
// +---+---+---+
function check_position(M, pos) {
    ans = -1;
    switch (pos) {
        case 1:
            ans = M[1][1];
            console.log(ans);   
            break;
        case 2:
            ans = M[1][2];
            console.log(ans);   
            break;
        case 3:
            ans = M[1][3];
            console.log(ans);   
            break;
        case 4:
            ans = M[2][1];
            console.log(ans);   
            break;
        case 5:
            ans = M[2][2];
            console.log(ans);   
            break;
        case 6:
            ans = M[2][3];
            console.log(ans);   
            break;    
        case 7:
            ans = M[3][1];
            console.log(ans);   
            break;
        case 8:
            ans = M[3][2];
            console.log(ans);   
            break;
        case 9:
            ans = M[3][3];
            console.log(ans);   
            break;         
        default:
            ans = 0;
            break;
    }
    return ans;    
}

//Set Jugada
function update_position(M, pos, player) {
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
}
