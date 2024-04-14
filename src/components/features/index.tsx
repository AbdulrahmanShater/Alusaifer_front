import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleSection from "@/components/titleSection";
import { productSlug } from "@/lib/product";

interface FeatureProps {
  data: { title: string, shortDescription: string, active: boolean }[],
  servicebtn: boolean,
  titleSectionData: { subTitle: string, sectionClasses: string },
  classes: string,
  headingClasses: string,
}
function Feature({ data, servicebtn, titleSectionData, classes, headingClasses }: FeatureProps) {
  return (
    <>
      <div className={`ltn__feature-area pt-115 pb-90 ${classes}`}>
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                titleSectionData={{ title: "", subTitle: titleSectionData.subTitle, additionalClassName: "" }}
                sectionClasses={titleSectionData.sectionClasses}
                headingClasses={headingClasses}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            {data.map((item, key) => {
              const slug = productSlug(item.title);
              return (
                <Col key={key} xs={12} sm={6} lg={4}>
                  <div
                    className={`ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 ${item.active ? "active" : ""
                      }`}
                  >
                    <div className="ltn__feature-info">
                      <h3>
                        <Link href={`/service/${slug}`}>{item.title}</Link>
                      </h3>
                      <p>{item.shortDescription}</p>

                      {servicebtn ? (
                        <Link className="ltn__service-btn" href={`/service/${slug}`} > </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature;
