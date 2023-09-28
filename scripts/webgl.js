import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const canvas = document.getElementById("webgl");
const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvas });
const loader = new GLTFLoader();
const controls = new OrbitControls(camera, renderer.domElement);



Init();
Render();


function Init()
{
    //camera
    camera.position.set(0, 0.9, 4.5);

    //loader
    loader.load('webgl/forest_house.glb', function (gltf)
    {
        scene.add(gltf.scene);
        gltf.scene.position.set(3, 0, -1);
        gltf.scene.scale.set(20, 20, 20);
        Render();

    }, undefined, function (error)
    {
        console.error(error);
    });


    //webglContainer.appendChild(renderer.domElement);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    //orbit Controller
    controls.addEventListener('change', Render);
    controls.target.set(0, 2, 0);
    controls.update();

    window.addEventListener('resize', OnWindowResize);

}


function OnWindowResize()
{
    camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    Render();
}


function Render()
{
    renderer.render(scene, camera);
}
