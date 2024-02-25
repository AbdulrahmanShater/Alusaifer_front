import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
const VideoItem = ({ image, title,videoId ,additionalClassname }) => {
  // function TeamItem({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="ltn__video-img ltn__animation-pulse1">
          <img src={image} alt="video popup bg image" />
          <button
            onClick={() => setOpen(true)}
            className="ltn__video-icon-2"
          >
            <FaPlay />
          </button>
        </div>
        <div className="team-info">
          <h4>
            {title}
          </h4>
          {/* <h6 className="ltn__secondary-color">{data.designation}</h6> */}
          <div className="ltn__social-media">
            <ul>
              <li>
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
