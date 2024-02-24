import Link from "next/link";
import { FaFilm, FaCamera } from "react-icons/fa";
const ProductItem = ({
  productData,
}) => {

  return (
    <>
      <Link href={`/shop/${productData.id}`} className="ltn__product-item ltn__product-item-4">
        {/* <div className="ltn__product-item ltn__product-item-4"> */}
        <div className="product-img">
          {/* <Link > */}
          <img
            src={productData.icon}
            alt={`${productData.user}`}
            style={{ height: "250px", width: "100%", objectFit: "cover" }}
          />
          {/* </Link> */}
          <div className="product-badge">
            <ul>
              {/* <li
                className={`sale-badge ${productData.rent ? "bg-green" : ""}`}
              >
                {badgeText}
              </li> */}
            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              <ul>
                <li>
                  <Link href={`/shop/${productData.id}`}>
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
                    href={`/shop/${productData.id}`}
                  // href={`/${baseUrl}/${slug}`}
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
              {`${Number(productData.max_price).toLocaleString('en')}`}
              {/* <label>/Month</label> */}
            </span>
          </div>
          <h2 className="product-title">
            {/* /${baseUrl}/${slug} */}
            <Link href={``}>{productData.user}</Link>
          </h2>
          {/* <div className="product-description">
            <p>{productData.fullDescription}</p>
          </div> */}
          <ul className="ltn__list-item-2 ltn__list-item-2-before">
            <li>
              <span>
                {productData.bedrooms_count}
                <i className="flaticon-bed"></i>
              </span>
              {"غرفة نوم"}
            </li>
            <li>
              <span>
                {productData.bathrooms_count}
                <i className="flaticon-clean"></i>
              </span>
              {"حمام"}
            </li>
            {/* <li>
              <span>
                {productData.propertyDetails.area}
                <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
              </span>
              square Ft
            </li> */}
          </ul>
        </div>
        <div className="product-info-bottom">
          <div className="real-estate-agent">
            <div className="agent-img">
              <Link href="/team-details">
                <img
                  src={productData.user_avatar}
                  alt={`${productData.user}`}
                />
              </Link>
            </div>
            <div className="agent-brief">
              {/* <h6>
                <Link href="/team-details">{productData.agent.firstName}</Link>
              </h6> */}
              <small>{productData.user_type}</small>
            </div>
          </div>
          {/* <div className="product-hover-action">
            <ul>
              <li>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={quickViewTooltip}
                >
                  <button onClick={() => setModalShow(true)}>
                    <i className="flaticon-expand"></i>
                  </button>


                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={wishListTooltip}
                >
                  <button
                    onClick={
                      wishlistItem !== undefined
                        ? () => dispatch(deleteFromWishlist(productData.id))
                        : () => dispatch(addToWishlist(productData))
                    }
                  >
                    <i className="flaticon-heart-1"></i>
                  </button>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={addToCartTooltip}
                >
                  <button onClick={() => dispatch(addToCart(productData))}>
                    <i className="flaticon-add"></i>
                  </button>
                </OverlayTrigger>
              </li>
            </ul>
          </div> */}
        </div>
        {/* </div> */}
      </Link>

    </>
  );
};

export default ProductItem;
