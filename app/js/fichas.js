var geometry = new THREE.SphereGeometry(0.86,32,32);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh(geometry, material);
place_ficha(sphere,5,'C');
scene.add(sphere);