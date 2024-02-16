import { fabric } from "fabric";
import { ref } from "vue";

export default (await import("vue")).defineComponent({
  data() {
    return {
      brands: [],

      models: [],
      fontColor: "",
      casesTypes: [],
      exportMaskClipImage: {},
      inputText: "",

      PhoneList: {
        Apple: ["Iphone 12", "Iphone 13", "Iphone 14", "Iphone 15"],
        Huawei: ["Mate 10", "Mate 20", "Mate 20 Pro"],
        Samsung: ["Galaxy S22", "Galaxy A40 ", "Galaxy A52"],
        Xiaomi: ["Redmi Note 11", "Xiaomi 12 pro", "Poco X5"],
      },

      counter: ref(1),
      position: ref(630),

      inputText: "",
      textFamily: "",
      selectedBrand: "",
      selectedModel: "",
      selectedCaseType: "",
      selectedImage: [],
      objectsWithName: [],
      images: [
        {
          id: 1,
          name: "xiaomi",
          notch: "src/assets/images/xiaomi-notch.png",
          back: "src/assets/images/xiaomi-back.png",
        },
        {
          id: 2,
          name: "samsung",
          notch: "src/assets/images/s22transparent.png",
          back: "src/assets/images/s22back.png",
        },
        // Add more images as needed
      ],
      canvas: null,
      uploadedImages: [],
      imageIndex: 1,
    };
  },

  methods: {
    moveLeft() {
      this.position -= 400;
    },
    moveRight() {
      this.position += 400;
    },
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
    nextClick() {
      this.moveLeft();
      this.incrementCounter();
    },
    backClick() {
      this.moveRight();
      this.decrementCounter();
    },
    addFontColor(fontcolor) {
      this.fontColor = fontcolor;
    },

    addTextCanvas() {
      const newText = new fabric.Text(this.inputText, {
        // Set the properties for the text object here
        rx: 20,
        ry: 20,
        name: "text",
        fontFamily: this.textFamily,
        fontSize: 30,
        textAlign: "center",
        // globalCompositeOperation: "source-atop",
        fill: this.fontColor,
      });
      newText.setControlsVisibility({
        bl: true,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: true,
        customControl: false,
        customControl2: false,
        customControl3: true,
      });
      newText.set({ originX: "center", originY: "center" });
      this.canvas.add(newText);
      newText.visible = true;
      newText.center();
      this.canvas.add(newText);
      this.canvas.moveTo(newText, 8);

      // this.canvas.renderAll();
    },

    addPhoneToCanvas(caseType) {
      console.log(this.casesTypes[caseType].image_placeholder);
      console.log(this.casesTypes[caseType].image_draw_mask);

      // Logic to add the selected shape to the canvas
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "image" && obj.name === "transparent") {
          this.canvas.remove(obj);
        }

        if (obj && obj.type === "image" && obj.name === "back") {
          this.canvas.remove(obj);
        }

        if (obj && obj.type === "rect" && obj.name === "blank") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });
      this.exportMaskClipImage = this.casesTypes[caseType].image_placeholder;
      const back = fabric.Image.fromURL(
        this.casesTypes[caseType].image_placeholder,
        (background) => {
          // the scaleToHeight property is use to set the image height
          console.log(background.height);
          console.log(background.width);
          background.scaleToHeight(320);
          // scaleToWidth is use to set the image width
          background.scaleToWidth(320);
          background.name = "back";
          background.selectable = false;
          background.globalCompositeOperation = "source-over";
          background.evented = false;
          this.canvas.add(background);
          background.center();
          this.canvas.moveTo(background, 1);

          this.canvas.renderAll();
        },
        { crossOrigin: "anonymous" }
      );

      const trans = fabric.Image.fromURL(
        this.casesTypes[caseType].image_draw_mask,
        (img) => {
          // the scaleToHeight property is use to set the image height
          img.scaleToHeight(320);
          // scaleToWidth is use to set the image width
          img.scaleToWidth(320);
          img.left;
          img.top;
          img.evented = false;
          img.selectable = false;
          img.evented = false;
          img.name = "transparent";

          // img.globalCompositeOperation = "source-atop";
          this.canvas.add(img);

          img.center();
          this.canvas.moveTo(img, 9);
          this.canvas.renderAll();
        },
        { crossOrigin: "anonymous" }
      );
    },

    addUploadedImageToCanvas(index) {
      const selectedImage = this.uploadedImages[index];
      const img = new Image();
      img.onload = () => {
        const fabricImg = new fabric.Image(img, {
          // Set the properties for the fabric image here
          left: 200,
          top: 100,
          scaleX: 0.1,
          scaleY: 0.1,
          selectable: true,
          hasControls: true,
          hasBorders: true,
          perPixelTargetFind: true,
          // globalCompositeOperation: "xor",
          centerH: true,
          centerV: true,
          name: "canvas image",
        });
        this.canvas.add(fabricImg);
        this.canvas.moveTo(fabricImg, 2);
        this.canvas.setActiveObject(fabricImg);
        this.canvas.renderAll();
      };
      img.src = selectedImage.url;
    },

    addClipPathToSelectedObject(index) {
      const selectedObject = this.canvas.getActiveObject();
      if (!selectedObject || selectedObject.type === null) {
        return;
      }

      if (selectedObject.type === "rect" && selectedObject.name === "pattern") {
        const selectedImage = this.uploadedImages[index];
        const img = new Image();
        // adding image to canvas
        img.onload = () => {
          const clipRect = new fabric.Rect({
            width: selectedObject.width,
            height: selectedObject.height,
            top: selectedObject.top,
            left: selectedObject.left,
            absolutePositioned: true,
            fill: "",
            perPixelTargetFind: false,
            globalCompositeOperation: "destination-out",
            hasBorders: true,
            borderColor: "#3ff4ff",
            clipPath: selectedObject.clipPath,
            evented: false,
          });

          const fabricImg = new fabric.Image(img, {
            left: selectedObject.left + selectedObject.width / 2,
            top: selectedObject.top + selectedObject.height / 2,

            scaleX: 0.12,
            scaleY: 0.12,
            originX: "center",
            originY: "center",
            cornerSize: this.canvas.width * 0.05,
            clickable: true,
            targetFindTolerance: 5,
            selectable: true,
            hasControls: true,
            hasBorders: true,
            perPixelTargetFind: true,
            centerH: true,
            centerV: true,
            name: "canvas image",
            clipPath: clipRect,
            globalCompositeOperation: "source-atop",
          });

          console.log(selectedImage.width);
          console.log(selectedImage.height);
          fabricImg.setControlsVisibility({
            bl: true,
            br: false,
            tl: false,
            tr: false,
            mb: false,
            ml: false,
            mr: false,
            mt: false,
            mtr: true,
            customControl: false,
            customControl2: false,
            customControl3: true,
          });

          this.canvas.add(fabricImg);

          this.canvas.moveTo(fabricImg, 4);

          const objects = this.canvas.getObjects();
          objects.forEach((obj, index) => {
            if (obj && obj.type === "image" && obj.name === "transparent") {
              this.canvas.remove(obj);
              this.canvas.moveTo(obj, 9);
            }
          });

          objects.forEach((obj, index) => {
            console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
          });

          this.canvas.renderAll();
        };
        img.src = selectedImage.url;
        img.width = selectedImage.width;
        img.height = selectedImage.height;
      }
    },

    clearInput1() {
      this.$refs.fileInput1.value = null;
    },
    clearInput() {
      this.$refs.fileInput.value = null;
    },

    addCollage() {
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
      });

      var rectangle = new fabric.Rect({
        top: 23,
        left: 120,
        width: 210,
        height: 215,
        selectable: true,
        name: "pattern",
        hasControls: true,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.1)",
        // strokeDashArray: [8, 16],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      var rectangle2 = new fabric.Rect({
        top: 240,
        left: 120,
        width: 210,
        height: 240,
        selectable: true,
        name: "pattern",
        hasControls: true,
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.1)",
        strokeDashArray: [8, 16],
        globalCompositeOperation: "source-atop",
        hoverCursor: "pointer",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle2.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      // rectangle.on("mousedblclick", function (options) {
      //   uploadButton1.click();
      // });
      rectangle.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          this.canvas.renderAll();
        }
      });

      rectangle2.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          this.canvas.renderAll();
        }
      });
      // rectangle2.on("mousedblclick", function (options) {
      //   uploadButton.click();
      // });
      this.canvas.add(rectangle, rectangle2);
      this.canvas.moveTo(rectangle, 2);
      this.canvas.moveTo(rectangle2, 3);
      this.canvas.renderAll();
    },
    addCollage1() {
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
      });

      var rectangle0 = new fabric.Rect({
        top: 30,
        left: 115,
        width: 315,
        height: 435,

        name: "pattern",
        selectable: true,
        hasControls: true,
        hasBorders: false,
        hoverCursor: "pointer",
        fill: "rgba(5, 5, 5, 0.1)",
        hoverColor: "blue",
        visible: true,
        cornerStyle: "round",
        rx: 20, // Horizontal radius for rounded corners
        ry: 20,
        strokeDashArray: [8, 16],
        globalCompositeOperation: "source-atop",
        stroke: "rgba(5, 5, 5, 1)",
        ActiveSelection: true,
        lockMovementX: true, // Object cannot be moved horizontally
        lockMovementY: true, // Object cannot be moved vertically
      });

      // rectangle0.scaleToHeight(100);
      // rectangle0.scaleToWidth(100);
      rectangle0.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,

        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      rectangle0.on("mousedblclick", function (options) {});
      this.canvas.setActiveObject(rectangle0);
      rectangle0.fire("mouse:down", function (options) {});

      rectangle0.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          this.canvas.renderAll();
        }
      });

      this.canvas.add(rectangle0);
      this.canvas.moveTo(rectangle0, 2);
    },
    addCollage2() {
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
      });

      var rectangle0 = new fabric.Rect({
        top: 30,
        left: 115,
        width: 315,
        height: 435,

        name: "pattern",
        selectable: true,
        hasControls: true,
        hasBorders: false,
        hoverCursor: "pointer",
        fill: "rgba(5, 5, 5, 0.1)",
        hoverColor: "blue",
        visible: true,
        cornerStyle: "round",
        rx: 20, // Horizontal radius for rounded corners
        ry: 20,
        strokeDashArray: [8, 16],
        globalCompositeOperation: "source-atop",
        stroke: "rgba(5, 5, 5, 1)",
        ActiveSelection: true,
        lockMovementX: true, // Object cannot be moved horizontally
        lockMovementY: true, // Object cannot be moved vertically
      });

      // rectangle0.scaleToHeight(100);
      // rectangle0.scaleToWidth(100);
      rectangle0.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,

        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      rectangle0.on("mousedblclick", function (options) {});
      this.canvas.setActiveObject(rectangle0);
      rectangle0.fire("mouse:down", function (options) {});

      rectangle0.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          this.canvas.renderAll();
        }
      });

      this.canvas.add(rectangle0);
      this.canvas.moveTo(rectangle0, 2);
    },

    removeAllRect() {
      this.canvas.forEachObject(function (object) {
        if (object.type === "rect") {
          canvas.remove(object); // Remove the rectangle object from the canvas
        }
      });
      canvas.renderAll();
    },

    async fetchBrandsData() {
      try {
        const response = await fetch(
          "https://covers.mtpdev3.com/api/1.0/brands?language_code=eu&device_id=1"
        );
        const data = await response.json();
        this.brands = data; // Update the brands data in the component
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async fetchModelsData(brand) {
      try {
        const modelType = `https://covers.mtpdev3.com/api/1.0/models?language_code=eu&device_id=1&brand_id=${brand}`;

        const response = await fetch(modelType);
        const data = await response.json();
        this.models = data; // Update the brands data in the component
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async fetchCaseTypeData(model) {
      try {
        const caseType = `https://covers.mtpdev3.com/api/1.0/types?language_code=eu&model_id=${model}`;
        const response = await fetch(caseType);
        const data = await response.json();
        this.casesTypes = data; // Update the brands data in the component
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    getPhoneModels(brand) {
      const modelDropDown = this.$refs.phoneModel;

      if (brand === "") {
        modelDropDown.disabled = true;
        modelDropDown.selectedIndex = 0;
        return false;
      }

      modelDropDown.disabled = false;
      this.fetchModelsData(brand);
    },
    getPhoneCase(model) {
      const caseDropDown = this.$refs.phoneCase;
      console.log(model);
      if (model === "") {
        caseDropDown.disabled = true;
        caseDropDown.selectedIndex = 0;
        return false;
      }

      caseDropDown.disabled = false;
      this.fetchCaseTypeData(model);
    },

    addImageToCanvas() {
      if (this.selectedImage) {
        fabric.Image.fromURL(this.selectedImage, (img) => {
          // Customize the image properties if needed
          img.scaleToHeight(250);
          // scaleToWidth is use to set the image width
          img.scaleToWidth(250);

          img.selectable = false;
          this.canvas.clear();
          this.canvas.moveTo(img, 1);
          this.canvas.add(img);
          img.center();

          this.canvas.renderAll();
        });
      }
    },

    handleImageUpload(event) {
      const files = event.target.files;

      const remainingSlots = 8 - this.uploadedImages.length;
      const filesToUpload = Array.from(files).slice(0, remainingSlots);

      for (let i = 0; i < filesToUpload.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImages.push({
            url: e.target.result,
            id: this.imageIndex + 1,
          });
          // console.log(this.imageIndex);
          this.imageIndex = this.imageIndex + 1;
          console.log(this.imageIndex);
          // const img = new Image();
          // img.onload = () => {
          //   const clipRect2 = new fabric.Rect({
          //     width: 500,
          //     height: 260,
          //     top: 250,
          //     left: 0,
          //     absolutePositioned: true,
          //     cornerStyle: "round",
          //     backgroundColor: "#00CCEE",
          //     fill: "",
          //     strokeWidth: 5,
          //     stroke: "red",
          //     hasBorders: true,
          //     borderColor: "#3ff4ff",
          //   });
          //   const fabricImg = new fabric.Image(img, {
          //     left: 200,
          //     top: 300,
          //     scaleX: 0.1,
          //     scaleY: 0.1,
          //     clipPath: clipRect2,
          //     selectable: true,
          //     hasControls: true,
          //     hasBorders: true,
          //     perPixelTargetFind: true,
          //     centerH: true,
          //     centerV: true,
          //     name: "canvas image",
          //   });
          //   //  this.imageGroup.addWithUpdate(fabricImg);
          //   //  this.canvas.moveTo(this.imageGroup,2);
          //   this.canvas.add(fabricImg);
          //   this.canvas.setActiveObject(fabricImg);
          //   this.canvas.moveTo(fabricImg, this.imageIndex);
          //   // fabric.Image.fromURL(
          //   //   "src/assets/images/s22transparent.png",
          //   //   (img) => {
          //   //     // the scaleToHeight property is use to set the image height
          //   //     img.scaleToHeight(250);
          //   //     // scaleToWidth is use to set the image width
          //   //     img.scaleToWidth(250);
          //   //     img.left;
          //   //     img.visible = true;
          //   //     img.top;
          //   //     img.selectable = false;
          //   //     img.globalCompositeOperation = "destination-out";
          //   //     this.canvas.add(img);
          //   //     img.center();
          //   //     this.canvas.moveTo(img, 10);
          //   //     this.canvas.render();
          //   //   }
          //   // );
          //   const objects = this.canvas.getObjects();
          //   objects.forEach((obj, index) => {
          //     console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
          //   });
          //   console.log(this.uploadedImages);
          // };
          // img.src = e.target.result;
        };
        reader.readAsDataURL(filesToUpload[i]);
      }
    },
    handleImageUpload1(event) {
      const files = event.target.files;

      const remainingSlots = 8 - this.uploadedImages.length;
      const filesToUpload = Array.from(files).slice(0, remainingSlots);

      for (let i = 0; i < filesToUpload.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImages.push({
            url: e.target.result,
            id: this.imageIndex + 1,
          });
          console.log(this.imageIndex);
          this.imageIndex = this.imageIndex + 1;
          console.log(this.imageIndex);
          const img = new Image();
          img.onload = () => {
            const clipRect2 = new fabric.Rect({
              width: 500,
              height: 250,
              centerH: true,
              centerH: true,
              objectCaching: false,
              top: 0,
              left: 0,
              absolutePositioned: true,

              backgroundColor: "#00CCEE",
              fill: "",
              strokeWidth: 5,
              stroke: "red",
              hasBorders: true,
              borderColor: "#3ff4ff",
            });

            const fabricImg = new fabric.Image(img, {
              left: 200,
              top: 100,
              scaleX: 0.1,
              scaleY: 0.1,
              clickable: true,
              // clipPath: clipRect2,
              objectCaching: false,
              selectable: true,
              hasControls: true,
              hasBorders: true,
              perPixelTargetFind: true,
              centerH: true,
              centerV: true,
              name: "canvas image",
            });

            //  this.imageGroup.addWithUpdate(fabricImg);
            //  this.canvas.moveTo(this.imageGroup,2);
            this.canvas.add(fabricImg);
            this.canvas.setActiveObject(fabricImg);

            this.canvas.moveTo(fabricImg, this.imageIndex);
            // fabric.Image.fromURL(
            //   "src/assets/images/s22transparent.png",
            //   (img) => {
            //     // the scaleToHeight property is use to set the image height
            //     img.scaleToHeight(250);
            //     // scaleToWidth is use to set the image width
            //     img.scaleToWidth(250);
            //     img.left;
            //     img.visible = true;
            //     img.top;
            //     img.selectable = false;
            //     img.globalCompositeOperation = "destination-out";
            //     this.canvas.add(img);
            //     img.center();
            //     this.canvas.moveTo(img, 10);
            //     this.canvas.render();
            //   }
            // );
            const objects = this.canvas.getObjects();
            objects.forEach((obj, index) => {
              console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
            });
            console.log(this.uploadedImages);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(filesToUpload[i]);
      }
    },

    addButton() {
      this.$refs.uploadButton.click();
    },

    selectImage(index) {
      this.canvas.setActiveObject(this.canvas.item(index));
      this.canvas.renderAll();
    },

    exportToPNG() {
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "image" && obj.name === "transparent") {
          this.canvas.remove(obj);
        }

        if (obj && obj.type === "image" && obj.name === "back") {
          this.canvas.remove(obj);
        }

        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });
      this.cropMask();
      setTimeout(() => {
        this.createLink();
      }, 1000);
    },

    cropMask(caseType) {
      fabric.Image.fromURL(
        this.exportMaskClipImage,
        (img) => {
          // the scaleToHeight property is use to set the image height
          img.scaleToHeight(320);
          // scaleToWidth is use to set the image width
          img.scaleToWidth(320);

          img.visible = true;

          img.selectable = false;
          img.globalCompositeOperation = "destination-out";

          this.canvas.add(img);
          this.canvas.moveTo(img, 10);

          img.center();
          this.canvas.renderAll();
        },
        { crossOrigin: "anonymous" }
      );
    },

    createLink() {
      // Export the canvas to a PNG image
      const dataURL = this.canvas.toDataURL({
        format: "png",
        quality: 3,
      });

      // Create a link element to download the PNG image
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "canvas_image.png";
      // Trigger the download
      link.click();
    },

    zoomInSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      console.log(selectedObject.scaleX);
      console.log(this.canvas.maxScaleLimit);
      if (selectedObject && selectedObject.type === "image") {
        if (selectedObject.scaleX <= 0.2) {
          selectedObject.scaleX *= 1.1;
          selectedObject.scaleY *= 1.1;
          selectedObject.setCoords();
          this.canvas.renderAll();
        } else {
          selectedObject.scaleX *= 1;
          selectedObject.scaleY *= 1;
          this.canvas.renderAll();
        }
      }
    },
    zoomOutSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      if (selectedObject && selectedObject.type === "image") {
        if (selectedObject.scaleX >= 0.1) {
          selectedObject.scaleX *= 0.9;
          selectedObject.scaleY *= 0.9;
          this.canvas.renderAll();
        } else {
          selectedObject.scaleX *= 1;
          selectedObject.scaleY *= 1;
          this.canvas.renderAll();
        }
      }
    },

    render(ctx, left, top, styleOverride, fabricObject) {
      fabric.Image.fromURL("src/assets/images/add-square.svg", function (img) {
        img.scaleToWidth(32);
        img.scaleToHeight(32);
        ctx.drawImage(img._element, left - 16, top - 16, 32, 32);
      });
    },

    bringForward() {
      // Bring the selected object forward in the stack order
      const selectedObject = this.canvas.getActiveObject();
      if (selectedObject) {
        this.canvas.bringForward(selectedObject);
      }
    },
    sendBackwards() {
      // Send the selected object backward in the stack order
      const selectedObject = this.canvas.getActiveObject();
      if (selectedObject) {
        this.canvas.sendBackwards(selectedObject);
      }
    },
    deleteSelectedImage() {
      // Delete the selected image from the canvas
      const selectedObject = this.canvas.getActiveObject();
      if (selectedObject) {
        // var index = this.canvas.getObjects().indexOf(selectedObject);
        // this.uploadedImages.splice(index - 2, 1);
        // this.canvas.moveTo(selectedObject, 2);
        this.canvas.remove(selectedObject);
        // console.log(this.uploadedImages);
        // this.imageIndex = this.imageIndex - 1;
        // if (this.uploadedImages.length === 0) {
        //   this.imageIndex = 1;
        // }
      }
    },
  },
  created() {
    this.fetchBrandsData();
    this.fetchModelsData();
    this.fetchCaseTypeData();
  },
  mounted() {
    this.canvas = new fabric.Canvas(
      this.$refs.canvasRef,
      {
        width: 450,
        height: 500,
        // minScaleLimit: 0.1, // Set the minimum scale limit
        // maxScaleLimit: 0.3, // Set the maximum scale limit
        // backgroundColor: "gray",
        getContext: "2d",
        // cornerStyle: "round",
        // objectCaching: true,
        willReadFrequently: true,
        // renderOnAddRemove: false,
        // isDrawingMode: false,
        // controlsAboveOverlay: true,
        // preserveObjectStacking: true,48
        selectable: false,
        selection: false,
      },
      { passive: true }
    );

    // const ctx = this.canvas.getContext("2d");
    this.canvas.on("mousedown", () => {}, { passive: true });
    this.canvas.on(
      "object:added",
      () => {
        //workaround - selecting all objects to enable object controls
        let objects = this.canvas.getObjects();
        var selection = new fabric.ActiveSelection(objects, {
          canvas: this.canvas,
        });
        this.canvas.discardActiveObject();
        this.canvas.setActiveObject(selection); //selecting all objects...
        this.canvas.discardActiveObject(); //...and deselecting them

        // this.canvas.renderAll();
      },
      { passive: true }
    );

    this.canvas.on(
      "object:moving",
      (object) => {
        //workaround - selecting all objects to enable object controls
        // let objects = this.canvas.getObjects();
        // var selection = new fabric.ActiveSelection(objects, {
        //   canvas: this.canvas,
        // });
        // this.canvas.discardActiveObject();
        // this.canvas.setActiveObject(selection); //selecting all objects...
        // this.canvas.discardActiveObject(); //...and deselecting them
        // object.target.hasControls = true;
        // object.target.globalCompositeOperation = "destination-out";
        // this.canvas.renderOnAddRemove = "true";
        // this.canvas.renderAll();
        object.target.hasControls = true;
        object.target.setControlsVisibility({
          bl: true,
          br: false,
          tl: false,
          tr: false,
          mb: false,
          ml: false,
          mr: false,
          mt: false,
          mtr: true,
          customControl: false,
          customControl2: false,
          customControl3: true,
        });
        this.canvas.moveTo(object.target, 8);
        const objects = this.canvas.getObjects();
        objects.forEach((obj, index) => {
          if (obj && obj.type === "image" && obj.name === "transparent") {
            //mask over image canvas
            // obj.globalCompositeOperation = "destination-out";
            this.canvas.remove(obj);
            this.canvas.moveTo(obj, 9);
          }
        });

        // objects.forEach((obj, index) => {
        //   if (obj && obj.type === "image" && obj.name === "back") {
        //     // obj.globalCompositeOperation = "destination-atop";
        //     this.canvas.remove(obj);
        //     this.canvas.moveTo(obj, 1);
        //   }
        // });
        objects.forEach((obj, index) => {
          console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
        });
      },
      { passive: true }
    );

    const activeObject = this.canvas.getActiveObject();

    // Check if an active object exists
    if (activeObject) {
      // Enable dragging for the active object
      activeObject.selectable = true;
      // this.canvas.renderAll();
    }

    const clipRect = new fabric.Rect({
      width: 222,
      height: 480,

      rx: 20,
      ry: 20,
      top: -20,
      left: 0,
      name: "pattern",
      // globalCompositeOperation: "destination-out",
      selectable: false,
      fill: "rgba(5, 255, 255, 0.01)",

      cornerStyle: "round",
      strokeDashArray: [8, 16],
      stroke: "rgba(5, 5, 5, 1)",
      lockMovementX: true, // Object cannot be moved horizontally
      lockMovementY: true,
    });

    this.canvas.add(clipRect);
    clipRect.visible = true;
    clipRect.center();
    // this.canvas.clipPath = clipRect;
    this.canvas.moveTo(clipRect, 1);

    this.canvas.renderAll();

    this.canvas.controlsAboveOverlay = true;

    this.canvas.renderAll();
    // Create a custom control as an icon
    const customControl = new fabric.Control({
      x: 0,
      y: 0,
      offsetY: 0,
      offsetX: 0,

      // cursorStyle: "crosshair",
      // actionHandler: fabric.controlsUtils.rotationWithSnapping,
      // actionName: "rotate",
      // mouseUpHandler: this.zoomInSelectedImage,
      render: this.render,
    });

    // Create a custom control as an icon
    const customControl2 = new fabric.Control({
      x: 0,
      y: 0,
      offsetY: 0,
      offsetX: 0,

      cursorStyle: "crosshair",
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",
      // mouseUpHandler: this.zoomInSelectedImage,
      render: function (ctx, left, top, styleOverride, fabricObject) {
        fabric.Image.fromURL("src/assets/images/zoom-in.svg", function (img) {
          img.scaleToWidth(32);
          img.scaleToHeight(32);
          ctx.drawImage(img._element, left - 16, top - 16, 32, 32);
        });
      },
    });

    const customControl3 = new fabric.Control({
      x: -0.5,
      y: -0.5,
      offsetY: 0,
      offsetX: 0,
      cursorStyle: "pointer",
      mouseDownHandler: this.deleteSelectedImage,

      render: function (ctx, left, top, styleOverride, fabricObject) {
        fabric.Image.fromURL(
          "src/assets/images/close-square-black.svg",
          function (img) {
            ctx.save();
            // img.scaleToWidth(32);
            // img.scaleToHeight(32);
            ctx.drawImage(img._element, left - 16, top - 16, 32, 32);
            ctx.restore();
          }
        );
      },
    });
    const customControl4 = new fabric.Control({
      x: -0.5,
      y: -0.5,
      offsetY: 0,
      offsetX: 0,
      cursorStyle: "pointer",
      mouseDownHandler: this.zoomInSelectedImage,

      render: function (ctx, left, top, styleOverride, fabricObject) {
        fabric.Image.fromURL(
          "src/assets/images/close-square-black.svg",
          function (img) {
            ctx.save();
            // img.scaleToWidth(32);
            // img.scaleToHeight(32);
            ctx.drawImage(img._element, left - 16, top - 16, 32, 32);
            ctx.restore();
          }
        );
      },
    });

    fabric.Object.prototype.controls.customControl = customControl;
    fabric.Object.prototype.controls.customControl2 = customControl2;
    fabric.Object.prototype.controls.customControl3 = customControl3;
    fabric.Object.prototype.transparentCorners = true;
    fabric.Object.prototype.cornerColor = "black";
    fabric.Object.prototype.borderColor = "rgba(5, 5, 5, 0.5)";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerSize = 16;
    fabric.Object.prototype.strokeWidth = 2;
    fabric.Object.prototype.centeredScaling = true;
    // fabric.Object.prototype.evented = true;
    fabric.Object.prototype.centeredRotation = true;
    fabric.Object.prototype.perPixelTargetFind = true;
    // fabric.Object.prototype.matrixCache = true;
    fabric.Object.prototype.controls.mtr = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: 0,
      offsetX: 0,

      cursorStyle: "pointer",
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",

      render: function (ctx, left, top, styleOverride, fabricObject) {
        fabric.Image.fromURL(
          "src/assets/images/rotate-square.svg",
          function (img) {
            img.scaleToWidth(32);
            img.scaleToHeight(32);
            ctx.drawImage(img._element, left - 16, top - 16, 32, 32);
          }
        );
      },
    });
    fabric.Object.prototype.controls.bl = new fabric.Control({
      x: -0.5,
      y: 0.5,
      offsetY: 0,
      offsetX: 0,
      cursorStyle: "pointer",
      actionHandler: fabric.controlsUtils.scalingEqually,
      actionName: "scale",

      render: function (ctx, left, top, styleOverride, fabricObject) {
        fabric.Image.fromURL(
          "src/assets/images/arrow-scale-square.svg",
          function (img) {
            img.scaleToWidth(32);
            img.scaleToHeight(32);
            ctx.drawImage(img._element, left - 16, top - 16, 32, 32);
          }
        );
      },
    });

    // this.canvas.on("object:moving", function (object) {
    //   object.target.setCoords();
    //   this.canvas.renderAll();
    // const canvasWidth = 550;
    // const canvasHeight = 550;
    // const objectLeft = object.target.aCoords.tl.x;
    // const objectTop = object.target.oCoords.tl.y;
    // const objectRight = object.target.oCoords.br.x;
    // const objectBottom = object.target.oCoords.br.y;
    // console.log(objectLeft);
    // if (
    //   objectLeft < 0 ||
    //   objectTop < 0 ||
    //   objectRight > canvasWidth ||
    //   objectBottom > canvasHeight
    // ) {
    //   object.target.set({
    //     top: 250,
    //     left: 250,
    //     fill: "red",
    //     lockMovementX: true,
    //     lockMovementY: true,
    //   });
    //   object.target.fire("mouseup");
    //   this.canvas.discardActiveObject();
    //   this.canvas.requestRenderAll();
    //   object.target.set({
    //     top: 250,
    //     left: 250,
    //     scaleX: 0.12,
    //     scaleY: 0.12,
    //     lockMovementX: false,
    //     lockMovementY: false,
    //   });
    //   object.target.fire("mouseup");
    //   this.canvas.dis;
    //   this.canvas.requestRenderAll();
    // } else {
    //   console.log("Object OK");
    // }
    // });
    // this.canvas.getObjects().forEach((obj, index) => {
    //   console.log(`Item ${index}: ${obj.type} Name: ${obj.name}`);
    // });
  },
});
