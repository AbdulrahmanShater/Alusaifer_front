import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";
import QuickViewtModal from "@/components/modals/quickViewModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const ProductList = ({
  productData,
  baseUrl,
}) => {

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
                  className={`sale-badge ${productData.rent ? "bg-green" : ""}`}
                >
                  {/* {badgeText} */}
                </li>
              </ul>
            </div>

            <div className="product-price">
              <span>
                {`${Number(productData.max_price).toLocaleString('en')}`}
                {/* <label>/Month</label> */}
              </span>
            </div>
          </div>

          <h2 className="product-title">
            <Link href={`/${baseUrl}/${productData.id}`}>{productData.title}</Link>
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
                  alt={`${productData.title}`}
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
