import * as THREE from '../../node_modules/three/build/three.module.js';
import Cube from '../objects/Cube.js';

class Scene1 extends THREE.Scene {
    constructor() {
        super();
        this.background = new THREE.Color('skyblue').convertSRGBToLinear();
        this.create();
    }

    create() {
        this.cube = new Cube();
        this.add(this.cube);

        const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
        this.add(hemisphereLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0.8, 2, 4);
        this.add(directionalLight);

        //============================================================
        // helpers
        //============================================================
        // const helperAxes = new THREE.AxesHelper(10);
        // this.add(helperAxes);
        // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
        // this.add(directionalLightHelper);
        // const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight);
        // this.add(hemisphereLightHelper);

        // scene.overrideMaterial = material;

        // setTimeout(() => {
        //     scene.remove(box_mesh)
        // }, 2000);

    }

    update() {
        this.cube.rotateX(0.01);
        this.cube.rotateZ(0.005);
        this.cube.rotateY(0.0025);
    }
}

export default Scene1;