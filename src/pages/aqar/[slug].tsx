import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Slider from "react-slick";
import {
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaStar,
  FaRegStar,
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import BreadCrumb from "@/components/breadCrumbs";

import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import CallToAction from "@/components/callToAction";
import ProductItem from "@/components/product";
import { useRouter } from 'next/router';
import { LoadingPage } from "@/components/Loading";
import BuildingTypeService from "@/api/services/BuildingTypeService";
import FilterService from "@/api/services/FilterService";
import AqarService from "@/api/services/AqarService";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { AqarModel } from "@/model/aqar";
import { BuildingTypeModel } from "@/model/buildingType";


interface SlickArrowLeftProps {
  currentSlide?: number,
  slideCount?: number,
  props?: any[]
}
interface SlickArrowRightProps {
  currentSlide?: number,
  slideCount?: number,
  props?: any[]
}

interface ProductDetailsProps { aqar: AqarModel, buildingTypes: BuildingTypeModel[], category: BuildingTypeModel }

function ProductDetails({ aqar, category }: ProductDetailsProps) {

  const router = useRouter();



  const relatedProducts = category.aqars;

  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (router.isFallback) {
    return <LoadingPage />;
  }

  function extractVideoId(url: string): string | null {
    // Combine best regex patterns with Shorts support:
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
  
    // Use match() with capturing group to extract ID:
    const match = url.match(regex);
    return match ? match[1] : null;
  }


  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: SlickArrowLeftProps) => (
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
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: SlickArrowRightProps) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === Number(slideCount) - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === Number(slideCount) - 1 ? true : false}
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <LayoutOne topbar={true} >
        <>
        {console.log(aqar)}
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={extractVideoId(aqar.video_link ?? "") ?? ""}
            
            onClose={() => setOpen(false)}
          />
          {/* <!-- BREADCRUMB AREA START --> */}

          <BreadCrumb style={{ textAlign: "right" }}
            title="تفاصيل العقار"
            sectionPace="mb-0"
            currentSlug={aqar.user}
          />

          {/* <!-- BREADCRUMB AREA END --> */}

          {/* <!-- IMAGE SLIDER AREA START (img-slider-3) --> */}
          <div className="ltn__img-slider-area mb-90">
            <Container fluid className="px-0">
              <Slider
                {...productDetailsCarouselSettings}
                className="ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner"
              >
                {aqar.images.map((single, key) => {
                  return (
                    <div className="ltn__img-slide-item-4" key={key} >
                      <Link href="#">
                        <img
                          src={`${single.url}`}
                          alt={`${aqar.user}`}
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
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>
                          {aqar.creation_time}
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-eye"></i>
                            {aqar.views}
                            المشاهدات
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h1> {aqar.user}</h1>
                    <label>
                      <span className="ltn__secondary-color">
                        <i className="flaticon-pin"></i>
                      </span>{" "}
                      {aqar.address}
                    </label>
                    <h4 className="title-2"> {aqar.name}</h4>

                    <div className="property-detail-info-list section-bg-1  mb-60" style={{ textAlign: "right", padding: "1rem", direction: "rtl", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}  >

                      {
                        [
                          {
                            title: "رقم الرخصة",
                            value: aqar.license_number,
                          },
                          {
                            title: "نوع الحساب",
                            value: aqar.user_type,
                          },
                          {
                            title: "رقم الإعلان",
                            value: aqar.id,
                          },
                          {
                            title: "رقم ترخيص الإعلان",
                            value: aqar.adv_license_number ?? " ",
                          }
                        ].map((item, index) => {
                          return <div key={index} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            paddingLeft: "1rem",
                            borderLeft: index >= 3 ? undefined : "1px var(--border-color-7) solid"
                          }}>
                            <label>{item.title}</label>{" "}
                            <label style={{ minHeight: "1.2rem" }}>{item.value}</label>{" "}
                          </div>
                        })
                      }

                    </div>

                    <h4 className="title-2">التفاصيل</h4>
                    <div className="property-detail-info-list section-bg-1 clearfix mb-60">
                      <div dangerouslySetInnerHTML={{ __html: aqar.desc }} style={{ textAlign: "right", padding: "1rem" }} />

                    </div>

                    <h4 className="title-2">الميزات و الضمانات </h4>
                    <div className="property-detail-info-list section-bg-1 clearfix mb-60" style={{ direction: "rtl", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}  >
                      <ul style={{ borderRight: "none", borderLeft: "1px var(--border-color-7) solid" }}>
                        <li>
                          <label>غرف النوم:</label>
                          {" "}
                          <span>{aqar.bedrooms_count}</span>

                        </li>
                        <li>
                          <label>دورات المياه:</label>
                          {" "}
                          <span>{aqar.bathrooms_count}</span>
                        </li>
                        <li>
                          <label>غرف إضافية:</label>
                          {" "}
                          <span>{aqar.additional_rooms_count}</span>
                        </li>
                      </ul>
                      <div style={{ direction: "rtl", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", gap: "2rem" }}>
                        {
                          (aqar.network_types ?? []).map((network, index) => {
                            return <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                              <img src={network.image} style={{ width: "4rem", height: "4rem", objectFit: "cover" }} alt="Image" />
                              <label>{network.name}</label>{" "}
                            </div>
                          })
                        }
                      </div>
                    </div>

                    <h4 className="title-2">مميزات إضافية </h4>
                    <div className="property-detail-info-list section-bg-1 clearfix mb-60" style={{ textAlign: "right", padding: "1rem", direction: "rtl" }}  >
                      <FormGroup>
                        {
                          [
                            {
                              title: "مصعد",
                              checked: Boolean(aqar.elevator),
                            },
                            {
                              title: "مطبخ",
                              checked: Boolean(aqar.elevator),
                            },
                            {
                              title: "مدخل سيارات",
                              checked: Boolean(aqar.elevator),
                            },
                            {
                              title: "حوش",
                              checked: Boolean(aqar.elevator),
                            },
                            {
                              title: "غرفة سائق",
                              checked: Boolean(aqar.elevator),
                            },
                            {
                              title: "غرفة خادمة",
                              checked: Boolean(aqar.elevator),
                            },
                          ].map(({ title, checked },key) => {
                            return <FormControlLabel key={key} control={<Checkbox readOnly disabled style={{ color: 'initial' }} checked={checked} />} label={title} />
                          })
                        }
                      </FormGroup>
                    </div>

                    <h4 className="title-2">الموقع</h4>
                    <div className="property-details-google-map mb-60">
                      <iframe
                        src={`https://maps.google.com/maps?q=${aqar.lat},${aqar.long}&output=embed`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>



                    {/* <!-- APARTMENTS PLAN AREA END --> */}

                    <h4 className="title-2">فيديو للعقار</h4>
                    <div
                      className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60"
                      style={{ backgroundImage: `url("${aqar.icon}")` }}
                    >
                      <button
                        className="ltn__video-icon-2 ltn__video-icon-2-border---"
                        onClick={() => setOpen(true)}
                      >
                        <FaPlay />
                      </button>
                    </div>


                    <h4 className="title-2">عقارات مشابهه</h4>
                    <Row>
                      {(relatedProducts ?? []).map((data, key) => {
                        return (
                          <Col xs={12} sm={6} key={key}>
                            <ProductItem key={data.id} productData={data} baseUrl="aqar" />
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
                          src={`/img/team/${aqar.icon}`}
                          alt={`${aqar.user}`}
                        />
                        <h5>{aqar.name}</h5>
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
                                ( {aqar.views} Reviews )
                              </Link>
                            </li>
                          </ul>
                        </div>

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
        </>
      </LayoutOne>

    </>
  );
}

export default ProductDetails;

export async function getServerSideProps({ params }: { params: { slug: string } }) {

  var buildingTypes: BuildingTypeModel[] = [];
  var aqar: AqarModel | null = null;
  var category = null;

  await BuildingTypeService.getAll({
    data: null,
    onSuccess: (response) => {
      buildingTypes = response.data.data;
    }
  });


  for (let index = 0; index < buildingTypes.length; index++) {
    await FilterService.getAll({
      data: { buildingtype: Number(buildingTypes[index].id) },
      onSuccess: (response) => {
        buildingTypes[index].aqars = response.data.data
      }
    })
  }
  await AqarService.getDetails({
    data: { id: Number(params.slug) },
    onSuccess: (response) => {
      aqar = response.data;
    }
  })


  if (aqar != null) {
    category = buildingTypes.find((f) => Number(f.id) == Number(aqar?.building_type.id));
  }

  return {
    props: {
      aqar, buildingTypes, category
    }
  };

}