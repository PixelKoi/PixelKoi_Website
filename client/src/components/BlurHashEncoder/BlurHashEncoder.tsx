import React, { useEffect, useRef, useState, useCallback } from "react";
import { decode, encode } from "blurhash";
import { Blurhash } from "react-blurhash";
import headerImage from "../../assets/Home/box.jpg";
import laptop from "../../assets/Home/code.webp";
import tablet from "../../assets/Home/uxdesign.webp";
import imac from "../../assets/Home/web.webp";
interface ImageUrl {
  name: string;
  url: string;
}
// All Image url objects currently in use on our website landing page
const imageUrls: ImageUrl[] = [
  { name: "headerImg", url: headerImage },
  { name: "laptop", url: laptop },
  { name: "tablet", url: tablet },
  { name: "imac", url: imac },
];

// Goes through an array of image locations, creates hashObjects
// hashObject eg; const hashObjects = { url: src, blurHash: blurhash };
// const BlurHashEncoder = (props: { images: Array<string> }) => {
const BlurHashEncoder = (props: any) => {
  /* loads an image from given source URL and returns a promise that resolves to the loaded image
  src attribute gives URL when image successfully loaded, promise resolves `img` object. */

  const [blurHashes, setBlurHashes] = useState<{ [key: string]: string }>({});

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
  const encodeImageToBlurhash = async (url: string): Promise<string> => {
    const image = await loadImage(url);
    const imageData = getImageData(image);
    return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  };

  const encodeImage = async (imageUrls: ImageUrl[]) => {
    console.log("Encoding image..." + "");
    const newBlurHashes: { [key: string]: string } = {};
    for (const { name, url } of imageUrls) {
      console.log(name, url);
      const hash = await encodeImageToBlurhash(url);
      console.log("hash: ", hash);
      // newBlurHashes[name] = hash;
      const img = new Image();
      img.src = url;
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
      console.log(blurhash);
      console.log(url);
      newBlurHashes[name] = blurhash;
      const hashPostOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images: { url: url, blurHash: blurhash } }),
      };
      fetch("http://localhost:8000/api/images", hashPostOptions)
        .then((resp) => resp.json())
        .then((data) => console.log(data.images))
        .catch((error) => console.error(error));
    }
    setBlurHashes(newBlurHashes);
  };

  useEffect(() => {
    encodeImage(imageUrls);
  }, []);

  return (
    <div>
      {Object.keys(blurHashes).map((name) => (
        <Blurhash
          key={name}
          hash={blurHashes[name]}
          width={200}
          height={200}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ))}
    </div>
  );
};

export default BlurHashEncoder;
