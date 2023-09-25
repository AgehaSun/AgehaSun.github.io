import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let camera, scene, renderer;
const webglContainer = document.getElementById("webgl") ;


Init();
Render();


function Init()
{
    //camera
    camera = new THREE.PerspectiveCamera( 60,  webglContainer.offsetWidth/ webglContainer.offsetHeight, 0.1, 100 );
    camera.position.set( 0, 0.9, 4.5);



    //scene
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000);


    //loader
    const loader = new GLTFLoader();
    loader.load( 'webgl/forest_house.glb', function ( gltf ) {

        scene.add( gltf.scene );
        gltf.scene.position.set(3,0,-1);
        gltf.scene.scale.set(20,20,20);
        Render();

    }, undefined, function ( error ) {

        console.error( error );

    } );


    //renderer
    renderer = new THREE.WebGLRenderer(
        {
            antialias: true ,
            alpha: true,
        });

    webglContainer.appendChild(renderer.domElement);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(webglContainer.offsetWidth, webglContainer.offsetHeight);


    //orbit Controller
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener( 'change', Render );
    controls.target.set( 0, 2, 0 );
    controls.update();

    window.addEventListener( 'resize', OnWindowResize );


}


function OnWindowResize()
{
    camera.aspect = webglContainer.offsetWidth/ webglContainer.offsetHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(webglContainer.offsetWidth,webglContainer.offsetHeight);
    Render();
}


function Render()
{
    renderer.render( scene, camera );

}
