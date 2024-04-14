import { AqarModel } from "@/model/aqar";
import Link from "next/link";


interface ProductListProps { productData: AqarModel, baseUrl: string }

const ProductList = ({ productData, baseUrl }: ProductListProps) => {

  return (
    <>
      <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
        <div className="product-img">
          <Link href={`/${baseUrl}/${productData.id}`}>
            <img
              src={productData.icon}
              alt={`${productData.user}`}
            />
          </Link>
        </div>

        <div className="product-info">
          <div className="product-badge-price">
            <div className="product-badge">
              <ul>
                <li
                  className={`sale-badge ${productData.views ? "bg-green" : ""}`}
                >
                </li>
              </ul>
            </div>

            <div className="product-price">
              <span>
                {`${Number(productData.max_price).toLocaleString('en')}`}
              </span>
            </div>
          </div>

          <h2 className="product-title">
            <Link href={`/${baseUrl}/${productData.id}`}>{productData.name}</Link>
          </h2>

          <div className="product-img-location">
            <ul>
              <li>
                <Link href={`/${baseUrl}/${productData.id}`}>
                  <i className="flaticon-pin"></i>
                  {productData.address}
                </Link>
              </li>
            </ul>
          </div>

          <ul className="ltn__plot-brief">
            <li>
              <span>
                {productData.bedrooms_count}
              </span>
              <span className="me-1"> {"غرفة نوم"}</span>
              <i className="flaticon-bed"></i>
            </li>
            <li>
              <span>
                {productData.bathrooms_count}
              </span>
              <span className="me-1">  {"حمام"}</span>
              <i className="flaticon-clean"></i>
            </li>
          </ul>
        </div>
        <div className="product-info-bottom">
          <div className="real-estate-agent">
            <div className="agent-img">
              <Link href={`/${baseUrl}/${productData.id}`}>
                <img
                  src={productData.user_avatar}
                  alt={`${productData.name}`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
