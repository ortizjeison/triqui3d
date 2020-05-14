//Game Logic
var Update = function(){

};

//Draw Scene
current_player = 2;

var Render = function(){
    //console.log(cosa);
    requestAnimationFrame(Render);
    renderer.render(scene, camera);
    
};
Render();

//GameLoop
var GameLoop = function(){

};