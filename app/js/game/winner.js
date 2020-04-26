
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

function check_winnerH(M) {
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

function check_winnerV(M) {
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

function check_winnerD(M) {

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