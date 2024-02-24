import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import playistItem from "@/data/playlistItems.json";
import VideoItem from "./VideoItem";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const VideoBanner = () => {
  const [isOpen, setOpen] = useState(false);


  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const productCarouselsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1799,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Row>
      <Col lg={12}>
        {
          // !!featuredProducts?.length
          playistItem.items
            ? (
              <Slider
                {...productCarouselsettings}
                className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
              >
                {playistItem.items.map((product, key) => {
                  
                  return (
                    <VideoItem
                      key={product.id}
                      image={product.snippet.thumbnails.medium.url}
                      title={product.snippet.title}
                      url={`https://www.youtube.com/watch?v=${product.snippet.resourceId.videoId}`}
                    />
                  );
                })}
              </Slider>
            ) : null}
      </Col>
    </Row>
  )
};

export default VideoBanner;
