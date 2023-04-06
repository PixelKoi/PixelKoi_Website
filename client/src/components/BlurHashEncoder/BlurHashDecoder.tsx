import React, { useEffect, useRef, useState, useCallback } from "react";
import { decode, encode } from "blurhash";

interface ApiResponse {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
}

const BlurHashDecoder = (props: any) => {
  const url = "http://localhost:8000/api/images";
  const getImageHash = async () => {
    try {
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
    } catch (error) {}
  };
};

export default BlurHashDecoder;
