
//CHECK WINNER
//CheckWinnerZ : Si hay ganador en el eje Z (No recibe parámetros)
//CheckWinnerH(M): Si hay ganador horizontal en el Board M.
//CheckWinnerV(M): Si hay ganador Vertical en el Board M.
//CheckWinnerD(M): Si hay ganador Diagonal en el Board M.

function CheckWinnerH(M) {
    if(check(M,1)==check(M,2) && check(M,2)==check(M,3) && check(M,1)!=0){
        console.log("Ganó "+ check(M,1)+" en (1)");
        return check(M,1);
    }
    if(check(M,4)==check(M,5) && check(M,5)==check(M,6) && check(M,4)!=0){
        console.log("Ganó "+ check(M,4)+" en (2)");
        return check(M,4);
    }
    if(check(M,7)==check(M,8) && check(M,8)==check(M,9) && check(M,7)!=0){
        console.log("Ganó "+ check(M,7)+" en (3)");
        return check(M,7);
    }
    return -1;
}

function CheckWinnerV(M) {
    if(check(M,1)==check(M,4) && check(M,4)==check(M,7) && check(M,7)!=0){
        console.log("Ganó "+ check(M,1)+" en (1)");
        return check(M,1);
    }
    if(check(M,2)==check(M,5) && check(M,5)==check(M,8) && check(M,8)!=0){
        console.log("Ganó "+ check(M,2)+" en (2)");
        return check(M,2);
    }
    if(check(M,3)==check(M,6) && check(M,6)==check(M,9) && check(M,9)!=0){
        console.log("Ganó "+ check(M,3)+" en (3)");
        return check(M,3);
    }
    return -1;
}

function CheckWinnerD(M) {

    if(check(M,1)==check(M,5) && check(M,5)==check(M,9) && check(M,1)!=0){
        console.log(check(M,1)+" Diagonal Principal");
        return check(M,1);
    }
    if(check(M,3)==check(M,5) && check(M,5)==check(M,7) && check(M,3)!=0){
        console.log("Ganó "+check(M,3)+" Diagonal Secundaria");
        return check(M,3);
    }
    return -1;
}

//Eje Z beibi

function CheckWinnerZ() {
    ans = -1;
    for(i=1;i<10;i++){
        if(check(A,i)==check(B,i) && check(B,i)==check(C,i) && check(A,i)!=0){
            ans = check(A,i);
            console.log("Ganó "+ans+" en el eje Z ("+i+")");
        }
    }
    if(ans==0){
        ans=-1;
        console.log("Meeeen, no ha ganado nadieee");
    }

    return ans;
}

function CheckWinnerVZ() {
    if(check(A,1)==check(B,4) && check(B,4)==check(C,7) && check(C,7)!=0){
        console.log("Ganó "+ check(A,1)+" en (1)");
        return check(A,1);
    }
    if(check(A,2)==check(B,5) && check(B,5)==check(C,8) && check(C,8)!=0){
        console.log("Ganó "+ check(A,2)+" en (2)");
        return check(A,2);
    }
    if(check(A,3)==check(B,6) && check(B,6)==check(C,9) && check(C,9)!=0){
        console.log("Ganó "+ check(A,3)+" en (3)");
        return check(A,3);
    }
    return -1;
}

function CheckWinnerHZ() {
    if(check(A,1)==check(B,2) && check(B,2)==check(C,3) && check(A,1)!=0){
        console.log("Ganó "+ check(A,1)+" en (1)");
        return check(A,1);
    }
    if(check(A,4)==check(B,5) && check(B,5)==check(C,6) && check(A,4)!=0){
        console.log("Ganó "+ check(A,4)+" en (2)");
        return check(A,4);
    }
    if(check(A,7)==check(B,8) && check(B,8)==check(C,9) && check(A,7)!=0){
        console.log("Ganó "+ check(A,7)+" en (3)");
        return check(A,7);
    }
    return -1;
}

function CheckWinnerDZ() {

    if(check(A,1)==check(B,5) && check(B,5)==check(C,9) && check(A,1)!=0){
        console.log("Ganó "+check(A,1)+" Diagonal Principal");
        return check(A,1);
    }
    if(check(A,3)==check(B,5) && check(B,5)==check(C,7) && check(A,3)!=0){
        console.log("Ganó "+check(A,3)+" Diagonal Secundaria");
        return check(A,3);
    }
    return -1;
}