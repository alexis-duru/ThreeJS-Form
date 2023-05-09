import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#111111");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let forme = new THREE.Group();

let geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
let material = new THREE.MeshNormalMaterial({
  color: 0xff0000,
  wireframe: true,
  opacity: 1,
  transparent: true,
  wireframeLinecap: "round",
  wireframeLinejoin: "round",
  wireframeLinewidth: 5,
});

forme.add(new THREE.Mesh(geometry, material));
scene.add(forme);

camera.position.z = 100;

// Ajouter les contrôles OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

let render = function () {
  requestAnimationFrame(render);
  forme.rotation.x += 0.01;
  forme.rotation.y += 0.01;
  controls.update(); // Mettre à jour les contrôles
  renderer.render(scene, camera);
};

render();
