import React, { useEffect, useRef, useState, useCallback } from "react";
import { decode, encode } from "blurhash";
import HashImage from "./HashImage";
interface ApiResponse {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
}

interface ImageProps {}

// DOES NOT RENDER, WE'RE JUST GRABBING API DATA!
const BlurHashDecoder = (props: any) => {
  const [hashData, setHashData] = useState<object>([]);
  const [error, setError] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [statusText, setStatusText] = useState<String>("");

  const imagesURL = "http://localhost:8000/api/images";

  const getImageHash = async () => {
    try {
      const apiResponse = await fetch(imagesURL);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setHashData(json);
      console.log(json);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getImageHash();
  }, []);
  return (
    <div>
      <HashImage images={hashData} />
    </div>
  );
};

export default BlurHashDecoder;
