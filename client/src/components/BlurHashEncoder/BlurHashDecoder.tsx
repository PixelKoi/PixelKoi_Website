import React, { useEffect, useState, useContext, createContext } from "react";
import { decode, encode } from "blurhash";
interface ApiResponse {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
}

interface ImageType {
  [name: string]: {
    url: string;
    hash: string;
  };
}

export let HashContext = createContext<ImageType>({});

// DOES NOT RENDER, WE'RE JUST GRABBING API DATA!
const BlurHashDecoder = (props: any) => {
  const [hashData, setHashData] = useState<ImageType>({});
  const [error, setError] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [statusText, setStatusText] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const imagesURL = "http://localhost:8000/api/images";

  const getImageHash = async () => {
    try {
      const apiResponse = await fetch(imagesURL);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setHashData(json[0]);
      console.log(json[0]);
      console.log(typeof json[0]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getImageHash();
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <HashContext.Provider value={hashData}>
          {props.children}
        </HashContext.Provider>
      )}
    </>
  );
};

export default BlurHashDecoder;
