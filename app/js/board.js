//Add Board with Collada
loader = new THREE.ColladaLoader();
loader.load('https://triqui.cf/app/assets/board.dae', function(collada) {

  var la_propia_textura = new THREE.TextureLoader();
  var textu = la_propia_textura.load( "https://triqui.cf/app/assets/casetas_m.jpg");
  var skyboxGeo = new THREE.SphereGeometry( 300, 300, 300);
  var mat = new THREE.MeshBasicMaterial( { map: textu});  
  var skybox = new THREE.Mesh( skyboxGeo, mat );
  mat.side = THREE.BackSide;
  skybox.position.y = 50;
  scene.add( skybox );


  collada_ratio=collada_ratio*10;
  collada.scene.scale.set(collada_ratio, collada_ratio, collada_ratio);
  scene.add(collada.scene);
  return renderer.render(scene, camera);
});