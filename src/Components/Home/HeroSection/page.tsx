import React from "react";
import Image from "next/image";
import HeroSectionBGImage from "@/Assets/HeroSectionImage.png";
import TextImage from "@/Assets/textImage.png";
import Icon from "@/Assets/Icon.png";

const page = () => {
  return (
    <div className="mt-[7rem] w-[90%] relative flex items-center justify-center h-[500px]">
      <Image
        src={HeroSectionBGImage}
        alt="HeroSectionBackground"
        className="w-full h-full"
      />
      <div className="absolute">
        <h1 className="text-[45px] font-[600]">
          Broadcasting Excellence at Your
        </h1>
        <div className="flex gap-[1rem]">
          <h1 className="text-[45px] font-[600]">Fingertips</h1>
          <Image src={TextImage} alt="TextImage" />
        </div>
        <div className="flex gap-[1rem] items-center">
          <Image src={Icon} alt="icon" />
          <audio controls>
            <source src="../Assets/audio/heroAudio.mp3" type="audio/mp3" />
            Your browser does not support the audio element
          </audio>
        </div>
        <p className="w-[50%]">
          Delivering high-quality podcasts and live events tailored to your
          needs.
        </p>
      </div>
    </div>
  );
};

export default page;
