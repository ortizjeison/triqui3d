var geometry = new THREE.SphereGeometry(0.43,32,32);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
sphere.position.x = -1.5;
sphere.position.z = 1.5;
sphere.position.y = 0.2;
scene.add( sphere );




/*
var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(cube, 'click', function(event){
    console.log('click');
    RotarCubo();
}, false);
*/