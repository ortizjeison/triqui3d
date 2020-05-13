var geometry = new THREE.IcosahedronBufferGeometry(0.86,0);
var material = new THREE.MeshPhongMaterial( {color: 0x03dffc} );
var s1 = new THREE.Mesh(geometry, material);
var s2 = new THREE.Mesh(geometry, material);

var p1=[s1,s2];
place_ficha(p1[1],5,'A');
scene.add(p1[1]);