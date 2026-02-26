import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa"; // for resume download button

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="text-xl lg:max-w-[45vw]">
          <span className="text-purple">Software engineer</span> eager to join a
          forward‑thinking team and build great products together.
        </h1>
        <p className="text-white-200 my-5 text-center">
          You can find my resumé and socials below.
        </p>
        <div className="flex flex-row align-middle justify-center">
          <a href="/AnushkaDubeyResume.pdf" download>
            <MagicButton
              title="Download my resumé"
              icon={<FaDownload />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center my-6 md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            onClick={() => window.open(info.link, "_blank", "noopener")}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
