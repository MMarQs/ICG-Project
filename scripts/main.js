window.onload = () => {
  setupAudio();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  scene.fog = new THREE.Fog(0x000000, 120, 160);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const gameInstance = new Game(scene, camera);

  function animate() {
    requestAnimationFrame(animate);
    // directly call the game instance method to
    // be agnostic of all details
    gameInstance.update();
    renderer.render(scene, camera);
  }

  animate();
}