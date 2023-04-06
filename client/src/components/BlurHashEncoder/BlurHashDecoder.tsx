import React, { useEffect, useRef, useState, useCallback } from "react";
import { decode, encode } from "blurhash";

interface ApiResponse {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
}
// DOES NOT RENDER, WE'RE JUST GRABBING API DATA!
const BlurHashDecoder = (props: any) => {
  const [hashData, setHashData] = useState<object>([]);
  const [error, setError] = useState<any>();
  const [status, setStatus] = useState<any>();
  const [statusText, setStatusText] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);

  const url = "http://localhost:8000/api/images";
  const getImageHash = async () => {
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setStatus(apiResponse.status);
      setStatusText(apiResponse.statusText);
      setHashData(json);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
};

export default BlurHashDecoder;
