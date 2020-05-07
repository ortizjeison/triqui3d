
var geometry = new THREE.SphereGeometry(0.86,32,32);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
place(sphere,1,'C');
scene.add( sphere );

var geometry = new THREE.CylinderGeometry(1.1,1.1, 0.45, 32 );
var material = new THREE.MeshBasicMaterial();
material.color.set('rgb(255, 127, 64)');
var cylinder = new THREE.Mesh( geometry, material );
cylinder.position.x = -3;
cylinder.position.z = 3;
cylinder.position.y = 0.2;
scene.add( cylinder );


/*
var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(cube, 'click', function(event){
    console.log('click');
    RotarCubo();
}, false);
*/