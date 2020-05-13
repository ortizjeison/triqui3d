var geometry = new THREE.SphereGeometry(0.86,32,32);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var s1 = new THREE.Mesh(geometry, material);
var s2 = new THREE.Mesh(geometry, material);

var p1=[s1,s2];
place_ficha(p1[1],5,'A');
scene.add(p1[1]);