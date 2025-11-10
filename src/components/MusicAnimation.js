import React from "react";
import Lottie from "lottie-react";
import musicAnimation from "../assets/music-notes.json";

export default function MusicAnimation() {
  return <Lottie animationData={musicAnimation} loop={true} />;
}
