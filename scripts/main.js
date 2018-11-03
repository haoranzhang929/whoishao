import * as THREE from "three";
import OBJLoader from "three-obj-loader";

OBJLoader(THREE);

let triangle;

const container = document.querySelector("#three");

if (container) {
  const canvasWidth = window.innerHeight / 2;
  const canvasHeight = window.innerHeight / 2;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  const cvs = renderer.domElement;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);
  container.appendChild(cvs);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    65,
    canvasWidth / canvasHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 6);

  const ambLight = new THREE.AmbientLight(0xfffff, 1);
  scene.add(ambLight);

  // const loader = new THREE.OBJLoader();

  // let loadTriangle = objPath => {
  //   let container = new THREE.Object3D();
  //   loader.load(objPath, object => {
  //     object.traverse(child => {
  //       if (child instanceof THREE.Mesh) {
  //         child.material = new THREE.MeshNormalMaterial();
  //       }
  //     });
  //     container.add(object);
  //   });
  //   return container;
  // };

  // triangle = loadTriangle("assets/triangle.obj", "triangle");

  // scene.add(triangle);

  // triangle = loadTriangle("assets/triangle.obj", "triangle");

  // scene.add(triangle);

  // /* */
  // let isDragging = false;
  // let previousMousePosition = {
  //   x: 0,
  //   y: 0
  // };
  // cvs.addEventListener("mousedown", () => {
  //   isDragging = true;
  // });
  // cvs.addEventListener("mousemove", e => {
  //   let deltaMove = {
  //     x: e.offsetX - previousMousePosition.x,
  //     y: e.offsetY - previousMousePosition.y
  //   };

  //   if (isDragging) {
  //     var deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
  //       new THREE.Euler(
  //         toRadians(deltaMove.y * 1),
  //         toRadians(deltaMove.x * 1),
  //         0,
  //         "XYZ"
  //       )
  //     );

  //     text.quaternion.multiplyQuaternions(
  //       deltaRotationQuaternion,
  //       text.quaternion
  //     );
  //   }
  //   previousMousePosition = {
  //     x: e.offsetX,
  //     y: e.offsetY
  //   };
  // });

  // function toRadians(angle) {
  //   return angle * (Math.PI / 180);
  // }

  // function toDegrees(angle) {
  //   return angle * (180 / Math.PI);
  // }
  // cvs.addEventListener("mouseup", e => {
  //   isDragging = false;
  // });

  var textLoader = new THREE.FontLoader();

  let loadText = objPath => {
    let container = new THREE.Object3D();
    textLoader.load(objPath, font => {
      var geometry = new THREE.TextGeometry("HAO", {
        font: font,
        size: 2,
        height: 0.5,
        curveSegments: 16
      });
      geometry.computeBoundingBox();
      var material = new THREE.MeshNormalMaterial();
      var mesh = new THREE.Mesh(geometry, material);
      container.add(mesh);
    });
    return container;
  };

  let text = loadText("assets/RobotoBlackRegular.json");
  text.position.x = -2.5;
  text.position.y = -1;

  let pivot = new THREE.Object3D();
  pivot.add(text);
  scene.add(pivot);

  cvs.addEventListener("mousedown", onDocumentMouseDown, false);
  cvs.addEventListener("touchstart", onDocumentTouchStart, false);
  cvs.addEventListener("touchmove", onDocumentTouchMove, false);

  var targetRotation = 0;
  var targetRotationOnMouseDown = 0;

  let mouseX = 0;
  let mouseXOnMouseDown = 0;

  var windowHalfX = canvasWidth / 2;

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

  // // Helper
  // // AxesHelper: X aixs (red) 左右, Y aixs (green) 上下, Z axis (blue) 前后
  // const axesHelper = new THREE.AxesHelper(10);
  // scene.add(axesHelper);
  // // GridHelper
  // const gridHelper = new THREE.GridHelper(10, 10);
  // scene.add(gridHelper);

  const render = () => {
    requestAnimationFrame(render);

    pivot.rotation.y -= 0.03;
    pivot.rotation.y += (targetRotation - pivot.rotation.y) * 0.05;

    renderer.render(scene, camera);
  };

  render();

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
