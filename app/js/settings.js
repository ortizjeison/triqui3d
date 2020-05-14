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
//scene.add(axesHelper);

//Responsive Function
window.addEventListener('resize', function() {
    var width= window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

//Raycast click
raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener('dblclick', raycast, false); 

function raycast(e){

  if (typeof window.orientation !== 'undefined'){ 
    alert('holi'); 
  }

  mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObjects(scene.children, true);

  if(intersects.length>0){
    if(intersects[0].object.geometry.type=="CylinderGeometry") {
      
      var cilindro = intersects[0].object.id;
      play(cilindro);
    }else{
        //console.log("Pos no porque no es un cilindro");   
    }
    }else{
        //console.log("Meeen, no has seleccionado nadaaa");
    }
}

//Raycast hover
renderer.domElement.addEventListener('mousemove',raycasthover,false);
function raycasthover(e){
  mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObjects(scene.children, true);

  if(intersects.length>0){
    if(intersects[0].object.geometry.type=="CylinderGeometry") {
        var objectid = intersects[0].object.id;
        unselect();
        select(getmeshC(objectid),playing);
    }
  }
}

function nextplayer() {
  if (playing==1) {
    playing=2;
  }else{
    playing=1;
  }
}