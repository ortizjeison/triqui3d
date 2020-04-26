var updateCube = function () {//bucle que hará que el renderizador dibuje la escena cada vez que se actualice la pantalla 
    requestAnimationFrame( updateCube );//muchas ventajas
    cube.rotation.x += 0.01;//aplico animacion con la rotacion cada 60/seg
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  };