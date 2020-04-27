//Add Board with Collada

loader = new THREE.ColladaLoader();
loader.load('https://triqui.cf/app/assets/axismm.dae', function(collada) {
  collada.scene.scale.set(0.95, 0.95, 0.95);
  scene.add(collada.scene);
  return renderer.render(scene, camera);
});