import { getProducts } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { LayoutFour } from "@/layouts/index";
import HeroSectionStyleFive from "@/components/hero/styleFive";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import CounterUp from "@/components/counterUp";
import Feature from "@/components/features";
import TitleSection from "@/components/titleSection";
import ProductItem from "@/components/product";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import AminitiesItem from "@/components/aminities/item";
import aminitiesData from "@/data/aminities/index.json";
import featuresData from "@/data/service/index.json";
import useBuildingType from "@/hooks/useBuildingType";


interface SlickArrowLeftProps {
    currentSlide?: number,
    slideCount?: number,
    props?: any[]
}
interface SlickArrowRightProps {
    currentSlide?: number,
    slideCount?: number,
    props?: any[]
}
function HomePageFive() {

    const hooksBuildingType = useBuildingType({ autoGetData: true, withAqars: true })

    const featureData = getProducts(featuresData, "buying", "featured", 3);

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: SlickArrowLeftProps) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <FaArrowLeft />
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }: SlickArrowRightProps) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === Number(slideCount) - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === Number(slideCount) - 1 ? true : false}
            type="button"
        >
            <FaArrowRight />
        </button>
    );
    const productCarouselsettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1799,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <LayoutFour topbar={false}>
                <>
                    <HeroSectionStyleFive />

                    <AboutUsStyleOne sectionSpace="pt-120 pb-90" />
                    <CounterUp />

                    <AboutUsStyleTwo sectionSpace="pt-120 pb-90" />

                    <Feature
                        classes="section-bg-1"
                        servicebtn={true}
                        data={featureData}
                        headingClasses="section-subtitle-2"
                        titleSectionData={{
                            sectionClasses: "text-center",
                            subTitle: "خدماتنا",

                        }}
                    />
                    {
                        hooksBuildingType.buildingTypes.map((bt, index) => {
                            return <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7" key={String(index)}>
                                <Container fluid>
                                    <Row>
                                        <Col lg={12}>
                                            <TitleSection
                                                sectionClasses="text-center"
                                                headingClasses="section-subtitle-2"
                                                titleSectionData={{
                                                    title: bt.name,
                                                    subTitle: "عقاراتنا",
                                                    additionalClassName: ""
                                                }}
                                            />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={12}>
                                            {
                                                // !!featuredProducts?.length
                                                !!(bt.aqars ?? []).length
                                                    ? (
                                                        <Slider
                                                            {...productCarouselsettings}
                                                            className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
                                                        >
                                                            {(bt.aqars ?? []).map((aqar, key) => <ProductItem key={aqar.id} productData={aqar} baseUrl={"aqar"} />)}
                                                        </Slider>
                                                    ) : null}
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        })
                    }

                    {/* PRODUCT SLIDER AREA END */}

                    <div className="ltn__apartments-plan-area pb-70">
                        <Container>
                            <Row>
                                <Col>
                                    <TitleSection
                                        sectionClasses="text-center"
                                        headingClasses="section-subtitle-2"
                                        titleSectionData={{
                                            title: "",
                                            subTitle: "تفاصيل ابراج محمد الاصيفر",
                                            additionalClassName: "",
                                        }}
                                    />

                                    <Tab.Container defaultActiveKey="first">
                                        <div className="ltn__tab-menu ltn__tab-menu-3 text-center">
                                            <Nav className="nav justify-content-center">
                                                <Nav.Link eventKey="first">فلل قصر الامير بندر</Nav.Link>
                                                <Nav.Link eventKey="second">الفلل البانورامية</Nav.Link>
                                                <Nav.Link eventKey="third">شقق بانورامية بالحوش</Nav.Link>
                                                <Nav.Link eventKey="fourth">فلل السحاب</Nav.Link>
                                                {/* <Nav.Link eventKey="five"> Double Height</Nav.Link>  */}
                                            </Nav>
                                        </div>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first" >
                                                <div className="ltn__apartments-tab-content-inner">
                                                    <Row>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-info ltn__secondary-bg text-color-white" dir="rtl">
                                                                <h2>فلل روف قصر الامير بندر</h2>
                                                                <p>
                                                                    تقع ابراج محمد الاصيفر في موقع استراتيجي مما يوفر سهولة الوصول الى طرق النقل الرئيسية والمدارس الشهيرة ووجهات التسوق الراقية وعدد كبير من خيارات الترفية سيستمتع السكان براحة كبيره من خيارات الترفية سيستمتع السكان براحة الحصول على كل مايحتاجون إلية في متناول اليد
                                                                </p>
                                                                <div className="apartments-info-list apartments-info-list-color mt-40" dir="ltr">
                                                                    <ul>
                                                                        <li>
                                                                            <span>المساحة الاجمالية</span>
                                                                            <label>320</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>دورات المياة</span>
                                                                            <label>5</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف النوم </span>
                                                                            <label>3</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف إضافية</span>
                                                                            <label>4</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>عمر العقار</span>
                                                                            <label>جديد</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>الواجهة </span>
                                                                            <label>غربية     </label>
                                                                        </li>


                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-img">
                                                                <img src="/img/فيلل الامير بندر 2.png" alt="#" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="ltn__product-tab-content-inner">
                                                    <Row>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-info ltn__secondary-bg text-color-white" dir="rtl">
                                                                <h2>الفلل البانورامية</h2>
                                                                <p>
                                                                    يمثل الاستثمار في ابراج محمد الاصيفر فرصة فريدة لامتلاك عقار مرموق في واحد من اكثر المواقع المرغوبة في الطائف مع موقعة المتميز ومناظره الأستثنائية ,لايعد هذا التطور بنمط حياة فاخر فحسي ,بل يعد ايضا بإمكانية كبيرة لتقدير القيمة
                                                                </p>
                                                                <div className="apartments-info-list apartments-info-list-color mt-40" dir="ltr">
                                                                    <ul>
                                                                        <li>
                                                                            <span>المساحة الاجمالية</span>
                                                                            <label>338</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>دورات المياة</span>
                                                                            <label>5</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف النوم </span>
                                                                            <label>3</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف إضافية</span>
                                                                            <label>4</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>عمر العقار</span>
                                                                            <label>جديد</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>الواجهة </span>
                                                                            <label>غربية     </label>
                                                                        </li>


                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-img">
                                                                <img src="/img/الفلل البانورامية .png" alt="#" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <div className="ltn__product-tab-content-inner">
                                                    <Row>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-info ltn__secondary-bg text-color-white" dir="rtl">
                                                                <h2> فلل السحاب</h2>
                                                                <p>
                                                                    يمثل الاستثمار في ابراج محمد الاصيفر فرصة فريدة لامتلاك عقار مرموق في واحد من اكثر المواقع المرغوبة في الطائف مع موقعة المتميز ومناظره الأستثنائية ,لايعد هذا التطور بنمط حياة فاخر فحسي ,بل يعد ايضا بإمكانية كبيرة لتقدير القيمة
                                                                </p>
                                                                <div className="apartments-info-list apartments-info-list-color mt-40" dir="ltr">
                                                                    <ul>
                                                                        <li>
                                                                            <span>المساحة الاجمالية</span>
                                                                            <label>310</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>دورات المياة</span>
                                                                            <label>5</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف النوم </span>
                                                                            <label>3</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف إضافية</span>
                                                                            <label>4</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>عمر العقار</span>
                                                                            <label>جديد</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>الواجهة </span>
                                                                            <label>غربية     </label>
                                                                        </li>


                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-img">
                                                                <img src="/img/1 فيلل السحاب .png" alt="#" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div className="ltn__product-tab-content-inner">
                                                    <Row>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-info ltn__secondary-bg text-color-white" dir="rtl">
                                                                <h2>شقق بانورامية بالحوش</h2>
                                                                <p>
                                                                    يمثل الاستثمار في ابراج محمد الاصيفر فرصة فريدة لامتلاك عقار مرموق في واحد من اكثر المواقع المرغوبة في الطائف مع موقعة المتميز ومناظره الأستثنائية ,لايعد هذا التطور بنمط حياة فاخر فحسي ,بل يعد ايضا بإمكانية كبيرة لتقدير القيمة
                                                                </p>
                                                                <div className="apartments-info-list apartments-info-list-color mt-40" dir="ltr">
                                                                    <ul>
                                                                        <li>
                                                                            <span>المساحة الاجمالية</span>
                                                                            <label>230</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>دورات المياة</span>
                                                                            <label>5</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف النوم </span>
                                                                            <label>3</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>غرف إضافية</span>
                                                                            <label>4</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>عمر العقار</span>
                                                                            <label>جديد</label>
                                                                        </li>
                                                                        <li>
                                                                            <span>الواجهة </span>
                                                                            <label>غربية     </label>
                                                                        </li>


                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} lg={6}>
                                                            <div className="apartments-plan-img">
                                                                <img src="/img/شقق السحاب 1 .png" alt="#" />
                                                            </div>
                                                        </Col>

                                                    </Row>

                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Col>
                            </Row>
                        </Container>
                    </div>


                    {/* <!-- VIDEO AREA START --> */}
                    <div className="ltn__video-popup-area">
                        <VideoBanner />
                    </div>
                    {/* <!-- VIDEO AREA END --> */}
                    {/* <!-- CATEGORY AREA START -->  */}
                    <div className="ltn__category-area ltn__product-gutter pt-115 pb-90">
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <TitleSection
                                        sectionClasses="text-center"
                                        headingClasses="section-subtitle-2"
                                        titleSectionData={{
                                            subTitle: "المميزات",
                                            title: "مميزات الابراج",
                                            additionalClassName: "",
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="slick-arrow-1 justify-content-center">
                                {aminitiesData.map((data, key) => {
                                    return (
                                        <Col key={key} xs={12} sm={6} md={4} lg={3}>
                                            <AminitiesItem data={data} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                    </div>

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
            </LayoutFour>
        </>
    );
}


export default HomePageFive;
