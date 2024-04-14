import { useState } from "react";
import CountUp from "react-countup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VisibilityObserver } from "reactjs-visibility";


function CounterUp() {

  const [loading, setLoading] = useState<boolean>(false);

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setLoading(true);
    }
  };

  const options = {
    rootMargin: "200px",
  };
  return (
    <>
      <div className="ltn__counterup-area section-bg-1 pt-120 pb-70">
        <Container>
          <Row style={{ justifyContent: 'center' }}>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                  <i className="flaticon-user"></i>
                </div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 10 : 0}
                      suffix="K+"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>العملاء المستفيدين</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                  <i className="flaticon-office"></i>
                </div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 25 : 0}
                      suffix=""
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>العقارات المباعة</h6>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                  <i className="flaticon-excavator"></i>
                </div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 900 : 0}
                      suffix="+"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>إجمالي الإنشاءات</h6>
              </div>
            </Col>
            {/* <Col xs={12} sm={6} md={3} className="align-self-center">
              <div className="ltn__counterup-item">
                <div className="counter-icon">
                  <i className="flaticon-armchair"></i>
                </div>
                <h1>
                  <VisibilityObserver
                    onChangeVisibility={onVisibilityChange}
                    options={options}
                  >
                    <CountUp
                      className="count-text"
                      start={0}
                      end={loading ? 25 : 0}
                      suffix="+"
                      duration={5}
                    />
                  </VisibilityObserver>
                </h1>
                <h6>المشاريع</h6>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CounterUp;
