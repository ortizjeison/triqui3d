var RotarCubo = function () {
    requestAnimationFrame( RotarCubo );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};