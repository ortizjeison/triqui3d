var geometry = new THREE.SphereGeometry(0.5,32,32);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
sphere.position.x = 1;
sphere.position.z = 1;
sphere.position.y = 0.2;
scene.add( sphere );

var geometry2 = new THREE.SphereGeometry(0.5,32,32);
var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere2 = new THREE.Mesh( geometry, material );
sphere2.position.x = 2;
sphere2.position.z = 2;
sphere2.position.y = 0.2;
scene.add( sphere2 );


/*
var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(cube, 'click', function(event){
    console.log('click');
    RotarCubo();
}, false);
*/