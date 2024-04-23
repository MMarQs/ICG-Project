class Game {

  constructor(scene, camera) {
    // initialize variables
    
    // prepare 3D scene
    this._initializeScene(scene, camera);

    // bind event callbacks
    document.addEventListener('keydown', this._keydown.bind(this));
    document.addEventListener('keyup', this._keyup.bind(this));
  }
  
  update() {
    // recompute the game state
    this._updateGrid();
    this._checkCollisions();
    this._updateInfoPanel();
  }
  
  _keydown(event) {
    // check for the key to move the ship accordingly
  }

  _keyup() {
    // reset to "idle" mode
  }
  _updateGrid() {
    // "move" the grid backwards so that it
    // feels like we're moving forward
  }
  _checkCollisions() {
    // check obstacles
    // check bonuses
  }
  _updateInfoPanel() {
    // update DOM elements to show the
    // current state of the game
    // (traveled distance, score, lives...)
  }
  
  _gameOver() {
    // show "end state" UI
    // reset instance variables for a new game
  }
  
  _initializeScene(scene, camera) {
    const shipBody = new THREE.Mesh(
      new THREE.TetrahedronBufferGeometry(0.4),
      new THREE.MeshBasicMaterial({ color: 0xbbccdd }),
    );
    shipBody.rotateX(45 * Math.PI / 180);
    shipBody.rotateY(45 * Math.PI / 180);
    
    this.ship = new THREE.Group();
    this.ship.add(shipBody);
  
    scene.add(this.ship);
    
    camera.position.z = 5;

    camera.rotateX(-20 * Math.PI / 180);
    camera.position.set(0, 1.5, 2);

    const reactorSocketGeometry = new THREE.CylinderBufferGeometry(0.08, 0.08, 0.1, 16);
    const reactorSocketMaterial = new THREE.MeshBasicMaterial({ color: 0x99aacc });

    const reactorSocket1 = new THREE.Mesh(reactorSocketGeometry, reactorSocketMaterial);
    const reactorSocket2 = new THREE.Mesh(reactorSocketGeometry, reactorSocketMaterial);
    const reactorSocket3 = new THREE.Mesh(reactorSocketGeometry, reactorSocketMaterial);
  
    this.ship.add(reactorSocket1);
    this.ship.add(reactorSocket2);
    this.ship.add(reactorSocket3);

    reactorSocket1.rotateX(90 * Math.PI / 180);
    reactorSocket1.position.set(-0.15, 0, 0.1);
    reactorSocket2.rotateX(90 * Math.PI / 180);
    reactorSocket2.position.set(0.15, 0, 0.1);
    reactorSocket3.rotateX(90 * Math.PI / 180);
    reactorSocket3.position.set(0, -0.15, 0.1);

    const reactorLightGeometry = new THREE.CylinderBufferGeometry(0.055, 0.055, 0.1, 16);
    const reactorLightMaterial = new THREE.MeshBasicMaterial({ color: 0xaadeff });

    const reactorLight1 = new THREE.Mesh(reactorLightGeometry, reactorLightMaterial);
    const reactorLight2 = new THREE.Mesh(reactorLightGeometry, reactorLightMaterial);
    const reactorLight3 = new THREE.Mesh(reactorLightGeometry, reactorLightMaterial);
  
    this.ship.add(reactorLight1);
    this.ship.add(reactorLight2);
    this.ship.add(reactorLight3);
    reactorLight1.rotateX(90 * Math.PI / 180);
    reactorLight1.position.set(-0.15, 0, 0.11);
    reactorLight2.rotateX(90 * Math.PI / 180);
    reactorLight2.position.set(0.15, 0, 0.11);
    reactorLight3.rotateX(90 * Math.PI / 180);
    reactorLight3.position.set(0, -0.15, 0.11);
  }
}