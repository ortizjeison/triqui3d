
var geometry = new THREE.SphereGeometry(0.86,32,32);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh(geometry, material);
place(sphere,4,'A');
scene.add(sphere);

//Cilindros
color_default = 0xffffff;
select1_color = 0xfc0303;
select2_color = 0x03fc56;
var geo_cilindro = new THREE.CylinderGeometry(1,1,0.4,32);
var m_cilindro = new THREE.MeshPhongMaterial({color: color_default,opacity: 0,transparent: true,});
var m_select1 = new THREE.MeshPhongMaterial({color: select1_color,opacity: 0.9,transparent: true,});
var m_select2 = new THREE.MeshPhongMaterial({color: select2_color,opacity: 0.9,transparent: true,});


//Tablero A
var ca1 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca2 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca3 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca4 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca5 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca6 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca7 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca8 = new THREE.Mesh( geo_cilindro, m_cilindro );
var ca9 = new THREE.Mesh( geo_cilindro, m_cilindro );
            
place(ca1,1,'A');place(ca2,2,'A');place(ca3,3,'A');
place(ca4,4,'A');place(ca5,5,'A');place(ca6,6,'A');
place(ca7,7,'A');place(ca8,8,'A');place(ca9,9,'A');

scene.add(ca1);scene.add(ca2);scene.add(ca3);
scene.add(ca4);scene.add(ca5);scene.add(ca6);
scene.add(ca7);scene.add(ca8);scene.add(ca9);

                        //Tablero B
var cb1 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb2 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb3 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb4 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb5 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb6 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb7 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb8 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cb9 = new THREE.Mesh( geo_cilindro, m_cilindro );

place(cb1,1,'B');place(cb2,2,'B');place(cb3,3,'B');
place(cb4,4,'B');place(cb5,5,'B');place(cb6,6,'B');
place(cb7,7,'B');place(cb8,8,'B');place(cb9,9,'B');

scene.add(cb1);scene.add(cb2);scene.add(cb3);
scene.add(cb4);scene.add(cb5);scene.add(cb6);
scene.add(cb7);scene.add(cb8);scene.add(cb9);

                        //Tablero C
var cc1 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc2 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc3 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc4 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc5 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc6 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc7 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc8 = new THREE.Mesh( geo_cilindro, m_cilindro );
var cc9 = new THREE.Mesh( geo_cilindro, m_cilindro );

place(cc1,1,'C');place(cc2,2,'C');place(cc3,3,'C');
place(cc4,4,'C');place(cc5,5,'C');place(cc6,6,'C');
place(cc7,7,'C');place(cc8,8,'C');place(cc9,9,'C');

scene.add(cc1);scene.add(cc2);scene.add(cc3);
scene.add(cc4);scene.add(cc5);scene.add(cc6);
scene.add(cc7);scene.add(cc8);scene.add(cc9);

//Colorear Cilindros seleccionados
function Select1(Mesh){
    Mesh.material =  m_select1;
}

function Select2(Mesh){
    Mesh.material =  m_select2;
}

function Unselect(Mesh){
    Mesh.material =  m_cilindro;
}
/*
var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(cube, 'click', function(event){
    console.log('click');
    RotarCubo();
}, false);
*/

