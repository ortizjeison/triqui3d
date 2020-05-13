
//CHECK WINNER
//CheckWinnerH(M): Si hay ganador horizontal en el Board M.
//CheckWinnerV(M): Si hay ganador Vertical en el Board M.
//CheckWinnerD(M): Si hay ganador Diagonal en el Board M.
//CheckWinnerZ : Si hay ganador en el eje Z (No recibe parámetros)
//CheckWinnerHZ : Si hay ganador en alguna horizontal del eje Z (No recibe parámetros)
//CheckWinnerVZ : Si hay ganador en alguna vertical del eje Z (No recibe parámetros)
//CheckWinnerDZ : Si hay ganador en alguna diagonal del eje Z (No recibe parámetros)

function CheckWinnerH(M) {
    if(id2p(check(M,1))==id2p(check(M,2)) && id2p(check(M,2))==id2p(check(M,3)) && id2p(check(M,1))!=0){
        console.log("Ganó "+ id2p(check(M,1))+" en (1)");
        return id2p(check(M,1));
    }
    if(id2p(check(M,4))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,6)) && id2p(check(M,4))!=0){
        console.log("Ganó "+ id2p(check(M,4))+" en (2)");
        return id2p(id2p(check(M,4)));
    }
    if(id2p(check(M,7))==id2p(check(M,8)) && id2p(check(M,8))==id2p(check(M,9)) && id2p(check(M,7))!=0){
        console.log("Ganó "+ id2p(check(M,7))+" en (3)");
        return id2p(id2p(check(M,7)));
    }
    return -1;
}

function CheckWinnerV(M) {
    if(id2p(check(M,1))==id2p(check(M,4)) && id2p(check(M,4))==id2p(check(M,7)) && id2p(check(M,7))!=0){
        console.log("Ganó "+ id2p(check(M,1))+" en (1)");
        return id2p(check(M,1));
    }
    if(id2p(check(M,2))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,8)) && id2p(check(M,8))!=0){
        console.log("Ganó "+ id2p(check(M,2))+" en (2)");
        return id2p(check(M,2));
    }
    if(id2p(check(M,3))==id2p(check(M,6)) && id2p(check(M,6))==id2p(check(M,9)) && id2p(check(M,9))!=0){
        console.log("Ganó "+ id2p(check(M,3))+" en (3)");
        return id2p(check(M,3));
    }
    return -1;
}

function CheckWinnerD(M) {

    if(id2p(check(M,1))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,9)) && id2p(check(M,1))!=0){
        console.log(id2p(check(M,1))+" Diagonal Principal");
        return id2p(check(M,1));
    }
    if(id2p(check(M,3))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,7)) && id2p(check(M,3))!=0){
        console.log("Ganó "+id2p(check(M,3))+" Diagonal Secundaria");
        return id2p(check(M,3));
    }
    return -1;
}

//Eje Z beibi

function CheckWinnerZ() {
    ans = -1;
    for(i=1;i<10;i++){
        if(id2p(check('A',i))==id2p(check('B',i)) && id2p(check('B',i))==id2p(check('C',i)) && id2p(check('A',i))!=0){
            console.log("Ganó "+ id2p(check('A',i)) +" en el eje Z ("+i+")");
            return id2p(check('A',i));
        }
    }
    if(ans==0){
        ans=-1;
        console.log("Meeeen, no ha ganado nadieee");
    }

    return ans;
}

function CheckWinnerVZ() {
    if(id2p(check('A',1))==id2p(check('B',4)) && id2p(check('B',4))==id2p(check('C',7)) && id2p(check('C',7))!=0){
        console.log("Ganó "+ id2p(check('A',1))+" en (1)");
        return id2p(check('A',1));
    }
    if(id2p(check('A',2))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',8)) && id2p(check('C',8))!=0){
        console.log("Ganó "+ id2p(check('A',2))+" en (2)");
        return id2p(check('A',2));
    }
    if(id2p(check('A',3))==id2p(check('B',6)) && id2p(check('B',6))==id2p(check('C',9)) && id2p(check('C',9))!=0){
        console.log("Ganó "+ id2p(check('A',3))+" en (3)");
        return id2p(check('A',3));
    }
    return -1;
}

function CheckWinnerHZ() {
    if(id2p(check('A',1))==id2p(check('B',2)) && id2p(check('B',2))==id2p(check('C',3)) && id2p(check('A',1))!=0){
        console.log("Ganó "+ id2p(check('A',1))+" en (1)");
        return id2p(check('A',1));
    }
    if(id2p(check('A',4))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',6)) && id2p(check('A',4))!=0){
        console.log("Ganó "+ id2p(check('A',4))+" en (2)");
        return id2p(check('A',4));
    }
    if(id2p(check('A',7))==id2p(check('B',8)) && id2p(check('B',8))==id2p(check('C',9)) && id2p(check('A',7))!=0){
        console.log("Ganó "+ id2p(check('A',7))+" en (3)");
        return id2p(check('A',7));
    }
    return -1;
}

function CheckWinnerDZ() {

    if(id2p(check('A',1))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',9)) && id2p(check('A',1))!=0){
        console.log("Ganó "+id2p(check('A',1))+" Diagonal Principal");
        return id2p(check('A',1));
    }
    if(id2p(check('A',3))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',7)) && id2p(check('A',3))!=0){
        console.log("Ganó "+id2p(check('A',3))+" Diagonal Secundaria");
        return id2p(check('A',3));
    }
    return -1;
}