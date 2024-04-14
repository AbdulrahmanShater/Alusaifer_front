import { CSSProperties } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface BreadCrumbProps {
  title: string
  currentSlug: string
  sectionPace: string
  style: CSSProperties
}

const BreadCrumb = ({ title, style, sectionPace, currentSlug }: BreadCrumbProps) => {
  return (
    <>
      <div
        className={`ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image ${sectionPace}`}
        style={{ backgroundImage: `url("../img/bg/14.jpg")`, ...style }}
        dir="rtl"
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title">{title}</h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    {/* <li>
                      <Link href="/">
                        <span className="ltn__secondary-color">
                          <FaHome className="me-2" />
                        </span>
                        <span className="me-2">Home</span>
                        <FaAngleRight />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        <span className="me-2">Shop</span>
                        <FaAngleRight />
                      </Link>
                    </li> */}
                    <li>{currentSlug}</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BreadCrumb;
