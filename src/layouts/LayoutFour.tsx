import { Fragment, useState } from "react";
import { HeaderTransparent } from "@/components/header/index";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll-to-top";
import WhatsAppButton from "@/components/whatsapp-button";

const LayoutFour = ({ children, navPositionClass, topbar }
  : { children: JSX.Element, navPositionClass?: string, topbar: any }) => {
  const [toggleClassName, SetToggleClassName] = useState(false);

  function toggleClassNameInBody() {
    SetToggleClassName((toggleClassName) => !toggleClassName);
  }

  return (
    <Fragment>
      <div
        className={`body-wrapper ${toggleClassName ? "ltn__utilize-open" : ""}`
        }
      >
        <HeaderTransparent
          SetToggleClassName={SetToggleClassName}
          topbar={topbar}
        />
        {children}
        < Footer />

        <ScrollToTop />
        < WhatsAppButton />

      </div>
    </Fragment>
  );
};

export default LayoutFour;
