import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import TermsAndConditionsStyleOne from "@/components/termsAndConditions/termsAndConditionsStyleOne";
import ConfigService from "@/api/services/ConfigService";


function TermsAndConditions({ text }) {

  return (
    <>
      <LayoutOne topbar={true} >
        <ShopBreadCrumb
          title="الشروط و الأحكام"
          sectionPace=""
          currentSlug="الشروط و الأحكام"
        />

        <TermsAndConditionsStyleOne sectionSpace="pb-90" text={text} />

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



export async function getServerSideProps() {

  var buildingTypes = [];
  var text = null;

  await ConfigService.termsConditions({
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