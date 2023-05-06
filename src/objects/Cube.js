import * as THREE from '../../node_modules/three/build/three.module.js';

class Cube extends THREE.Mesh {
    constructor() {
        super();

        //============================================================
        // textures
        //============================================================
        const textureLoader = new THREE.TextureLoader();
        textureLoader.setPath('./src/assets/textures/')
        const baseTexture = textureLoader.load('base_color.jpg'); // uv
        const metallicTexture = textureLoader.load('metallic_roughness.png');
        const normalTexture = textureLoader.load('normal_map.png');

        this.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('coral').convertSRGBToLinear(),
            map: baseTexture,
            roughnessMap: metallicTexture,
            normalMap: normalTexture,
        }); // PBR material basado en físicas

        this.geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    }
}

export default Cube;