//Player 1
var first1 = 43;
var last1 = 51;
var geo_p1 = new THREE.IcosahedronBufferGeometry(0.9,0);
var m_p1 = new THREE.MeshPhongMaterial( {color: 0x03dffc} );

var fa1 = new THREE.Mesh(geo_p1, m_p1);
var fa2 = new THREE.Mesh(geo_p1, m_p1);
var fa3 = new THREE.Mesh(geo_p1, m_p1);
var fa4 = new THREE.Mesh(geo_p1, m_p1);
var fa5 = new THREE.Mesh(geo_p1, m_p1);
var fa6 = new THREE.Mesh(geo_p1, m_p1);
var fa7 = new THREE.Mesh(geo_p1, m_p1);
var fa8 = new THREE.Mesh(geo_p1, m_p1);
var fa9 = new THREE.Mesh(geo_p1, m_p1);

var p1=[null,fa1,fa2,fa3,fa4,fa5,fa6,fa7,fa8,fa9];

//Player 2
var first2 = 52;
var last2 = 60;

var geo_p2 = new THREE.OctahedronBufferGeometry(0.9,0);
var m_p2 = new THREE.MeshPhongMaterial( {color: 0xfcd303} );

var fb1 = new THREE.Mesh(geo_p2, m_p2);
var fb2 = new THREE.Mesh(geo_p2, m_p2);
var fb3 = new THREE.Mesh(geo_p2, m_p2);
var fb4 = new THREE.Mesh(geo_p2, m_p2);
var fb5 = new THREE.Mesh(geo_p2, m_p2);
var fb6 = new THREE.Mesh(geo_p2, m_p2);
var fb7 = new THREE.Mesh(geo_p2, m_p2);
var fb8 = new THREE.Mesh(geo_p2, m_p2);
var fb9 = new THREE.Mesh(geo_p2, m_p2);

var p2=[null,fb1,fb2,fb3,fb4,fb5,fb6,fb7,fb8,fb9];

//place_ficha(p1[1],1,'A');

function restart() {
    location.reload();
/*
    for (let index = 0; index < p1.length; index++) {
        scene.remove(p1[index]);
        scene.remove(p2[index]);
    }
    playing=1;
    active1=0;
    active2=0;
    start();
*/
}


    
