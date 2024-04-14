import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoBanner = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="uDzlJZKB_YI"
        onClose={() => setOpen(false)}
      />
      <div
        className="ltn__video-bg-img bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1"
        style={{ backgroundImage: `url("../img/others/7.jpg")` }}
      >
        <button onClick={() => setOpen(true)} className="ltn__video-icon-2">
          <FaPlay />
        </button>
      </div>
    </>
  );
};

export default VideoBanner;