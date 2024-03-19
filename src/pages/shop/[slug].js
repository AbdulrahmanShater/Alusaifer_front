import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaStar,
  FaStarHalfAlt,
  FaSearch,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";

import { LayoutOne } from "@/layouts";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import products from "@/data/products.json";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import RelatedProduct from "@/components/product/related-product";
import FollowUs from "@/components/followUs";
import Tags from "@/components/tags";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import { buildUrlWithParams } from "@/api/config/http";
import ProductItem from "@/components/product";
import { useRouter } from 'next/router';
import { LoadingPage } from "@/components/Loading";

function ProductDetails({ product, buildingTypes, category }) {
  // const { products } = useSelector((state) => state.product);
  // const { cartItems } = useSelector((state) => state.cart);
  // const { wishlistItems } = useSelector((state) => state.wishlist);
  // const { compareItems } = useSelector((state) => state.compare);
  // const latestdBlogs = getProducts(blogData, "buying", "featured", 4);

  const router = useRouter();


  const relatedProducts = category.aqars;
  const topRatedProducts = [];
  const popularProducts = [];
  const latestdBlogs = [];

  const [isOpen, setOpen] = useState(false);


  if (router.isFallback) {
    return <LoadingPage />;
  }


  // const relatedProducts = getProducts(
  //   products,
  //   product.category[0],
  //   "popular",
  //   2
  // );

  // const topRatedProducts = getProducts(
  //   products,
  //   product.category[0],
  //   "topRated",
  //   2
  // );
  // const popularProducts = getProducts(
  //   products,
  //   product.category[0],
  //   "popular",
  //   4
  // );

  // const discountedPrice = getDiscountPrice(
  //   product.price,
  //   product.discount
  // ).toFixed(2);

  // const productPrice = product.price.toFixed(2);
  // const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  // const wishlistItem = wishlistItems.find(
  //   (wishlistItem) => wishlistItem.id === product.id
  // );
  // const compareItem = compareItems.find(
  //   (compareItem) => compareItem.id === product.id
  // );

  function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = String(url).match(regex);
    return match ? match[1] : null;
  }


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
  const productDetailsCarouselSettings = {
    centerMode: true,
    infinite: true,
    centerPadding: "450px",
    slidesToShow: 1,
    dots: false,
    speed: 500,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  const popular_product = {
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
    arrows: false,
  };


  return (
    <>
      <LayoutOne topbar={true} >
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={extractVideoId(product.video_link)}
          onClose={() => setOpen(false)}
        />
        {/* <!-- BREADCRUMB AREA START --> */}

        <BreadCrumb style={{ textAlign: "right" }}
          title="تفاصيل العقار"
          sectionPace="mb-0"
          currentSlug={product.user}
        />

        {/* <!-- BREADCRUMB AREA END --> */}

        {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
        <div className="ltn__img-slider-area mb-90">
          <Container fluid className="px-0">
            <Slider
              {...productDetailsCarouselSettings}
              className="ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner"
            >
              {product.images.map((single, key) => {
                return (
                  <div className="ltn__img-slide-item-4" key={key} >
                    <Link href="#">
                      <img
                        src={`${single.url}`}
                        alt={`${product.user}`}
                        style={{ height: "400px", width: "95%", objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </Container>
        </div>
        {/* <!-- IMAGE SLIDER AREA END -->

    <!-- SHOP DETAILS AREA START --> */}
        <div className="ltn__shop-details-area pb-10" >
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
                  <div className="ltn__blog-meta">
                    <ul>
                      {/* {
                        (product.featured ? (
                          <li className="ltn__blog-category">
                            <Link href="#">Featured</Link>
                          </li>
                        ) : (
                          ""
                        ),
                          product.rent ? (
                            <li className="ltn__blog-category">
                              <Link className="bg-orange" href="#">
                                For Rent
                              </Link>
                            </li>
                          ) : (
                            ""
                          ))
                      } */}

                      <li className="ltn__blog-date">
                        <i className="far fa-calendar-alt"></i>
                        {product.creation_time}
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-eye"></i>
                          {product.views}
                          المشاهدات
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1> {product.user}</h1>
                  <label>
                    <span className="ltn__secondary-color">
                      <i className="flaticon-pin"></i>
                    </span>{" "}
                    {product.address}
                  </label>
                  <h4 className="title-2"> {product.title}</h4>
                  <p>{product.fullDescription}</p>
                  <p>{product.shortDescription}</p>

                  <h4 className="title-2">التفاصيل</h4>
                  <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                    <ul>
                      {/* <li>
                        <label>Property ID:</label>{" "}
                        <span>{product.license_number}</span>
                      </li> */}
                      <li>
                        <label>غرف النوم:</label>
                        {" "}
                        <span>{product.bedrooms_count}</span>

                      </li>
                      <li>
                        <label>دورات المياه:</label>
                        {" "}
                        <span>{product.bathrooms_count}</span>
                      </li>
                      <li>
                        <label>غرف إضافية:</label>
                        {" "}
                        <span>{product.additional_rooms_count}</span>
                      </li>
                    </ul>
                    <ul>
                      {/* <li>
                        <label>Lot Area:</label>{" "}
                        <span>{product.propertyId}</span>
                      </li>
                      <li>
                        <label>Lot dimensions:</label>{" "}
                        <span>{product.area} sqft</span>
                      </li> */}
                      <li>
                        <label>غرف التوم:</label>{" "}
                        <span>{product.bedrooms_count}</span>
                      </li>
                      <li>
                        <label>السعر:</label> <span>{product.max_price}</span>
                      </li>
                      {/* <li>
                        <label>Property Status:</label>{" "}
                        <span>{product.status}</span>
                      </li> */}
                    </ul>
                  </div>

                 
                  {/* <h4 className="title-2">From Our Gallery</h4>
                  <div className="ltn__property-details-gallery mb-30">
                    <div className="row">
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.img1}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.img1}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                        <Link
                          href={`/img/others/${product.img2}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.img2}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link
                          href={`/img/others/${product.img3}`}
                          data-rel="lightcase:myCollection"
                        >
                          <img
                            className="mb-30"
                            src={`/img/others/${product.img3}`}
                            alt={`${product.title}`}
                          />
                        </Link>
                      </div>
                    </div>
                  </div> */}

                  {/* <h4 className="title-2 mb-10">Amenities</h4> */}

                  {/* <div className="property-details-amenities mb-60">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {(product.amenities1 ?? []).map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {(product.amenities2 ?? []).map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="ltn__menu-widget">
                          <ul>
                            {(product.amenities3 ?? []).map((single, key) => {
                              return (
                                <li key={key}>
                                  <label className="checkbox-item">
                                    {single}
                                    <input
                                      type="checkbox"
                                      defaultChecked="checked"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <h4 className="title-2">الموقع</h4>
                  <div className="property-details-google-map mb-60">
                    <iframe
                      // src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d${product.long}!3d${product.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd`}
                      src={`https://maps.google.com/maps?q=${product.lat},${product.long}&output=embed`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen=""
                    ></iframe>
                  </div>



                  {/* <!-- APARTMENTS PLAN AREA END --> */}

                  <h4 className="title-2">فيديو للعقار</h4>
                  <div
                    className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                    style={{ backgroundImage: `url("${product.icon}")` }}
                  >
                    <button
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      onClick={() => setOpen(true)}
                    >
                      <FaPlay />
                    </button>
                  </div>

                  {/* <div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
                    <h4 className="title-2">Customer Reviews</h4>
                    <div className="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaStar />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaRegStar />
                          </a>
                        </li>
                        <li className="review-total">
                          <a href="#"> ( 95 Reviews )</a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="ltn__comment-area mb-30">
                      <div className="ltn__comment-inner">
                        <ul>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img src="/img/testimonial/1.jpg" alt="Image" />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 3, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img src="/img/testimonial/3.jpg" alt="Image" />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img src="/img/testimonial/2.jpg" alt="Image" />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaStar />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <FaRegStar />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ltn__comment-reply-area ltn__form-box mb-30">
                      <form action="#">
                        <h4>Add a Review</h4>
                        <div className="mb-30">
                          <div className="add-a-review">
                            <h6>Your Ratings:</h6>
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <FaStar />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea placeholder="Type your comments...."></textarea>
                          <span className="inline-icon">
                            <FaPencilAlt />
                          </span>
                        </div>
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input type="text" placeholder="Type your name...." />
                          <span className="inline-icon">
                            <FaUserAlt />
                          </span>
                        </div>
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            placeholder="Type your email...."
                          />
                          <span className="inline-icon">
                            <FaEnvelope />
                          </span>
                        </div>
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="website"
                            placeholder="Type your website...."
                          />
                          <span className="inline-icon">
                            <FaGlobe />
                          </span>
                        </div>
                        <label className="mb-0">
                          <input type="checkbox" name="agree" /> Save my name,
                          email, and website in this browser for the next time I
                          comment.
                        </label>
                        <div className="btn-wrapper">
                          <button
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div> */}

                  <h4 className="title-2">عقارات مشابهه</h4>
                  <Row>
                    {(relatedProducts ?? []).map((data, key) => {
                      const slug = data.id;
                      const discountedPrice = 0;
                      const productPrice = 0;
                      const cartItem = 0;
                      const wishlistItem = 0;
                      const compareItem = 0;
                      // const slug = productSlug(data.title);
                      // const discountedPrice = getDiscountPrice(
                      //   product.price,
                      //   product.discount
                      // ).toFixed(2);
                      // const productPrice = product.price.toFixed(2);
                      // const cartItem = cartItems.find(
                      //   (cartItem) => cartItem.id === product.id
                      // );
                      // const wishlistItem = wishlistItems.find(
                      //   (wishlistItem) => wishlistItem.id === product.id
                      // );
                      // const compareItem = compareItems.find(
                      //   (compareItem) => compareItem.id === product.id
                      // );
                      return (
                        <Col xs={12} sm={6} key={key}>
                          <ProductItem
                            key={data.id}
                            productData={data}
                            slug={''}
                            baseUrl="shop"
                            discountedPrice={0}
                            // discountedPrice={discountedPrice}
                            productPrice={0}
                            cartItem={null}
                            wishlistItem={null}
                            compareItem={null}
                          />
                          {/* <RelatedProduct
                            productData={data}
                            slug={slug}
                            baseUrl="shop"
                            discountedPrice={discountedPrice}
                            productPrice={productPrice}
                            cartItem={cartItem}
                            wishlistItem={wishlistItem}
                            compareItem={compareItem}
                          /> */}
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>

              <Col xs={12} lg={4}>
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
                  {/* <!-- Author Widget --> */}
                  <div className="widget ltn__author-widget">
                    <div className="ltn__author-widget-inner text-center">
                      <img
                        src={`/img/team/${product.icon}`}
                        alt={`${product.user}`}
                      />
                      <h5>{product.fullName}</h5>
                      <small>{product.designation}</small>
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaStar />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FaRegStar />
                            </a>
                          </li>
                          <li className="review-total">
                            {" "}
                            <Link href="#">
                              {" "}
                              ( {product.raiting} Reviews )
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p>{product.description}</p>

                      <div className="ltn__social-media">
                        <ul>
                          <li>
                            <a href="#" title="Facebook">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Twitter">
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="Linkedin">
                              <FaInstagram />
                            </a>
                          </li>

                          <li>
                            <a href="#" title="Youtube">
                              <FaDribbble />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Search Widget --> */}
                  {/* <div className="widget ltn__search-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Search Objects
                    </h4>
                    <form action="#">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search your keyword..."
                      />
                      <button type="submit">
                        <FaSearch />
                      </button>
                    </form>
                  </div> */}
                  {/* <!-- Form Widget --> */}

                  {/* <!-- Popular Post Widget --> */}
                  {/* <div className="widget ltn__popular-post-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border-2">
                      Leatest Blogs
                    </h4>
                    <ul>
                      {(latestdBlogs ?? []).map((blog, key) => {
                        const slug = productSlug(blog.title);
                        let imagecount = key + 1;

                        return (
                          <li key={key}>
                            <div className="popular-post-widget-item clearfix">
                              <div className="popular-post-widget-img">
                                <Link href={`/blog/${slug}`}>
                                  <img
                                    src={`/img/team/${imagecount}.jpg`}
                                    alt="#"
                                  />
                                </Link>
                              </div>
                              <div className="popular-post-widget-brief">
                                <h6>
                                  <Link href={`/blog/${slug}`}>
                                    {blog.title}
                                  </Link>
                                </h6>
                                <div className="ltn__blog-meta">
                                  <ul>
                                    <li className="ltn__blog-date">
                                      <Link href={`/blog/${slug}`}>
                                        <span>
                                          <FaCalendarAlt />
                                        </span>
                                        <span>{blog.date}</span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div> */}


                  {/* <!-- Tagcloud Widget --> */}

                  {/* <Tags title="Popular Tags" /> */}
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- SHOP DETAILS AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- CALL TO ACTION END --> */}
      </LayoutOne>

    </>
  );
}

export default ProductDetails;

export async function getServerSideProps({ params }) {
  const { slug } = params;

  console.log("getServerSideProps")
  console.log(params)


  // Fetch product details from an API based on productId
  // const res = await fetch(`https://api.example.com/products/${productId}`);
  // const product = await res.json();

  var buildingTypes = [];
  var product = null;

  await BuildingTypeService.getAll({
    data: null,
    onSuccess: (response) => {
      buildingTypes = response.data.data;
    }
  });

  // const buildingResponse = await fetch(`https://akar.alusaifer.com.sa/api/building_types`);
  // var buildingTypes = await buildingResponse.json();
  // buildingTypes = buildingTypes.data.data;

  for (let index = 0; index < buildingTypes.length; index++) {
    await FilterService.getAll({
      data: { buildingtype: String(buildingTypes[index].id) },
      onSuccess: (response) => {
        buildingTypes[index].aqars = response.data.data
      }
    })
    // const aqarsResponse = await fetch(buildUrlWithParams(`https://akar.alusaifer.com.sa/api/advertisements/filter`, { buildingtype: String(buildingTypes[index].id) }));
    // const aqarsData = await aqarsResponse.json();
    // buildingTypes[index].aqars = aqarsData.data.data
  }
  await AqarService.getDetails({
    data: { id: params.slug },
    onSuccess: (response) => {
      product = response.data;
    }
  })

  // const response = await fetch(`https://akar.alusaifer.com.sa/api/advertisements/${params.slug}?fromDetails=0`);
  // const res = await response.json()
  // const product = res.data;


  const category = buildingTypes.find((f) => Number(f.id) == Number(product.building_type.id));

  return {
    props: {
      product, buildingTypes, category
    }
  };

}


// export async function getStaticProps({ params }) {

//   const buildingResponse = await fetch(`https://akar.alusaifer.com.sa/api/building_types`);
//   var buildingTypes = await buildingResponse.json();
//   buildingTypes = buildingTypes.data.data;

//   for (let index = 0; index < buildingTypes.length; index++) {
//     const aqarsResponse = await fetch(buildUrlWithParams(`https://akar.alusaifer.com.sa/api/advertisements/filter`, { buildingtype: String(buildingTypes[index].id) }));
//     const aqarsData = await aqarsResponse.json();
//     buildingTypes[index].aqars = aqarsData.data.data
//   }


//   const response = await fetch(`https://akar.alusaifer.com.sa/api/advertisements/${params.slug}?fromDetails=0`);
//   const res = await response.json()
//   const product = res.data;

//   const category = buildingTypes.find((f) => Number(f.id) == Number(product.building_type.id));

//   return { props: { product, buildingTypes, category } };
// }

// export async function getStaticPaths() {
//   // get the paths we want to pre render based on products

//   var aqars = [];


//   const response = await fetch(`https://akar.alusaifer.com.sa/api/building_types`);
//   var buildingTypes = await response.json();
//   buildingTypes = buildingTypes.data.data;

//   for (let index = 0; index < buildingTypes.length; index++) {
//     const aqarsResponse = await fetch(buildUrlWithParams(`https://akar.alusaifer.com.sa/api/advertisements/filter`, { buildingtype: String(buildingTypes[index].id) }));
//     const aqarsData = await aqarsResponse.json();
//     aqars = [...aqars, ...aqarsData.data.data]
//   }

//   // console.log("-----TEST-----");
//   // console.log(aqars);
//   // console.log("-----TEST-----");

//   // const response = await fetch(`https://akar.alusaifer.com.sa/api/advertisements/${params.slug}?fromDetails=0`);
//   // const res = await response.json()
//   // const product = res.data;

//   const paths = aqars.map((product) => ({
//     params: { slug: String(product.id) },
//     // params: { slug: String(146) },
//   }));

//   return { paths, fallback: false };
// }
