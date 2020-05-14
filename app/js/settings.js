var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);//set del tamaño (perspectiva) (FOV,aspect.ratio,near,far(todo lo que no se podra ver))
var raycaster, mouse = { x : 0, y : 0 };
var renderer = new THREE.WebGLRenderer();
var collada_ratio = 0.2538555;
renderer.setClearColor( 0xffffff );
renderer.setSize( window.innerWidth, window.innerHeight );//establecer el tamaño en el que queremos que muestre nuestra aplicación
document.body.appendChild(renderer.domElement);

//Orbit Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

//Light
light = new THREE.DirectionalLight(0xffffff, 1.1);
light.position.set(10,20,10);
scene.add(light);

//Camera position  (x,z,y)
camera.position.set(0,10,0);
camera.lookAt(new THREE.Vector3(0,0,0));
//camera.rotation.z = 5 / 6 * Math.PI;

//Axis
var axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

//Responsive Function
window.addEventListener('resize', function() {
    var width= window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

//Raycaster
raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener('click', raycast, false); 

function raycast(e){
  mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObjects(scene.children,true);

  if(intersects.length>0){
  for ( var i = 0; i < intersects.length; i++) {
    console.log(intersects[i]);
  } 
}else
console.log("Error, no seleccionaste ninguna figura"); 
}


function ChangeCoursor(player){
    if (player==1) {
        document.body.style.cursor = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/meh.png), auto;";
        console.log("entramos 1");
    }
    if(player==2){
        document.body.style.cursor = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png), auto;";
        console.log("entramos 2");
    }
}