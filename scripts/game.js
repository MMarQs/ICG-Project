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
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;
  }
}