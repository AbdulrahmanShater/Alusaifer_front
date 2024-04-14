import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalVideo from "react-modal-video";
import { useState } from "react";

interface PrivacyPolicyStyleOneProps { sectionSpace: string, text: string }

function PrivacyPolicyStyleOne({ sectionSpace, text }: PrivacyPolicyStyleOneProps) {

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

            {/* align-self-center */}
            <Col xs={12} className="">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    ابراج محمد الاصيفر
                  </h6>
                </div>
                <div className="ltn__callout bg-overlay-theme-05  mt-30" dangerouslySetInnerHTML={{ __html: text }} style={{ textAlign: "right" }} ></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PrivacyPolicyStyleOne;
