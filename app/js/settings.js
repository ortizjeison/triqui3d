var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 60, aspect, 0.1, 1000 );//set del tamaño (perspectiva) (FOV,aspect.ratio,near,far(todo lo que no se podra ver))
var renderer = new THREE.WebGLRenderer();
var collada_ratio = 0.2538555;
renderer.setClearColor( 0xffffff );
renderer.setSize( window.innerWidth, window.innerHeight );//establecer el tamaño en el que queremos que muestre nuestra aplicación
document.body.appendChild(renderer.domElement);

//Orbit Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

//Light
light = new THREE.DirectionalLight(0xffffff, 1.1);
light.position.set(10,10,10);
scene.add(light);

//Camera position  (x,z,y)
camera.position.set(0,10,0);
camera.lookAt(new THREE.Vector3(0,0,0));
//camera.rotation.z = 5 / 6 * Math.PI;

//Axis
var axesHelper = new THREE.AxesHelper(1);
scene.add( axesHelper );

//Responsive Function
window.addEventListener('resize', function() {
    var width= window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});