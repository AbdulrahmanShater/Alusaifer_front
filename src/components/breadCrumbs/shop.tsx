import { Col, Container, Row } from "react-bootstrap";


interface ShopBreadCrumbProps {
  title: string,
  sectionPace: string,
}
const ShopBreadCrumb = ({ title, sectionPace }: ShopBreadCrumbProps) => {
  return (
    <>
      <div
        className={`ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image ${sectionPace}`}
        style={{ backgroundImage: `url("../img/bg/14.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="ltn__breadcrumb-inner" style={{ textAlign: "right" }}>
                <h1 className="page-title">{title}</h1>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShopBreadCrumb;
