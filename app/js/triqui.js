var playing = 1;
var active1=1;
var active2=1;
var holding = 0;


      //click en casilla Vacía:
          //si tiene fichas disponibles->poner una
      //click en casilla llena y no tiene fichas disponibles:
        //Verificar si la ficha le pertenece:
          //Si->seleccionar esa y esperar click en una casilla vacía para moverla
          //No->alert(selecciones otra)
      //click en casilla llena y (tiene fichas disponibles o tiene una ficha ajena)->alert(seleccione otra)
      //Posicion vacia?mover(lógica y gráfica),error
      //CheckWinner?Alert y terminar juego,nada
    

function play(id) {
    //Verificar casilla seleccionada:
    s_board = cil2board(id);
    s_position = cil2position(id);
    state = check(s_board,s_position);
    console.log("State: "+state);

    //Click en casilla disp. y fichas por jugar
    if(state==0){
        if (playing==1 && active1<10) {
            //El j1 tiene fichas por jugar
            move(s_board,s_position,p1[active1].id);
            place_ficha(p1[active1],s_position,s_board);
            active1++;

        }
        if (playing==2 && active2<10) {
            //El j2 tiene fichas por jugar
            move(s_board,s_position,p2[active2].id);
            place_ficha(p2[active2],s_position,s_board);
            active2++;
        }
        
    }
    nextplayer();



    winner();
}


















var Render = function(){
    //console.log(cosa);
    requestAnimationFrame(Render);
    renderer.render(scene, camera);
};
Render();