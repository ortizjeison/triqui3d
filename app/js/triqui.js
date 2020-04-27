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