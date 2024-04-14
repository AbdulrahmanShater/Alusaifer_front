import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { getProducts } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Feature from "@/components/features";
import featureData from "@/data/service/index.json"
import VideoItem from "@/components/aboutUs/videoItem";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import { useCallback, useEffect, useMemo, useState } from "react";
import VimeoService from "@/api/services/VimeoService";
import ReactPaginate from "react-paginate";
import { Skeleton } from "@mui/material";
import { VimeoJsonR } from "@/api/interface/vimeo";

function AboutUs() {
  const featureDataSorted = getProducts(featureData, "buying", "featured", 3);

  const [videos, setVideos] = useState<VimeoJsonR | null>(null);
  const [loading, setLoading] = useState(false);

  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  const enableNext = useMemo(() => {
    if (!videos) return false;
    return currentUrl != videos?.paging?.last
  }, [videos, currentUrl])

  const enablePrev = useMemo(() => {
    if (!videos) return false;
    return videos?.paging?.previous !== null
  }, [videos, currentUrl])

  const feachVideos = useCallback((param?: { url: string | null | undefined }) => {
    VimeoService.getAll({
      paginationUrl: (!param || !param.url) ? undefined : param.url,
      data: null,
      onBefore: () => {
        setLoading(true)
      },
      onSuccess: (response: VimeoJsonR) => {
        setVideos(response)
        setCurrentUrl((!param || !param.url) ? null : param.url)
      },
      onFinally: () => {
        setLoading(false)
      }
    })
  }, []);

  useEffect(() => {
    feachVideos()
  }, [])


  return (
    <>
      <LayoutOne topbar={true} >
        <>
          <ShopBreadCrumb
            title="عن شركة محمد الاصيفر "
            sectionPace=""
          />

          <AboutUsStyleTwo sectionSpace="pb-90" />

          <Feature
            classes="section-bg-1"
            headingClasses={''}
            servicebtn={true}
            data={featureDataSorted}
            titleSectionData={{
              subTitle: "",
              sectionClasses: "text-center",

            }}
          />

          <div className="ltn__team-area pt-115 pb-90">
            <Container>
              <Row>
                <Col lg={12}>
                  <TitleSection
                    sectionClasses="text-center"
                    headingClasses="section-subtitle-2"
                    titleSectionData={{
                      subTitle: "المشاريع",
                      title: "تغذية بصرية",
                      additionalClassName: ""
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <>
                  {
                    loading ? <>
                      <Col xs={12}>
                        <Row>
                          <Col>
                            <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} />
                          </Col>
                          <Col>
                            <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} />
                          </Col>
                          <Col>
                            <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} />
                          </Col>
                        </Row>
                      </Col>
                    </> : <>
                      {((videos?.data) ?? []).map((video, key) => {
                        return (
                          <Col key={key} xs={12} sm={6} lg={4} >
                            <VideoItem
                              key={key}
                              uri={video.uri}
                              image={video.pictures.base_link}
                              title={video.name}
                              additionalClassname="relative"
                            />
                          </Col>
                        );
                      })}
                    </>

                  }

                </>
              </Row>

              <div className="ltn__pagination-area text-center">
                <ReactPaginate
                  nextLabel={<FaAngleDoubleLeft className={`${!enableNext ? 'disable-cursor' : ''}`} onClick={() => {

                    if (enableNext) {
                      feachVideos({ url: videos?.paging?.next });
                    }
                  }} />}
                  previousLabel={<FaAngleDoubleRight className={`${!enablePrev ? 'disable-cursor' : ''}`} onClick={() => {
                    if (enablePrev) {
                      feachVideos({ url: videos?.paging?.previous });
                    }
                  }} />}
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination ltn__pagination justify-content-center"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                  pageCount={0}
                />
              </div>


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
      </LayoutOne>
    </>
  );
}

export default AboutUs;
