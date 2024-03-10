import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import PrivacyPolicyStyleOne from "@/components/privacyPolicy/PrivacyPolicyStyleOne";


function PrivacyPolicy() {
  return (
    <>
      <LayoutOne topbar={true} >
        <ShopBreadCrumb
          title="سياسة الخصوصية"
          sectionPace=""
          currentSlug="سياسة الخصوصية"
        />

        <PrivacyPolicyStyleOne sectionSpace="pb-90" />

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

export default PrivacyPolicy;
