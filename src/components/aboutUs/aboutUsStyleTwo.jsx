import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

function AboutUsStyleTwo({ sectionSpace }) {
  const [index, setIndex] = useState(-1);

  const slides = [
    {
      src: "/img/others/1.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/others/2.jpg",
      width: 800,
      height: 570,
    },
    {
      src: "/img/others/4.jpg",
      width: 800,
      height: 570,
    },
  ];

  return (
    <>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom, Counter, Fullscreen, Download]}
      />

      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center"dir="rtl">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                   شركة محمد الاصيفر لتطوير والأستثمار العقاري
                  </h6>
                  <h1 className="section-title">شركة تطويريه لمنزل أحلامك</h1>
                  <p>تعد شركة عقارات محمد الاصيفر واحدة من أبرز الشركات العقارية في منطقة الطائف، حيث تمتلك الشركة خبرة تمتد لعقود في تقديم أفضل الخدمات العقارية للعملاء. وتعمل الشركة على تطوير وإدارة مشاريع سكنية وتجارية وصناعية بما في ذلك مشاريع التمليك وشقق تمليك وفلل وأبراج سكنية وتجارية.
                  </p>
                </div>
                <ul className="ltn__list-item-1 clearfix">
                  <li> وتضمنت إنشاء أبراج سكنية فاخرة،</li>
                  <li>وتطوير مشاريع سكنية من فلل وشقق تمليك</li>
                  <li> تطوير المخططات وتسويقها بافضل الطرق</li>
                  <li>تقديم خدمات ما بعد البيع لعملائها</li>
                </ul>
                <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
                  <li>
                   
                    ضمان
                  </li>
                  <li>
                   
                   امان
                  </li>
                  <li>
                    
                   فخامه
                  </li>
                  <li>
                   
                   
                  </li>
                </ul>

                <div className="ltn__list-item-2 ltn__list-item-2-img mb-50">
                  <PhotoAlbum
                    layout="rows"
                    photos={slides}
                    targetRowHeight={150}
                    onClick={({ index: current }) => setIndex(current)}
                  />
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img src="/img/others/55.png" alt="About Us Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleTwo;
