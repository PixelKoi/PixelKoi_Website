import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import styles from "./BlurHashImages.module.scss";

interface MyComponentProps {
  src: any;
  hashCode: any;
  style: any;
}

const BlurHashImages: React.FC<MyComponentProps> = ({
  src,
  hashCode,
  style,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={styles.wrapper} style={style}>
      <div style={{ display: imageLoaded ? "none" : "inline" }}>
        <Blurhash
          hash={hashCode}
          width="100%"
          height="100%"
          resolutionX={64}
          resolutionY={64}
          punch={1}
        />
      </div>
      <div style={{ display: imageLoaded ? "inline" : "none" }}>
        <img src={src} alt="" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default BlurHashImages;
