var geometry = new THREE.BoxGeometry( 1, 1, 1 );//elemento que contiene vertices y caras
var material = new THREE.MeshNormalMaterial();//se le añade el material al cubo(en los colores representa hexadecimal)
var cube = new THREE.Mesh( geometry, material );//objeto que toma una geometría y le aplica un material   y es lo que se transforma
scene.add( cube );//por defecto se añade la camara(0,0,0)
