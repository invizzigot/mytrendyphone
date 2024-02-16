<script setup>

import { onMounted } from "vue";
import Konva from "konva";

let stage = null;
let layer = null;

onMounted(() => {
  stage = new Konva.Stage({
    container: "container",
    width: 300,
    height: 600,
    
  });

  layer = new Konva.Layer();
  stage.add(layer);
  
  let back = new Image();
  back.onload = () => {
    let backImg = new Konva.Image({
      x: 0,
      y: 0,
      width: 300,
      height: 600,
      image: back,
      draggable: false,
      
    });
    layer.add(backImg);
    layer.draw();
  };
  
  back.src = "src/assets/images/s22back.png";

  let notch = new Image();
  notch.onload = () => {
    let notchImg = new Konva.Image({
      x: 0,
      y: 0,
      width: 300,
      height: 600,
      image: notch,
      draggable: false,
      
    });
    notch.src="src/assets/images/s22transparent.png";
    notchImg.setZIndex(5);
    layer.add(notchImg);
    layer.draw();
   
  };
  

  notch.src = "src/assets/images/s22transparent.png";

// Add mouseup and touchend event listeners to the stage
stage.on('dblclick', (e) => {
  
    // Remove all transformers from the layer
    let transformers = layer.find('Transformer').forEach(transformer => transformer.destroy());
    console.log(transformers);

    layer.draw();
    });






});



const handleUpload = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = (e) => {
    let img = new Image();
    img.onload = () => {
      let konvaImg = new Konva.Image({
        x: 20,
        y: 20,
        width: 280,
        height: 200,
        image: img,
        draggable: true,
        listening: true,
      });
      layer.add(konvaImg);

            // Listen for the click event on the image
            konvaImg.on('click', () => {

        let transformer = new Konva.Transformer({
          node: konvaImg,
          keepRatio: true,
          enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
        });
        layer.add(transformer);

        stage.draw();
        
      });



      layer.draw();
    };

    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

  
    
  



</script>

<template>
  <div></div>

  <div id="container" class="border-2 border-sky-500"></div>

  <input type="file" @change="handleUpload" />

  <button @click="exportPNG">Export PNG</button>
</template>
