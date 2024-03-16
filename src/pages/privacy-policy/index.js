import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import PrivacyPolicyStyleOne from "@/components/privacyPolicy/PrivacyPolicyStyleOne";
import ConfigService from "@/api/services/ConfigService";


function PrivacyPolicy({ text }) {
  return (
    <>
      <LayoutOne topbar={true} >
        <ShopBreadCrumb
          title="سياسة الخصوصية"
          sectionPace=""
          currentSlug="سياسة الخصوصية"
        />

        <PrivacyPolicyStyleOne sectionSpace="pb-90" text={text} />

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



export async function getServerSideProps() {

  var buildingTypes = [];
  var text = null;

  await ConfigService.privacyPolicy({
    data: null,
    onSuccess: (response) => {
      text = response.data.content;
    }
  });

  return {
    props: {
      text
    }
  };

}