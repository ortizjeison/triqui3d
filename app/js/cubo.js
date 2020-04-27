var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshNormalMaterial();//se le añade el material al cubo(en los colores representa hexadecimal)
var cube = new THREE.Mesh( geometry, material );//objeto que toma una geometría y le aplica un material   y es lo que se transforma
scene.add( cube );

var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(cube, 'click', function(event){
    console.log('click');
    RotarCubo();
}, false);