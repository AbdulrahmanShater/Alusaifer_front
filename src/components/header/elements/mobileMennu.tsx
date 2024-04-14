import Link from "next/link";
import { FaTwitter, FaInstagram, FaYoutube, FaSnapchat, FaWhatsapp } from "react-icons/fa";


interface MobileMenuProps { offCanVastoggleBtn: boolean, closeSideBar: () => void, offcanVasToggler: () => void }
const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }: MobileMenuProps) {

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${offCanVastoggleBtn ? "ltn__utilize-open" : ""
          }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link href="/">
                <img src="/img/logo.png" alt="Logo" />
              </Link>
            </div>
            <button onClick={closeSideBar} className="ltn__utilize-close">
              ×
            </button>
          </div>

          <div className="ltn__utilize-menu" dir="rtl">
            <ul>
              <li>
                <Link href="/">الرئيسية</Link>

              </li>
              <li>
                <Link href="/about">من نحن </Link>

              </li>
              <li>
                <Link href="/aqarat">العقارات</Link>

              </li>
              <li>
                <Link href="/contact">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          <div className="ltn__social-media-1 " dir="rtl">
            <ul>
              <li>
                <Link href="https://www.youtube.com/channel/UCt6dNC90o6Y5LKjPFR-T3Qw?themeRefresh=1">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2Fm_alusaifer">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send/?phone=966920033002&text&type=phone_number&app_absent=0">
                  <FaWhatsapp />
                </Link>
              </li>
              <li>
                <Link href="https://www.snapchat.com/add/m.alusaifer/9swha3-JQzCJMBLJXb1cOAAAgdWNvZ2Nhc2pxAYzPc1i1AYzPcx3YAAAAAA?share_id=RDVFQTYxNzktNjNBNS00MEUwLUIwRUYtNDQ0MjVDQTdFNTM0&locale=ar_SA@calendar=gregorian&sid=5226a135ee044fb98e7d50e71c2b5355">
                  <FaSnapchat />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/malusaifer/?igshid=YzA2ZDJiZGQ%3D">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
