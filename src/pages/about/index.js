import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft, FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
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
// import playistItem from "@/data/playlistItems.json";
import VideoItem from "@/components/aboutUs/videoItem";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import { useEffect, useMemo, useState } from "react";
import VimeoService from "@/api/services/VimeoService";
import ReactPaginate from "react-paginate";
import { Skeleton } from "@mui/material";

function AboutUs() {
  const agents = getProducts(TeamData, "buying", "featured", 3);
  const featureDataSorted = getProducts(featureData, "buying", "featured", 3);

  const [videos, setVideos] = useState();
  const [loading, setLoading] = useState(false);

  const [currentUrl, setCurrentUrl] = useState(null);

  // const enableNext = useMemo(() => {
  //   if (!videos) return false;
  //   return currentUrl != videos?.paging?.last
  // }, [videos, currentUrl])

  // const enablePrev = useMemo(() => {
  //   console.log("enablePrev")
  //   console.log(videos)
  //   console.log(videos.paging.previous)
  //   if (!videos) return false;
  //   console.log(videos.paging.previous !== null)
  //   return videos.paging.previous !== null
  // }, [videos])

  function feachVideos(param) {

    VimeoService.getAll({
      paginationUrl: (!param || !param.url || param.url == null) ? undefined : param.url,
      onBefore: () => {
        setLoading(true)
      },
      onSuccess: (response) => {
        setVideos(response)
        setCurrentUrl(param.url)
      },
      onFinally: () => {
        setLoading(false)
      }
    })
  }
  useEffect(() => {
    feachVideos()
  }, [])


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

        <AboutUsStyleTwo sectionSpace="pb-90" />

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
                    title: "تغذية بصرية",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <>
                {
                  loading ? <>
                    <Col xs={12}>
                      <Row>
                        <Col>
                          <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} />
                        </Col>
                        <Col>
                          <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} />
                        </Col>
                        <Col>
                          <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} />
                        </Col>
                      </Row>
                    </Col>
                  </> : <>
                    {((videos?.data) ?? []).map((video, key) => {
                      return (
                        <Col key={key} xs={12} sm={6} lg={4} >
                          <VideoItem
                            key={key}
                            uri={video.uri}
                            image={video.pictures.base_link}
                            title={video.name}
                            additionalClassname="relative"
                          />
                        </Col>
                      );
                    })}
                  </>

                }

              </>

              {/* {agents.map((data, key) => {
                const slug = productSlug(data.name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4} >
                    <TeamItem baseUrl="blog" data={data} slug={slug} additionalClassname="" />
                  </Col>
                );
              })} */}
            </Row>

            <div className="ltn__pagination-area text-center">
              <ReactPaginate
                nextLabel={<FaAngleDoubleRight onClick={() => {
                  feachVideos({ url: videos?.paging?.next })
                }} />}
                previousLabel={<FaAngleDoubleLeft onClick={() => {
                  feachVideos({ url: videos?.paging?.previous })
                }} />}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination ltn__pagination justify-content-center"
                activeClassName="active"
                disabledClassName=""
                renderOnZeroPageCount={null}
              />
            </div>


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
