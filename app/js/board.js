
//Add Board with Collada
loader = new THREE.ColladaLoader();
loader.load('https://triqui.cf/app/assets/board.dae', function(collada) {

  
  var la_propia_textura = new THREE.TextureLoader();
  var textu = la_propia_textura.load( "https://triqui.cf/app/assets/casetas_final.jpg");
  var skyboxGeo = new THREE.SphereGeometry( 400, 400, 400);
  var mat = new THREE.MeshLambertMaterial( { map: textu});  
  var skybox = new THREE.Mesh( skyboxGeo, mat );
  skybox.receiveShadow =true;
  mat.side = THREE.BackSide;
  skybox.position.y = 40;
  scene.add( skybox );

  collada_ratio=collada_ratio*10;
  collada.scene.scale.set(collada_ratio, collada_ratio, collada_ratio);
  scene.add(collada.scene);
  return renderer.render(scene, camera);
});


function modal_ganador(){
        
  Swal.fire({
    position: 'top-end',
    title: "<h3>¡Jugador "+nextplayer()+", ganaste!</h3>",
    confirmButtonColor: '#10e03d',
    confirmButtonText:"<h3>¿Revancha o qué?</h3>",
    allowOutsideClick: false,
    allowEscapeKey: false,
    background:'rgba(255,255,255,0.8)'
    }).then((result) => {
    if (result.value) {
     restart();
    }
    });
}

function modal_empate(){
        
  Swal.fire({
    position: 'top-end',
    title: "<h3 style='font-family: 'Pangolin', cursive;'>¡Es un empate!</h3>",
    confirmButtonColor: '#10e03d',
    confirmButtonText: '<h3>¿Jugamos otra o qué?</h3>',
    allowOutsideClick: false,
    allowEscapeKey: false,
    background:'rgba(255,255,255,0.8)'
    }).then((result) => {
    if (result.value) {
     restart();
    }
    });
}