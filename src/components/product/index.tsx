import { AqarModel } from "@/model/aqar";
import Link from "next/link";
import { FaFilm, FaCamera } from "react-icons/fa";

interface ProductItemProps { productData: AqarModel, baseUrl: string }

const ProductItem = ({ productData, baseUrl }: ProductItemProps) => {

  return (
    <>
      <Link href={`/aqar/${productData.id}`} className="ltn__product-item ltn__product-item-4" style={{ direction: "rtl" }}>
        <div className="product-img">
          <img
            src={productData.icon}
            alt={`${productData.user}`}
            style={{ height: "250px", width: "100%", objectFit: "cover" }}
          />
          <div className="product-badge">
            <ul>

            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              <ul>
                <li>
                  <Link href={`/aqar/${productData.id}`}>
                    <i className="flaticon-pin"></i>
                    {productData.address}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product-img-gallery">
              <ul>
                <li>
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    href={`/aqar/${productData.id}`}
                  >
                    <FaCamera className="me-2" />
                    {productData.images?.length}
                  </Link>
                </li>

                {
                  productData.video_link !== null ? <li>
                    <Link
                      className="d-flex align-items-center justify-content-center"
                      href={productData.video_link}
                    >
                      <FaFilm className="me-2" />
                      {`${productData.video_link !== null ? "1" : "0"}`}
                    </Link>
                  </li> : null
                }

              </ul>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className="product-price">
            <span>
              {`ر.س ${Number(productData.max_price).toLocaleString('en')}`}
            </span>
          </div>
          <h2 className="product-title">
            <Link href={`/aqar/${productData.id}`}>{productData.name}</Link>
          </h2>
          <div className="product-description">
            <p>{productData.address}</p>
          </div>
          <ul className="ltn__list-item-2 ltn__list-item-2-before" >
            <li>
              <span>
                {`${productData.min_distance}-${productData.max_distance}م`}
                <i className="flaticon-expand" ></i>
              </span>
              {"مساحة"}
            </li>
            <li>
              <span>
                {`${productData.views}`}
                <i className="far fa-eye" ></i>
              </span>
              {"المشاهدات"}
            </li>
          </ul>
        </div>
        <div className="product-info-bottom" >
          <div className="real-estate-agent" style={{ gap: "0.5rem" }}>
            <div className="agent-img">
              <Link href="/team-details">
                <img
                  src={productData.user_avatar}
                  alt={`${productData.user}`}
                />
              </Link>
            </div>
            <div className="agent-brief" style={{ display: "flex", flexDirection: "column" }}>
              <small>{productData.user_type}</small>
              <small>{productData.user}</small>
            </div>
          </div>
          <small>{productData.creation_time}</small>
        </div>
      </Link>

    </>
  );
};

export default ProductItem;
