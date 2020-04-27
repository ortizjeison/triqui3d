//Add Board with Collada

loader = new THREE.ColladaLoader();
loader.load('https://triqui.cf/app/assets/mesas_texture.dae', function(collada) {
  collada.scene.scale.set(0.01, 0.01, 0.01);
  scene.add(collada.scene);
  return renderer.render(scene, camera);
});