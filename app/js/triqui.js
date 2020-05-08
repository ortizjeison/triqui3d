//Game Logic
var Update = function(){

};

//Draw Scene
var Render = function(){
    requestAnimationFrame(Render);
    renderer.render(scene, camera);
    
};
Render();

//GameLoop
var GameLoop = function(){

};


//Probando cómo cambiar el color de un mesh
cc1.setColor = function(color){
    cc1.material.color.set(color);
}