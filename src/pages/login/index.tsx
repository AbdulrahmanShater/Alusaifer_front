import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

function Login() {

  return (
    <>
      <LayoutOne topbar={true}>
        <>
          <ShopBreadCrumb title="تسجيل الدخول" sectionPace="" />

          {/* <!-- LOGIN AREA START --> */}
          <div className="ltn__login-area pb-65">
            <div className="container">
              <Row>
                <Col xs={12}>
                  {/* <div className="section-title-area text-center">
                    <h1 className="section-title">تسجيل الدخول   </h1>
                  </div> */}
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6}>
                  <div className="account-login-inner ltn__form-box contact-form-box">
                    <form action="#">
                      <input type="text" name="email" placeholder="Email*" />
                      <div className="btn-wrapper mt-0">
                        <button className="theme-btn-1 btn btn-block " type="submit">متابعة</button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/* <!-- LOGIN AREA END --> */}

          <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
            <Container>
              <Row>
                <Col xs={12}>
                  <CallToAction />
                </Col>
              </Row>
            </Container>
          </div>
        </>
      </LayoutOne>
    </>
  );
}

export default Login;
