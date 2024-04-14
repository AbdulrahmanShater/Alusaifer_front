import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";

interface AboutUsStyleOneProps { sectionSpace: string }
function AboutUsStyleOne({ sectionSpace }: AboutUsStyleOneProps) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="gBImgLbQ8mg"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/45.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/4.jpg" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    ابراج محمد الاصيفر
                  </h6>
                  <h1 className="section-title">
                    عبارة عن مشروع يضم وحدات سكنية فاخرة بمنتهى الذكاء
                  </h1>
                  <p>
                    تتوفر فلل الروف في هذا المشروع بمساحات كبيرة تصل الى 450  متر مربع، وتحتوي على مجموعة من المزايا التي تشمل:
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2"></i>
                    تقع الوحدات على اطلالات جميلة مع ترانسات
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    مواد صحية عالية الجودة
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    نظام أمني لدخول
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    مـواقف خاصة وامنة بالبطـاقة الذكيـة
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    يتميز مشروع أبراج محمد الأصيفر بموقعه المتميز على طريق الملك فهد الدائري في قلب الطائف، والذي يتيح للسكان الوصول بسهولة إلى المناطق الحيوية في المدينة. كما يتميز المشروع بتصميمه المعماري الحديث والجذاب الذي يتناسب مع متطلبات الحياة العصرية. وتتوفر في المشروع وحدات سكنية بمساحات مختلفة وتتراوح من شقق صغيرة إلى شقق كبيرة بالإضافة الى فلل روف تلبي احتياجات الأفراد والعائلات.
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    href="/service"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    المزيد
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
