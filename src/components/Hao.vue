<template>
  <div id="three-container" class="keepShaking"></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Hao",
  props: ["isAbout"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
      canvasWidth: null,
      canvasHeight: null,
      camera: null,
      scene: null,
      renderer: null,
      ambLight: null,
      hemisphereLight: null,
      text3D: null,
      pivot: null,
      targetRotation: 0,
      targetRotationOnMouseDown: 0,
      mouseX: 0,
      mouseXOnMouseDown: 0,
      mousePos: { x: 0, y: 0 }
    };
  },
  methods: {
    init: function() {
      const container = document.getElementById("three-container");
      this.canvasWidth = window.innerHeight / 2;
      this.canvasHeight = window.innerHeight / 2;

      this.camera = new THREE.PerspectiveCamera(
        65,
        this.canvasWidth / this.canvasHeight,
        0.1,
        1000
      );

      this.camera.position.set(0, 0, 6);

      this.scene = new THREE.Scene();
      this.isAbout && (this.scene.fog = new THREE.Fog(0xfafafa, 1, 150));

      this.ambLight = new THREE.AmbientLight(0xffffff, 0.7);
      this.scene.add(this.ambLight);

      this.hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.6);
      this.scene.add(this.hemisphereLight);

      // // Helper
      // const axesHelper = new THREE.AxesHelper(10);
      // this.scene.add(axesHelper);
      // const gridHelper = new THREE.GridHelper(10, 10);
      // this.scene.add(gridHelper);

      this.text3D = this.loadText();
      this.text3D.position.x = -2.8;
      this.text3D.position.y = -1.7;

      this.pivot = new THREE.Object3D().add(this.text3D);
      this.scene.add(this.pivot);

      this.isAbout && container.classList.remove("keepShaking");

      container.addEventListener("click", () => {
        if (container.classList.contains("keepShaking") && !this.isAbout) {
          container.classList.remove("keepShaking");
        }

        this.toggleText();
      });

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.canvasWidth, this.canvasHeight);
      container.appendChild(this.renderer.domElement);

      if (this.isAbout) {
        document.addEventListener("mousemove", this.handleMouseMove, false);
        document.addEventListener("touchmove", this.handleTouchmove, false);
      } else {
        this.renderer.domElement.addEventListener(
          "mousedown",
          this.onDocumentMouseDown,
          false
        );
        this.renderer.domElement.addEventListener(
          "touchstart",
          this.onDocumentTouchStart,
          false
        );
        this.renderer.domElement.addEventListener(
          "touchmove",
          this.onDocumentTouchMove,
          false
        );
      }

      if (this.text3D !== null) {
        this.onObjLoaded();
      }
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      if (!this.isAbout) {
        this.pivot.rotation.y -= 0.03;
        this.pivot.rotation.y +=
          (this.targetRotation - this.pivot.rotation.y) * 0.05;
      }

      this.renderer.render(this.scene, this.camera);
    },
    loadText: function() {
      const textLoader = new THREE.FontLoader();
      const objContainer = new THREE.Object3D();
      textLoader.load(`${this.publicPath}hao.json`, font => {
        const geometry = new THREE.TextBufferGeometry("皓", {
          font: font,
          size: 4,
          height: 0.5
        });
        geometry.computeBoundingBox();
        const geo = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0xa27e7e
        });
        const material = new THREE.MeshPhongMaterial({
          color: 0xa6a6a8
        });
        const mesh = new THREE.Mesh(geometry, material);
        const line = new THREE.LineSegments(geo, lineMaterial);
        if (this.isAbout) {
          mesh.visible = false;
          line.visible = true;
        } else {
          mesh.visible = true;
          line.visible = false;
        }
        line.material.depthTest = false;
        line.material.opacity = 1;
        line.material.transparent = true;
        objContainer.add(mesh);
        objContainer.add(line);
      });
      return objContainer;
    },
    toggleText: function() {
      this.text3D.children[0].visible
        ? ((this.text3D.children[0].visible = false),
          (this.text3D.children[1].visible = true))
        : ((this.text3D.children[0].visible = true),
          (this.text3D.children[1].visible = false));
      navigator.vibrate(100);
    },
    onDocumentMouseDown: function(event) {
      this.renderer.domElement.addEventListener(
        "mousemove",
        this.onDocumentMouseMove,
        false
      );
      this.renderer.domElement.addEventListener(
        "mouseup",
        this.onDocumentMouseUp,
        false
      );
      this.renderer.domElement.addEventListener(
        "mouseout",
        this.onDocumentMouseOut,
        false
      );
      this.mouseXOnMouseDown = event.clientX - this.canvasWidth / 2;
      this.targetRotationOnMouseDown = this.targetRotation;
    },
    onDocumentMouseMove: function(event) {
      this.mouseX = event.clientX - this.canvasWidth / 2;
      this.targetRotation =
        this.targetRotationOnMouseDown +
        (this.mouseX - this.mouseXOnMouseDown) * 0.02;
    },
    onDocumentMouseUp: function() {
      this.renderer.domElement.removeEventListener(
        "mousemove",
        this.onDocumentMouseMove,
        false
      );
      this.renderer.domElement.removeEventListener(
        "mouseup",
        this.onDocumentMouseUp,
        false
      );
      this.renderer.domElement.removeEventListener(
        "mouseout",
        this.onDocumentMouseOut,
        false
      );
    },
    onDocumentMouseOut: function() {
      this.renderer.domElement.removeEventListener(
        "mousemove",
        this.onDocumentMouseMove,
        false
      );
      this.renderer.domElement.removeEventListener(
        "mouseup",
        this.onDocumentMouseUp,
        false
      );
      this.renderer.domElement.removeEventListener(
        "mouseout",
        this.onDocumentMouseOut,
        false
      );
    },
    onDocumentTouchStart: function(event) {
      if (event.touches.length == 1) {
        this.mouseXOnMouseDown = event.touches[0].pageX - this.canvasWidth / 2;
        this.targetRotationOnMouseDown = this.targetRotation;
      }
    },
    onDocumentTouchMove: function(event) {
      if (event.touches.length == 1) {
        this.mouseX = event.touches[0].pageX - this.canvasWidth / 2;
        this.targetRotation =
          this.targetRotationOnMouseDown +
          (this.mouseX - this.mouseXOnMouseDown) * 0.05;
      }
    },
    handleMouseMove: function(event) {
      let tx = -1 + event.clientX / this.canvasWidth / 2;
      let ty = 1 - (event.clientY / this.canvasHeight / 2) * 2;
      this.mousePos = { x: tx, y: ty };
      this.pivot.position.x = this.mousePos.x * 3;
      this.pivot.position.y = this.mousePos.y * 3;
      this.camera.lookAt(this.pivot.position);
    },
    handleTouchmove: function(event) {
      let tx = -1 + (event.touches[0].pageX / this.canvasWidth) * 2;
      let ty = 1 - (event.touches[0].pageX / this.canvasHeight) * 2;
      this.mousePos = { x: tx, y: ty };
      this.pivot.position.x = this.mousePos.x * 4;
      this.pivot.position.y = this.mousePos.y * 2;
      this.camera.lookAt(this.pivot.position);
    },
    onObjLoaded: function() {
      this.$emit("onObjLoaded", true);
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>

<style scoped>
@media (max-width: 960px) {
  #three-container {
    display: flex;
    justify-content: center;
  }
}

.keepShaking {
  animation: leftRightShake 3s infinite;
}

@keyframes leftRightShake {
  0% {
    transform: translate3d(0, 0, 0);
  }
  10% {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: translate3d(0, 0, 0);
  }
  30% {
    transform: translate3d(0, 0, 0);
  }
  40% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(8px, 0, 0);
  }
  60% {
    transform: translate3d(-8px, 0, 0);
  }
  70% {
    transform: translate3d(8px, 0, 0);
  }
  80% {
    transform: translate3d(-8px, 0, 0);
  }
  90% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>