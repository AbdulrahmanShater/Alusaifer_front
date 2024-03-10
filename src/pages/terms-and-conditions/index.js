import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import TermsAndConditionsStyleOne from "@/components/termsAndConditions/termsAndConditionsStyleOne";


function TermsAndConditions() {

  return (
    <>
      <LayoutOne topbar={true} >
        <ShopBreadCrumb
          title="الشروط و الأحكام"
          sectionPace=""
          currentSlug="الشروط و الأحكام"
        />

        <TermsAndConditionsStyleOne sectionSpace="pb-90" />

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

export default TermsAndConditions;
