// src/components/VRScene.js
import React, { useEffect } from 'react';

const VRScene = () => {
  useEffect(() => {
    // Dynamically register the component for toggle
    if (!AFRAME.components['change-model-on-click']) {
      AFRAME.registerComponent('change-model-on-click', {
        init: function () {
          const el = this.el;
          let showingRestored = false;
          el.addEventListener('click', () => {
            showingRestored = !showingRestored;
            el.setAttribute('gltf-model', showingRestored ? '#restoredModel' : '#presentModel');
          });
        },
      });
    }
  }, []);

  return (
    <a-scene embedded vr-mode-ui="enabled: true">
      <a-assets>
        <a-asset-item id="presentModel" src="/models/monument-present.glb"></a-asset-item>
        <a-asset-item id="restoredModel" src="/models/monument-restored.glb"></a-asset-item>
      </a-assets>

      <a-entity
        id="monumentModel"
        gltf-model="#presentModel"
        position="0 0 -4"
        scale="1 1 1"
        class="clickable"
        change-model-on-click
      ></a-entity>

      <a-entity camera look-controls wasd-controls position="0 1.6 0">
        <a-entity
          cursor="fuse: true; fuseTimeout: 1000"
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
          material="color: black; shader: flat"
        ></a-entity>
      </a-entity>

      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  );
};

export default VRScene;
