import React, { useEffect, useRef, useState, useCallback } from "react";
import { decode, encode } from "blurhash";

const HashImage = (props: { images: Object }) => {
  useEffect(() => {}, []);
  console.log(props.images);
  return <div>This divs</div>;
};

export default HashImage;
