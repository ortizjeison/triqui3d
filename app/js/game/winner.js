
//CHECK WINNER
//CheckWinnerH(M): Si hay ganador horizontal en el Board M.
//CheckWinnerV(M): Si hay ganador Vertical en el Board M.
//CheckWinnerD(M): Si hay ganador Diagonal en el Board M.
//CheckWinnerZ : Si hay ganador en el eje Z (No recibe parámetros)
//CheckWinnerHZ : Si hay ganador en alguna horizontal del eje Z (No recibe parámetros)
//CheckWinnerVZ : Si hay ganador en alguna vertical del eje Z (No recibe parámetros)
//CheckWinnerDZ : Si hay ganador en alguna diagonal del eje Z (No recibe parámetros)

function winner() {
    ans = false;
    if(CheckWinnerH('A')!=-1 || CheckWinnerH('B')!=-1 || CheckWinnerH('C')!=-1){
        alert("ganó alguien H");        
    }
    if(CheckWinnerV('A')!=-1 || CheckWinnerV('B')!=-1 || CheckWinnerV('C')!=-1){
        alert("ganó alguien V");        
    }
    if(CheckWinnerD('A')!=-1 || CheckWinnerD('B')!=-1 || CheckWinnerD('C')!=-1){
        alert("ganó alguien D");        
    }
    if (CheckWinnerZ()!=-1) {
        alert("Ganó el jugador "+ CheckWinnerZ()+ " (Z)");
    }

    if (CheckWinnerVZ()!=-1) {
        alert("Ganó el jugador "+ CheckWinnerVZ()+ " (VZ)");
    }

    if (CheckWinnerHZ()!=-1) {
        alert("Ganó el jugador "+ CheckWinnerHZ()+ " (HZ)");
    }
    if (CheckWinnerDZ()!=-1) {
        alert("Ganó el jugador "+ CheckWinnerDZ()+ " (DZ)");
    }

    
    return ans;
}

function CheckWinnerH(M) {
    if(id2p(check(M,1))==id2p(check(M,2)) && id2p(check(M,2))==id2p(check(M,3)) && id2p(check(M,1))!=0){
        
        console.log("Ganó "+ id2p(check(M,1))+" en (1)");        
        rotate(check(M,1),check(M,2),check(M,3));
        return id2p(check(M,1));
    }
    if(id2p(check(M,4))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,6)) && id2p(check(M,4))!=0){
        
        console.log("Ganó "+ id2p(check(M,4))+" en (2)");
        rotate(check(M,4),check(M,5),check(M,6));
        return id2p(check(M,4));
    }
    if(id2p(check(M,7))==id2p(check(M,8)) && id2p(check(M,8))==id2p(check(M,9)) && id2p(check(M,7))!=0){
        
        console.log("Ganó "+ id2p(check(M,7))+" en (3)");
        rotate(check(M,7),check(M,8),check(M,9));
        return id2p(check(M,7));
    }
    return -1;
}

function CheckWinnerV(M) {
    if(id2p(check(M,1))==id2p(check(M,4)) && id2p(check(M,4))==id2p(check(M,7)) && id2p(check(M,7))!=0){
        
        console.log("Ganó "+ id2p(check(M,1))+" en (1)");
        rotate(check(M,1),check(M,4),check(M,7));
        return id2p(check(M,1));
    }
    if(id2p(check(M,2))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,8)) && id2p(check(M,8))!=0){
        
        console.log("Ganó "+ id2p(check(M,2))+" en (2)");
        rotate(check(M,2),check(M,5),check(M,8));
        return id2p(check(M,2));
    }
    if(id2p(check(M,3))==id2p(check(M,6)) && id2p(check(M,6))==id2p(check(M,9)) && id2p(check(M,9))!=0){
        
        console.log("Ganó "+ id2p(check(M,3))+" en (3)");
        rotate(check(M,3),check(M,6),check(M,9));
        return id2p(check(M,3));
    }
    return -1;
}

function CheckWinnerD(M) {

    if(id2p(check(M,1))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,9)) && id2p(check(M,1))!=0){
        
        console.log("Ganó "+id2p(check(M,1))+" Diagonal Principal");
        rotate(check(M,1),check(M,5),check(M,9));
        return id2p(check(M,1));
    }
    if(id2p(check(M,3))==id2p(check(M,5)) && id2p(check(M,5))==id2p(check(M,7)) && id2p(check(M,3))!=0){
        
        console.log("Ganó "+id2p(check(M,3))+" Diagonal Secundaria");
        rotate(check(M,3),check(M,5),check(M,7));
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
            rotate(check('A',i),check('B',i),check('C',i));
            ans = id2p(check('A',i));
            return ans; 
        }else{
            ans=-1;
        }
    }
    return ans;
}

function CheckWinnerVZ() {
    ans = -1;
    console.log("entramos 0");
    console.log(id2p(check('A',1)));
    console.log(id2p(check('B',4)));
    console.log(id2p(check('C',7)));
    
//Columna 1
    if(id2p(check('A',1))==id2p(check('B',4)) && id2p(check('B',4))==id2p(check('C',7)) && id2p(check('A',1))!=0){
        console.log("entramos 1");

        rotate(check('A',1),check('B',4),check('C',7));
        console.log("Ganó "+ id2p(check('A',1))+" en (1)");
        ans = id2p(check('A',1));
        return ans;
    }else{
        ans=-1;
    }

    if(id2p(check('A',7))==id2p(check('B',4)) && id2p(check('B',4))==id2p(check('C',1)) && id2p(check('A',7))!=0){
        console.log("entramos 1");

        rotate(check('A',7),check('B',4),check('C',1));
        console.log("Ganó "+ id2p(check('A',7))+" en (1)");
        ans = id2p(check('A',7));
        return ans;
    }else{
        ans=-1;
    }

//Columna 2
    if(id2p(check('A',2))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',8)) && id2p(check('A',2))!=0){
        console.log("entramos 2");
        rotate(check('A',2),check('B',5),check('C',8));
        console.log("Ganó "+ id2p(check('A',2))+" en (2)");
        ans = id2p(check('A',2));
        return ans;
    }else{
        ans=-1;
    }

    if(id2p(check('A',8))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',2)) && id2p(check('A',8))!=0){
        console.log("entramos 2");
        rotate(check('A',8),check('B',5),check('C',2));
        console.log("Ganó "+ id2p(check('A',8))+" en (2)");
        ans = id2p(check('A',8));
        return ans;
    }else{
        ans=-1;
    }

//Columna 3
    if(id2p(check('A',3))==id2p(check('B',6)) && id2p(check('B',6))==id2p(check('C',9)) && id2p(check('A',3))!=0){
        console.log("entramos 3");
        rotate(check('A',3),check('B',6),check('C',9));
        console.log("Ganó "+ id2p(check('A',3))+" en (3)");
        ans = id2p(check('A',3));
        return ans;
    }else{
        ans=-1;
    }

    if(id2p(check('A',9))==id2p(check('B',6)) && id2p(check('B',6))==id2p(check('C',3)) && id2p(check('A',9))!=0){
        console.log("entramos 3");
        rotate(check('A',9),check('B',6),check('C',3));
        console.log("Ganó "+ id2p(check('A',9))+" en (3)");
        ans = id2p(check('A',9));
        return ans;
    }else{
        ans=-1;
    }

    return ans;
}

function CheckWinnerHZ() {
    ans = -1;
    if(id2p(check('A',1))==id2p(check('B',2)) && id2p(check('B',2))==id2p(check('C',3)) && id2p(check('A',1))!=0){
        
        rotate(check('A',1),check('B',2),check('C',3));
        console.log("Ganó "+ id2p(check('A',1))+" en (1)");
        ans = id2p(check('A',1));
        return ans;
    }else{
        ans=-1;
    }
    if(id2p(check('A',4))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',6)) && id2p(check('A',4))!=0){
        
        rotate(check('A',4),check('B',5),check('C',6));
        console.log("Ganó "+ id2p(check('A',4))+" en (2)");
        ans = id2p(check('A',4));
        return ans;
    }else{
        ans=-1;
    }
    if(id2p(check('A',7))==id2p(check('B',8)) && id2p(check('B',8))==id2p(check('C',9)) && id2p(check('A',7))!=0){
        
        rotate(check('A',7),check('B',8),check('C',9));
        console.log("Ganó "+ id2p(check('A',7))+" en (3)");
        ans = id2p(check('A',7));
        return ans;
    }else{
        ans=-1;
    }
    return ans;
}

function CheckWinnerDZ() {
    ans = -1;
    if(id2p(check('A',1))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',9)) && id2p(check('A',1))!=0){
        
        rotate(check('A',1),check('B',5),check('C',9));
        console.log("Ganó "+id2p(check('A',1))+" Diagonal Principal");
        ans = id2p(check('A',1));
        return ans;
    }else{
        ans=-1;
    }
    if(id2p(check('A',3))==id2p(check('B',5)) && id2p(check('B',5))==id2p(check('C',7)) && id2p(check('A',3))!=0){
        
        rotate(check('A',3),check('B',5),check('C',7));
        console.log("Ganó "+id2p(check('A',3))+" Diagonal Secundaria");
        ans = id2p(check('A',3));
        return ans;
    }else{
        ans=-1;
    }
    return ans;
}