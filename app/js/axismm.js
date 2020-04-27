//Add Board with Collada

loader = new THREE.ColladaLoader();
loader.load('https://triqui.cf/app/assets/axismm.dae', function(collada) {
  collada.scene.scale.set(1, 1, 1);
  scene.add(collada.scene);
  return renderer.render(scene, camera);
});