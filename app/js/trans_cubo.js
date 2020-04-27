var rotar_cubo = function () {//bucle que hará que el renderizador dibuje la escena cada vez que se actualice la pantalla 
    requestAnimationFrame( rotar_cubo );//muchas ventajas
    //cube.rotation.x += 0.01;//aplico animacion con la rotacion cada 60/seg
    //cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  };