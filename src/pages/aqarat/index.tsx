import { useState, useEffect } from "react";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { LayoutOne } from "@/layouts";
import { FaThLarge, FaThList, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import SideBar from "@/components/shopSideBar";
import ProductList from "@/components/product/list";
import Search from "@/components/search";
import ReactPaginate from "react-paginate";
import FilterService from "@/api/services/FilterService";
import CallToAction from "@/components/callToAction";
import ProductItem from "@/components/product";
import Skeleton from '@mui/material/Skeleton';
import { AqarModel } from "@/model/aqar";
import { FilterData } from "@/api/interface/advertisements";
import { PaginationResponse } from "@/api/config/BaseJson";

function ShopRightSideBar() {

  const [results, setResults] = useState<PaginationResponse<AqarModel[]> | null>(null)

  const [isFiltering, setIsFiltering] = useState(false)

  const [searchData, setSearchData] = useState<FilterData>({});

  const [query, setQuery] = useState("");

  const handlePageClick = (event: any) => {
    var url = `&page=${event.selected + 1}`;
    filterHandler(searchData, url)
  };

  function filterHandler(searchData: FilterData, paginationUrl = "") {
    setSearchData(searchData)
    FilterService.getAll({
      data: searchData,
      paginationUrl: paginationUrl,
      onBefore() {
        setIsFiltering(true)
      },
      onSuccess(response) {
        if (response.success) {
          setResults(response.data)
        } else {
          alert(response.message)
        }
      },
      onFinally() {
        setIsFiltering(false)
      },
    })
  }

  return (
    <LayoutOne topbar={true}>
      <>
        <ShopBreadCrumb
          title="العقارات"
          sectionPace=""
        // currentSlug="العقارات"
        />
        <div className="ltn__product-area ltn__product-gutter mb-120" >
          <Container>
            <Row>

              <Col xs={12} lg={4}>
                <SideBar filterHandler={filterHandler} />
              </Col>

              <Col xs={12} lg={8}>
                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__shop-options">
                    <ul className="justify-content-between">
                      <li>
                        <div className="ltn__grid-list-tab-menu">
                          <Nav className="nav">
                            <Nav.Link eventKey="first">
                              <FaThLarge />
                            </Nav.Link>
                            <Nav.Link eventKey="second">
                              <FaThList />
                            </Nav.Link>
                          </Nav>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Search spaceBottom="mb-30" setQuery={setQuery} />

                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                        <Row>
                          {
                            isFiltering ?
                              <>
                                {
                                  [1, 2, 3, 4, 5, 6].map((aqar, key) => {
                                    return (<>
                                      <Col key={key} xs={12} sm={6}>
                                        <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} key={key} />
                                      </Col>
                                    </>)
                                  })
                                }
                              </> :
                              <>
                                {results?.data?.map((product, key) => {
                                  return (
                                    <Col key={key} xs={12} sm={6}>
                                      <ProductItem
                                        key={product.id}
                                        productData={product}
                                        baseUrl="aqar"
                                      />
                                    </Col>
                                  );
                                })}
                              </>
                          }


                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__product-tab-content-inner ltn__product-list-view">
                        <Row>

                          {
                            isFiltering ?
                              <>
                                {
                                  [1, 2, 3, 4, 5, 6].map((aqar, key) => {
                                    return (<>
                                      <Col key={key} xs={12} sm={6}>
                                        <Skeleton variant="rectangular" width={350} height={400} style={{ margin: "10px" }} key={key} />
                                      </Col>
                                    </>)
                                  })
                                }
                              </> :
                              <>
                                {results?.data?.map((product, key) => {
                                  return (
                                    <Col key={key} xs={12}>
                                      <ProductList
                                        productData={product}
                                        baseUrl="aqar"
                                      />
                                    </Col>
                                  );
                                })}
                              </>
                          }
                        </Row>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>


                </Tab.Container>
                <div className="ltn__pagination-area text-center">
                  <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={Number(results?.meta?.links.length) - 2}
                    nextRel={results?.links?.next}
                    prevRel={results?.links?.prev}
                    nextLabel={<FaAngleDoubleLeft />}
                    previousLabel={<FaAngleDoubleRight />}
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
                  />
                </div>
              </Col>

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
    </LayoutOne>
  );
}

export default ShopRightSideBar;
