/* global THREE window document */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const lineGeometry = new THREE.Geometry();
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

lineGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(10, 0, 0));

const line = new THREE.Line(lineGeometry, lineMaterial);

cube.rotation.x = 50;

// scene.add(line);
scene.add(cube);

function animate() {
  window.requestAnimationFrame(animate);
  //
  //   cube.rotation.y += 0.1;
  renderer.render(scene, camera);
}

animate();
