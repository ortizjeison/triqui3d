var scene = new THREE.Scene();//se crea la variable escena en el java
var aspect = window.innerWidth / window.innerHeight;//variable para la relacion entre alto-ancho
var camera = new THREE.PerspectiveCamera( 60, aspect, 0.1, 2000 );//set del tamaño (perspectiva) (FOV,aspect.ratio,near,far(todo lo que no se podra ver))
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor( 0xffffff );
renderer.setSize( window.innerWidth, window.innerHeight );//establecer el tamaño en el que queremos que muestre nuestra aplicación
document.body.appendChild(renderer.domElement);

//Orbit Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

//Light
light = new THREE.DirectionalLight(0xffffff, 1.1);
light.position.set(10, 20, 15);
scene.add(light);

//Set Camera position
camera.position.set(2, 2, 2);
camera.lookAt(new THREE.Vector3(0, 0, 0));
camera.rotation.z = 5 / 6 * Math.PI;

//Axis
var axesHelper = new THREE.AxesHelper(2);
scene.add( axesHelper );

//Responsive Function
window.addEventListener('resize', function() {
    var width= window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});