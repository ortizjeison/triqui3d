controls = new THREE.OrbitControls( camera,renderer.domElement);//ahora se le deben agregar dos parametros

var render = function () {
    requestAnimationFrame( render );
    //cube.rotation.x += 0.01;
   // cube.rotation.y += 0.01;
    controls.update();
    renderer.render( scene, camera );
  };
  controls.enablePan = true;
  controls.enableZoom = true;
  controls.enableRotate = true;
  
  //controls.minDistance
  //controls.maxDistance
  
  //controls.minPolarAngle
  //controls.maxPolarAngle
  render();
 