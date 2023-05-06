import * as THREE from '../node_modules/three/build/three.module.js';
import Scene1 from './scenes/Scene1.js';

class App {
    constructor(container) {
        this.container = container;

        this.scene = new Scene1();

        // camera
        // example https://codepen.io/gammafp/full/OJMbXzX
        this.camera = new THREE.PerspectiveCamera(
            35,     // field of view 1 - 179 grados
            container.clientWidth / container.clientHeight,
            0.1,    // plano de cerca
            1000,   // plano de lejos
        );

        // // https://codepen.io/gammafp/full/NWxbrLg
        // const div = 200;
        // const camera = new THREE.OrthographicCamera(
        //     container.clientWidth / div,
        //     container.clientWidth / -div,
        //     container.clientHeight / div,
        //     container.clientHeight / -div,
        //     0.1,
        //     1000,
        // );

        // camera.zoom = 2;
        // camera.updateProjectionMatrix();

        this.camera.position.set(0, 0, 15);




        //============================================================
        // render
        //============================================================
        this.rendered = new THREE.WebGLRenderer({
            antialias: true,
            // alpha: true, // quita el background de THREE
        });
        this.rendered.setSize(container.clientWidth, container.clientHeight);
        this.rendered.setPixelRatio(window.devicePixelRatio);
        this.rendered.physicallyCorrectLights = true;
        this.rendered.outputEncoding = THREE.sRGBEncoding;

        this.container.appendChild(this.rendered.domElement);
        this.render();
    }

    onResize() {
        this.rendered.setSize(this.container.clientWidth, this.container.clientHeight);
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
    }

    render() {
        this.scene.update();
        this.rendered.render(this.scene, this.camera);
        this.rendered.setAnimationLoop(() => this.render());
    }

}

export default App;
