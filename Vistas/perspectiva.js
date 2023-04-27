// Crear la escena, la cámara y el renderizador
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear el cubo
//var geometry = new THREE.BoxGeometry(1, 1, 1);
//var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//var cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

// Crear la geometría y el material del cubo
geo=[[0,0,0],[1,0,0],[1,0,1],[0,0,1],[0,0,0],[0,1,0],[1,1,0],[1,1,1],[0,1,1],[]]
//var geometria=
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Crear la geometría de los bordes del cubo
var geometry2 = new THREE.BoxGeometry(1.125, 1.125, 1.125);
var edges = new THREE.EdgesGeometry(geometry2);
var lineMaterial = new THREE.LineBasicMaterial({color: 0xff00ff});

// Crear un objeto visual para representar los bordes del cubo
var edgesObj = new THREE.LineSegments(edges, lineMaterial);

// Crear el objeto visual del cubo
var cube = new THREE.Mesh(geometry, material);

// Agregar ambos objetos a la escena
scene.add(cube);
scene.add(edgesObj);

// Posicionar la cámara
camera.position.z = 3;

// Animar el cubo
function animate() {
  requestAnimationFrame(animate);
  edgesObj.rotation.x+=0.01;
  edgesObj.rotation.y+=0.01;
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();



