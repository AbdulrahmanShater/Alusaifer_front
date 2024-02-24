import Link from "next/link";
const VideoItem = ({
  id, image, title, url
}) => {

  return (
    <>
      <Link href={url} className="ltn__product-item ltn__product-item-4" target="_blank"> 
        <div className="product-img">
          <Link href={url}>
            <img
              src={image}
              alt={title}
              style={{ height: "250px", width: "100%", objectFit: "cover" }}
            />
          </Link>
          <div className="product-badge">
            <ul>
            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              <ul>
                <li>
                  <i className="flaticon-pin"></i>
                  {title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoItem;
