//Add Board with Colladar
loader = new THREE.ColladaLoader();
loader.load('https://triqui.cf/app/assets/axismm.dae', function(collada) {
  collada.scene.scale.set(collada_ratio,collada_ratio,collada_ratio);
  scene.add(collada.scene);
  return renderer.render(scene, camera);
});