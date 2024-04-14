import { FaPlay } from "react-icons/fa";

interface VideoItemProps { image: string, title: string, uri: string, additionalClassname: string }

const VideoItem = ({ image, title, uri, additionalClassname }: VideoItemProps) => {

  function openVideoDialog() {
    var videoDialog: HTMLElement | null = document.getElementById('videoDialog');
    if (videoDialog) {
      videoDialog.querySelector('iframe')!.src = `https://player.vimeo.com/video/${uri.match(/\/(\d+)$/)![1]}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=288640`;
      (videoDialog as any).showModal();
    }
  }

  function closeVideoDialog() {
    var videoDialog: HTMLElement | null = document.getElementById('videoDialog');
    if (videoDialog) {
      (videoDialog as any).close();
    }
  }

  return (
    <>
      <dialog id="videoDialog">

        <button className="closeBtn" onClick={closeVideoDialog}>X</button>
        <iframe className="" src={``} style={{ width: "100%" }} height="500" width={"500"} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title={title}></iframe>
      </dialog>

      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="ltn__video-img ltn__animation-pulse1" style={{ height: "20rem", width: "100%" }}>
          <img src={image} alt="video popup bg image" style={{ height: "inherit", width: '100%', objectFit: 'cover' }} />
          <button
            onClick={openVideoDialog}
            className="ltn__video-icon-2"
          >
            <FaPlay />
          </button>
        </div>
        <div className="team-info">
          <h4>
            {title}
          </h4>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
