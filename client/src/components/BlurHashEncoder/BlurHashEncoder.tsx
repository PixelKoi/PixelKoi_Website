import React, { useEffect, useRef, useState, useCallback } from "react";
import { decode, encode } from "blurhash";
import { Blurhash } from "react-blurhash";
import Header from "../../Pages/Landing Page/components/Header/Header";

// Goes through an array of image locations, creates hashObjects
// hashObject eg; const hashObjects = { url: src, blurHash: blurhash };
const BlurHashEncoder = (props: any) => {
  const [blurhash, setBlurhash] = useState("");
  return (
    <div>
      <div></div>
    </div>
  );
};

export default BlurHashEncoder;
