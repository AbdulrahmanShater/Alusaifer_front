import { FaHome } from "react-icons/fa";

function HeroSectionStyleFive() {
  return (
    <>

    <div className="ltn__slider-area ltn__slider-4 position-relative ltn__primary-bg fix">
        <div className="ltn__slide-animation-active">
            
            {/* <!-- HTML5 VIDEO --> */}
            <video autoPlay muted loop id="myVideo">
                <source src="/img/1203.mp4" type="video/mp4"/>
            </video>

            {/* <!-- YouTube VIDEO --> */}

            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7" style={{
            backgroundImage: `url("")`,
          }}>
                <div className="ltn__slide-item-inner text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 align-self-center">
                                <div className="slide-item-info">
                                    <div className="slide-item-info-inner ltn__slide-animation">
                                        <h6 className="slide-sub-title white-color animated"><span><FaHome/></span> ابراج شركة محمد الاصيفر</h6>
                                        <h1 className="slide-title text-uppercase white-color animated ">فخامة الاسم تعني فخامة المكان <br/></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

export default HeroSectionStyleFive;
