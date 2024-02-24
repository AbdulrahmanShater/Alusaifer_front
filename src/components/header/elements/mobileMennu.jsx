import Link from "next/link";
import {
  FaRegUser,
  FaRegHeart,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSearch,
  FaYoutube,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";

import {
  getSiblings,
  getClosest,
  slideUp,
  slideDown,
  slideToggle,
} from "@/lib/product";
import { useSelector } from "react-redux";

const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }) {
  const { cartItems } = useSelector((state) => state.cart);

  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    parentEl.classList.toggle("active");
    if (
      parentEl?.classList.contains("menu-expand") ||
      target.classList.contains("menu-expand")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        sibling.classList.remove("active");
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${
          offCanVastoggleBtn ? "ltn__utilize-open" : ""
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
          {/* <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <FaSearch />
              </button>
            </form>
          </div> */}
          <div className="ltn__utilize-menu" dir="rtl">
            <ul>
              <li>
                <Link href="#">الرئسية</Link>
               
              </li>
              <li>
                <Link href="/about">من نحن </Link>
               
              </li>
              <li>
                <Link href="/shop/right-sidebar">العقارات</Link>
              
              </li>
              {/* <li>
                <Link href="/add-listing">اضف عقارك</Link>
                
              </li> */}
              {/* <li>
                <Link href="#">Pages</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                  </li>

                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/page-two">Portfolio - 02</Link>
                  </li>

                  <li>
                    <Link href="/team">Team</Link>
                  </li>

                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/history">History</Link>
                  </li>
                  <li>
                    <Link href="/add-listing">Add Listing</Link>
                  </li>
                  <li>
                    <Link href="/locations">Google Map Locations</Link>
                  </li>
                  <li>
                    <Link href="/404">404</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Coming Soon</Link>
                  </li>
                </ul>
              </li> */}
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
