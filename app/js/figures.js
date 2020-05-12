
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
var a1 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a2 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a3 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a4 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a5 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a6 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a7 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a8 = new THREE.Mesh( geo_cilindro, m_cilindro );
var a9 = new THREE.Mesh( geo_cilindro, m_cilindro );
            
place(a1,1,'A');place(a2,2,'A');place(a3,3,'A');
place(a4,4,'A');place(a5,5,'A');place(a6,6,'A');
place(a7,7,'A');place(a8,8,'A');place(a9,9,'A');

scene.add(a1);scene.add(a2);scene.add(a3);
scene.add(a4);scene.add(a5);scene.add(a6);
scene.add(a7);scene.add(a8);scene.add(a9);

                        //Tablero B
var b1 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b2 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b3 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b4 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b5 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b6 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b7 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b8 = new THREE.Mesh( geo_cilindro, m_cilindro );
var b9 = new THREE.Mesh( geo_cilindro, m_cilindro );

place(b1,1,'B');place(b2,2,'B');place(b3,3,'B');
place(b4,4,'B');place(b5,5,'B');place(b6,6,'B');
place(b7,7,'B');place(b8,8,'B');place(b9,9,'B');

scene.add(b1);scene.add(b2);scene.add(b3);
scene.add(b4);scene.add(b5);scene.add(b6);
scene.add(b7);scene.add(b8);scene.add(b9);

                        //Tablero C
var c1 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c2 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c3 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c4 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c5 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c6 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c7 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c8 = new THREE.Mesh( geo_cilindro, m_cilindro );
var c9 = new THREE.Mesh( geo_cilindro, m_cilindro );

place(c1,1,'C');place(c2,2,'C');place(c3,3,'C');
place(c4,4,'C');place(c5,5,'C');place(c6,6,'C');
place(c7,7,'C');place(c8,8,'C');place(c9,9,'C');

scene.add(c1);scene.add(c2);scene.add(c3);
scene.add(c4);scene.add(c5);scene.add(c6);
scene.add(c7);scene.add(c8);scene.add(c9);

//Colorear Cilindros selecionados
function select(Mesh, player){
    if(player==1){
        Mesh.material = m_select1;
    }
    if(player==2){
        Mesh.material = m_select2;
    }
}

function unselect(){
    a1.material = m_cilindro;
    a2.material = m_cilindro;
    a3.material = m_cilindro;
    a4.material = m_cilindro;
    a5.material = m_cilindro;
    a6.material = m_cilindro;
    a7.material = m_cilindro;
    a8.material = m_cilindro;
    a9.material = m_cilindro;

    b1.material = m_cilindro;
    b2.material = m_cilindro;
    b3.material = m_cilindro;
    b4.material = m_cilindro;
    b5.material = m_cilindro;
    b6.material = m_cilindro;
    b7.material = m_cilindro;
    b8.material = m_cilindro;
    b9.material = m_cilindro;

    c1.material = m_cilindro;
    c2.material = m_cilindro;
    c3.material = m_cilindro;
    c4.material = m_cilindro;
    c5.material = m_cilindro;
    c6.material = m_cilindro;
    c7.material = m_cilindro;
    c8.material = m_cilindro;
    c9.material = m_cilindro;
}
/*
var domEvents = new THREEx.DomEvents(camera, renderer.domElement);
domEvents.addEventListener(cube, 'click', function(event){
    console.log('click');
    RotarCubo();
}, false);
*/