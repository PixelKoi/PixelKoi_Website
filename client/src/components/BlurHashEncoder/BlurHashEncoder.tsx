import React, { useEffect, useRef, useState, useCallback } from "react";
import { decode, encode } from "blurhash";
import { Blurhash } from "react-blurhash";
import Header from "../../Pages/Landing Page/components/Header/Header";

// Goes through an array of image locations, creates hashObjects
// hashObject eg; const hashObjects = { url: src, blurHash: blurhash };
const BlurHashEncoder = (props: { images: Array<string> }) => {
  const [blurhash, setBlurhash] = useState("");

  /* loads an image from given source URL and returns a promise that resolves to the loaded image
  src attribute gives URL when image successfully loaded, promise resolves `img` object. */
  const loadImage = async (src: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (...args) => reject(args);
      img.src = src;
    });

  // Creates canvas with same dimensions as input Image in loadImage
  const getImageData = (image: HTMLImageElement): ImageData => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context?.drawImage(image, 0, 0);
    return context!.getImageData(0, 0, image.width, image.height);
  };

  // encode into a blurHash
  const encodeImageToBlurhash = async (imageUrl: string): Promise<string> => {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image);
    return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  };

  const hashImage = async (src: any) => {
    const img = new Image();
    img.src = src;
    await img.decode();
    const canvas = document.createElement("canvas");
    const ctx: any = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, img.width, img.height);
    const blurhash = encode(
      imageData.data,
      imageData.width,
      imageData.height,
      4,
      4
    );
    setBlurhash(blurhash);
    console.log(blurhash);
    console.log(src);
    // Creating image url and respective blurhash objects
    const hashObjects = { url: src, blurHash: blurhash };
    const hashPostOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ images: hashObjects }),
    };
    fetch("http://localhost:8000/api/images", hashPostOptions)
      .then((resp) => resp.json())
      .then((data) => console.log(data.images))
      .catch((error) => console.error(error));
  };
};

export default BlurHashEncoder;
