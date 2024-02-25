import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import featureData from "@/data/service"
import TeamItem from "@/components/team";
import TeamData from '@/data/team';
import playistItem from "@/data/playlistItems.json";
import VideoItem from "@/components/aboutUs/videoItem";



function AboutUs() {
  const agents = getProducts(TeamData, "buying", "featured", 3);
  const featureDataSorted = getProducts(featureData, "buying", "featured", 3);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
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

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
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
    <>
      <LayoutOne topbar={true} >
        <ShopBreadCrumb
          title="عن شركة محمد الاصيفر "
          sectionPace=""
          currentSlug="من نحن"
        />

        <AboutUsStyleOne sectionSpace="pb-90" />

        <Feature
          classes="section-bg-1"
          servicebtn={true}
          iconTag={false}
          data={featureDataSorted}
          titleSectionData={{
            sectionClasses: "text-center",

          }}
        />




        <div className="ltn__team-area pt-115 pb-90">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "المشاريع",
                    title: "المشاريع السابقة",
                  }}
                />
              </Col>
            </Row>
            <Row>
              {playistItem.items.map((product, key) => {
                return (
                  <Col key={key} xs={12} sm={6} lg={4} >
                    <VideoItem
                      key={product.id}
                      image={product.snippet.thumbnails.medium.url}
                      title={product.snippet.title}
                      videoId={product.snippet.resourceId.videoId}
                      additionalClassname="relative"
                    // url={`https://www.youtube.com/watch?v=${product.snippet.resourceId.videoId}`}
                    />
                  </Col>
                );
              })}
              {/* {agents.map((data, key) => {
                const slug = productSlug(data.name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4} >
                    <TeamItem baseUrl="blog" data={data} slug={slug} additionalClassname="" />
                  </Col>
                );
              })} */}
            </Row>


          </Container>
        </div>

        {/* <!-- TESTIMONIAL AREA START (testimonial-7) -->  */}

        {/* <!-- TESTIMONIAL AREA END --> */}

        {/* <!-- BLOG AREA START (blog-3) -->  */}
        {/* <div className="ltn__blog-area pb-70">
          <Container>
            <Row>
              <Col lg={12}>
                <TitleSection
                  sectionClasses="text-center"
                  headingClasses="section-subtitle-2"
                  titleSectionData={{
                    subTitle: "News & Blogs",
                    title: "Leatest News Feeds",
                  }}
                />
              </Col>
            </Row>
            <Slider
              {...blogSettings}
              className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
            >
              {blogData.map((data, key) => {
                const slug = productSlug(data.title);
                return (
                  <BlogItem key={key} baseUrl="blog" data={data} slug={slug} />
                );
              })}
            </Slider>
          </Container>
        </div> */}
        {/* <!-- BLOG AREA END --> */}

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default AboutUs;
