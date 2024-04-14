import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTwitter, FaYoutube, FaPaperPlane, FaSnapchat, FaInstagram } from "react-icons/fa";

const Footer = function () {
  return (
    <>
      <footer className="ltn__footer-area  " dir="rtl">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img src="/img/logo.png" alt="Logo" />
                    </div>
                  </div>
                  <p>
                    شركة محمد الأصيفر شركة عقارية رائدة في الطائف تضم مجموعة متنوعة من المشاريع العقارية الفاخرة
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">

                        </div>
                        <div className="footer-address-info">
                          <p>حي الاخباب، الطائف 26513</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">

                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+0123-456789">920033002</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">

                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="mailto:example@example.com">
                              info@alusaifer.com.sa
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <Link href="https://www.instagram.com/malusaifer/?igshid=YzA2ZDJiZGQ%3D" title="Facebook">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fm_alusaifer" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.snapchat.com/add/m.alusaifer/9swha3-JQzCJMBLJXb1cOAAAgdWNvZ2Nhc2pxAYzPc1i1AYzPcx3YAAAAAA?share_id=RDVFQTYxNzktNjNBNS00MEUwLUIwRUYtNDQ0MjVDQTdFNTM0&locale=ar_SA@calendar=gregorian&sid=5226a135ee044fb98e7d50e71c2b5355" title="Linkedin">
                          <FaSnapchat />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.youtube.com/channel/UCt6dNC90o6Y5LKjPFR-T3Qw?themeRefresh=1" title="Youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">الشركة</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/about">من نحن</Link>
                      </li>
                      <li>
                        <Link href="/aqar">العقارات</Link>
                      </li>
                      <li>
                        <Link href="/contact">تواصل معنا</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">العناية بالعملاء</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/contact">تواصل معنا</Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions">الشروط و الأحكام</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">سياسة الخصوصية</Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">اخبارنا</h4>
                  <p>
                    اشتراك لتصل لك اخر العروض والعقارات الجديد لدينا
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          {" "}
                          <FaPaperPlane />
                        </button>
                      </div>
                    </form>
                  </div>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix " dir="ltr">
                  <p>
                    جميع الحقوق محفوظه@شركة محمد الاصيفر{" "}
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>


            </Row>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
