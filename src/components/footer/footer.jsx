import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area  " dir="rtl">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      {/* <img src="/img/logo.png" alt="Logo" /> */}
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
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>حي الاخباب، الطائف 26513</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+0123-456789">920033002</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope />
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
                        <Link href="#" title="Facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Linkedin">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Youtube">
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
                      {/* <li>
                        <Link href="/blog">Blog</Link>
                      </li> */}
                      <li>
                        <Link href="/shop">العقارات</Link>
                      </li>
                      <li>
                        <Link href="/locations">موقعنا</Link>
                      </li>
                      <li>
                        <Link href="/faq">الاسئلة الشائعه</Link>
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
                  <h4 className="footer-title">الخدمات </h4>
                  <div className="footer-menu">
                    <ul>
                     
                     
                      <li>
                        <Link href="/login">تسجيل دخول</Link>
                      </li>
                      <li>
                        <Link href="/my-account">حسابي</Link>
                      </li>
                      <li>
                        <Link href="/about">شروط الاستخدام</Link>
                      </li>
                      <li>
                        <Link href="/about">العروض الترويجية</Link>
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
                        <Link href="/login">تسجيل دخول</Link>
                      </li>
                      <li>
                        <Link href="/my-account">حسابي</Link>
                      </li>
                      <li>
                        <Link href="/wishlist">قائمة الامنيات</Link>
                      </li>
                     
                      <li>
                        <Link href="/faq">الأسئلة الشائعة</Link>
                      </li>
                      <li>
                        <Link href="/contact">تواصل معنا</Link>
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
                <div className="ltn__copyright-design clearfix "dir="ltr">
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
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
