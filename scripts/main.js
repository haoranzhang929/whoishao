import * as THREE from "three";
import OBJLoader from "three-obj-loader";
import { Perlin } from "./Perlin";

OBJLoader(THREE);

const container = document.querySelector("#three");
const container2 = document.querySelector("#three2");

let isAboutPage;

if (container) {
  isAboutPage = false;
  startThree(container, isAboutPage);
} else if (container2) {
  isAboutPage = true;
  startThree(container2, isAboutPage);
}

function startThree(container, isAboutPage) {
  const canvasWidth = window.innerHeight / 2;
  const canvasHeight = window.innerHeight / 2;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  const cvs = renderer.domElement;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);
  container.appendChild(cvs);

  const scene = new THREE.Scene();
  if (isAboutPage) {
    scene.fog = new THREE.Fog(scene.background, 1, 150);
  }
  const camera = new THREE.PerspectiveCamera(
    65,
    canvasWidth / canvasHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 6);
  if (isAboutPage) {
    camera.position.set(0, 0, 10);
  }

  const ambLight = new THREE.AmbientLight(0xfffff, 1);
  scene.add(ambLight);

  const textLoader = new THREE.FontLoader();

  let loadText = objPath => {
    let container = new THREE.Object3D();
    textLoader.load(objPath, font => {
      let geometry = new THREE.TextGeometry("皓", {
        font: font,
        size: 3.6,
        height: 0.5
      });
      geometry.computeBoundingBox();
      const geo = new THREE.EdgesGeometry(geometry);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x2962ff
      });
      const material = new THREE.MeshNormalMaterial();

      const mesh = new THREE.Mesh(geometry, material);
      const line = new THREE.LineSegments(geo, lineMaterial);

      line.material.depthTest = false;
      line.material.opacity = 1;
      line.material.transparent = true;
      line.visible = false;

      const cvsClick = document.querySelector("canvas");
      const shakingEl = document.querySelector(".visual");

      cvsClick.addEventListener("click", () => {
        if (shakingEl.classList.contains("keepShaking")) {
          shakingEl.classList.remove("keepShaking");
        }
        toggleMeshLine();
      });

      function toggleMeshLine() {
        container.children[0].visible
          ? ((container.children[0].visible = false),
            (container.children[1].visible = true))
          : ((container.children[0].visible = true),
            (container.children[1].visible = false));
      }
      container.add(mesh);
      container.add(line);
    });
    return container;
  };

  let text = loadText("assets/DFPKingGothicGB-Thin-2.json");
  text.position.x = -2.6;
  text.position.y = -1.7;

  let pivot = new THREE.Object3D();
  pivot.add(text);
  scene.add(pivot);

  let windowHalfX = canvasWidth / 2;

  // Helper
  // const axesHelper = new THREE.AxesHelper(10);
  // scene.add(axesHelper);
  // const gridHelper = new THREE.GridHelper(10, 10);
  // scene.add(gridHelper);

  if (!isAboutPage) {
    cvs.addEventListener("mousedown", onDocumentMouseDown, false);
    cvs.addEventListener("touchstart", onDocumentTouchStart, false);
    cvs.addEventListener("touchmove", onDocumentTouchMove, false);

    let targetRotation = 0;
    let targetRotationOnMouseDown = 0;

    let mouseX = 0;
    let mouseXOnMouseDown = 0;

    function onDocumentMouseDown(event) {
      cvs.addEventListener("mousemove", onDocumentMouseMove, false);
      cvs.addEventListener("mouseup", onDocumentMouseUp, false);
      cvs.addEventListener("mouseout", onDocumentMouseOut, false);
      mouseXOnMouseDown = event.clientX - windowHalfX;
      targetRotationOnMouseDown = targetRotation;
    }

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      targetRotation =
        targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
    }

    function onDocumentMouseUp() {
      cvs.removeEventListener("mousemove", onDocumentMouseMove, false);
      cvs.removeEventListener("mouseup", onDocumentMouseUp, false);
      cvs.removeEventListener("mouseout", onDocumentMouseOut, false);
    }

    function onDocumentMouseOut() {
      cvs.removeEventListener("mousemove", onDocumentMouseMove, false);
      cvs.removeEventListener("mouseup", onDocumentMouseUp, false);
      cvs.removeEventListener("mouseout", onDocumentMouseOut, false);
    }

    function onDocumentTouchStart(event) {
      if (event.touches.length == 1) {
        mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
        targetRotationOnMouseDown = targetRotation;
      }
    }

    function onDocumentTouchMove(event) {
      if (event.touches.length == 1) {
        mouseX = event.touches[0].pageX - windowHalfX;
        targetRotation =
          targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;
      }
    }

    const render = () => {
      requestAnimationFrame(render);

      pivot.rotation.y -= 0.03;
      pivot.rotation.y += (targetRotation - pivot.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    render();
  } else {
    const date = new Date();
    const pn = new Perlin("rnd" + date.getTime());

    let ground, ground2;

    const addGround = () => {
      let groundMat = new THREE.MeshBasicMaterial({
        color: 0x768fff
      });
      let plane = new THREE.PlaneGeometry(200, 5000, 100, 500);
      ground = new THREE.Mesh(plane, groundMat);
      for (let i = 0, l = plane.vertices.length; i < l; i++) {
        let vertex = plane.vertices[i];
        let value = pn.noise(vertex.x / 10, vertex.y / 20, 0);
        vertex.z = value * 10;
      }

      plane.computeFaceNormals();
      plane.computeVertexNormals();
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -15; //lower it
      ground2 = ground.clone();
      ground.position.z = -2400;
      ground2.position.z = -7300;
      ground.doubleSided = true;
      scene.add(ground);
      scene.add(ground2);
    };

    addGround();

    let mousePos = { x: 0, y: 0 };
    const handleMouseMove = event => {
      let tx = -1 + (event.clientX / canvasWidth / 2) * 2;
      let ty = 1 - (event.clientY / canvasHeight / 2) * 2;
      mousePos = { x: tx, y: ty };
      pivot.position.x = mousePos.x * 4;
      pivot.position.y = mousePos.y * 2;
      camera.lookAt(pivot.position);
    };

    const handleTouchmove = event => {
      let tx = -1 + (event.touches[0].pageX / canvasWidth) * 2;
      let ty = 1 - (event.touches[0].pageX / canvasHeight) * 2;
      mousePos = { x: tx, y: ty };
      pivot.position.x = mousePos.x * 4;
      pivot.position.y = mousePos.y * 2;
      camera.lookAt(pivot.position);
    };

    document.addEventListener("mousemove", handleMouseMove, false); //
    document.addEventListener("touchmove", handleTouchmove, false);

    const render = () => {
      requestAnimationFrame(render);

      ground.position.z += 0.8;
      ground2.position.z += 0.8;

      if (ground.position.z > 2500) {
        ground.position.z = -7300;
      }
      if (ground2.position.z > 2500) {
        ground2.position.z = -7300;
      }

      renderer.render(scene, camera);
    };

    render();
  }

  // Window Resize Handler
  window.addEventListener(
    "resize",
    () => {
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerHeight / 2, window.innerHeight / 2);
    },
    false
  );
}

class TypeText {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    let i = this.loopNum % this.toRotate.length;
    let fullText = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullText.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullText) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      that.tick();
    }, delta);
  }
}

window.onload = () => {
  let elements = document.querySelectorAll(".typewrite");
  for (let i of elements) {
    let toRotate = i.getAttribute("data-type");
    let period = i.getAttribute("data-period");
    if (toRotate) {
      new TypeText(i, JSON.parse(toRotate), period);
    }
  }
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.03em solid #000; padding-right: 5px }";
  document.body.appendChild(css);
};
