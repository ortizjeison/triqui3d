//Add Board with Collada
loader = new THREE.ColladaLoader();
loader.load('https://triqui.cf/app/assets/board.dae', function(collada) {
  collada.scene.scale.set(collada_ratio, collada_ratio, collada_ratio);
  scene.add(collada.scene);
  return renderer.render(scene, camera);
});