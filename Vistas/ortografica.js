// Crear una cámara ortográfica en lugar de una cámara de perspectiva
var width = window.innerWidth;
var height = window.innerHeight;
var camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, -1000, 1000);

// Configurar la posición y la dirección de la cámara
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// Crear la escena, el renderizador y agregar la cámara
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
scene.add(camera);

// Crear la geometría y el material del cubo
var geometry = new THREE.BoxGeometry(200, 200, 200);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Crear la geometría de los bordes del cubo
var geometry2 = new THREE.BoxGeometry(225, 225, 225);
var edges = new THREE.EdgesGeometry(geometry2);
var lineMaterial = new THREE.LineBasicMaterial({color: 0xff00ff});

// Crear un objeto visual para representar los bordes del cubo
var edgesObj = new THREE.LineSegments(edges, lineMaterial);

// Crear el objeto visual del cubo
var cube = new THREE.Mesh(geometry, material);

// Agregar ambos objetos a la escena
scene.add(cube);
scene.add(edgesObj);

// Animar el cubo y los bordes
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  edgesObj.rotation.copy(cube.rotation); // Actualizar la rotación de los bordes
  edgesObj.position.copy(cube.position); // Actualizar la posición de los bordes
  renderer.render(scene, camera);
}
animate();
