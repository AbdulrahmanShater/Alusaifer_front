import { Fragment, useState } from "react";
import { HeaderOne } from "@/components/header/index";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/scroll-to-top";

const LayoutOne = ({ children, topbar }
  : { children: JSX.Element, topbar: boolean }) => {
  const [toggleClassName, SetToggleClassName] = useState(false);

  return (
    <Fragment>
      <div
        className={`body-wrapper ${toggleClassName ? "ltn__utilize-open" : ""}`}
      >
        <HeaderOne SetToggleClassName={SetToggleClassName} />
        {children}
        <Footer />
        <ScrollToTop />
      </div>
    </Fragment>
  );
};

export default LayoutOne;
