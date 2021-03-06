var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(65, aspect, 1, 600);//(perspectiva) (FOV,aspect.ratio,near,far(todo lo que no se podra ver))
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
camera.lookAt(new THREE.Vector3(0,0,0));
camera.position.set(-20.226014146077315,15.570536706419034,0.43910247545124903);

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

renderer.domElement.addEventListener("touchstart", raycast);

//Raycast click
raycaster = new THREE.Raycaster();
renderer.domElement.addEventListener('dblclick', raycast, false); 
  
function raycast(e){

  if(mobile){
    mouse.x = +(e.touches[0].pageX / window.innerWidth) * 2 +-1;
    mouse.y = -(e.touches[0].pageY / window.innerHeight) * 2 + 1;
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

      state = check(cil2board(objectid),cil2position(objectid));
      //console.log(state);
      if(state==0){
        select(getmeshC(objectid),playing);
      }

    }else{
      unselect();
    }
  }
}

//Light
light = new THREE.DirectionalLight(0xffffff, 1.1);
light.position.set(-71,168,80);
scene.add(light);

//Axis
var axesHelper = new THREE.AxesHelper(1);
//scene.add(axesHelper);