var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(40, aspect, 1, 500);//(perspectiva) (FOV,aspect.ratio,near,far(todo lo que no se podra ver))
var raycaster, mouse = { x : 0, y : 0 };
var renderer = new THREE.WebGLRenderer();
var collada_ratio = 0.2538555;
renderer.setClearColor( 0xffffff );
renderer.setSize( window.innerWidth, window.innerHeight );//establecer el tamaño en el que queremos que muestre nuestra aplicación
document.body.appendChild(renderer.domElement);

mobile = false;
if (typeof window.orientation !== 'undefined'){
  mobile = true;
}

//Camera position  (x,z,y)
camera.position.set(-20,40,20);
camera.lookAt(new THREE.Vector3(100,50,100));
//camera.rotation.z = 5 / 6 * Math.PI;

//Orbit Controls
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 10; //zoom in 
controls.maxDistance = 50; //zoom out

//Responsive Function
window.addEventListener('resize', function() {
  var width= window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});


renderer.domElement.addEventListener("touchstart", raycast_mobile);

function raycast_mobile(e) {
  //alert("estamos en mobil beibi");
  mouse.x = +(e.touches[0].pageX / window.innerWidth) * 2 +-1;
  mouse.y = -(e.touches[0].pageY / window.innerHeight) * 2 + 1;
  //alert(mouse.x);
  //alert(mouse.y);
}

//Raycast click
raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener('dblclick', raycast, false); 
  
function raycast(e){
    
  if(mobile){
    alert("mobile detected");
    mouse.x = +(e.touches[0].pageX / window.innerWidth) * 2 +-1;
    mouse.y = -(e.touches[0].pageY / window.innerHeight) * 2 + 1;
    alert(mouse.x);
    alert(mouse.y);
  }else{
    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  }
  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObjects(scene.children, true);
  
  if(intersects.length>0){
    var selected = intersects[0].object;
    
    if(selected.geometry.type=="CylinderGeometry") {                            
      play(selected.id);              
    }else if(selected.geometry.type=="IcosahedronBufferGeometry" || selected.geometry.type=="OctahedronBufferGeometry"){
      var cilindro_ficha = intersects[1].object.id; //el cilindro de la ficha                                
    }
  }else{
    //console.log("Meeen, no has seleccionado nadaaa");
  }
}
  
//Raycast hover
renderer.domElement.addEventListener('mousemove',raycasthover,false);
function raycasthover(e){
  
  if(mobile){
    mouse.x = +(e.targetTouches[0].pageX / window.innerWidth) * 2 +-1;
    mouse.y = -(e.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
  }else{
    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
  }
  
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

//Light
light = new THREE.DirectionalLight(0xffffff, 1.1);
light.position.set(-71,168,80);

//Otra luz de reflejo desde abajo
//light2 = new THREE.DirectionalLight(0xffffff, 0.5);
//light2.position.set(0,-20,0);

//Axis
var axesHelper = new THREE.AxesHelper(1);

//scene.add(light2);
scene.add(light);
//scene.add(axesHelper);