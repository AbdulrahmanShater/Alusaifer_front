import { useState, useEffect } from "react";

import {
  getIndividualAminities,
  getIndividualAminitiesList,
  priceRange,
  bedBath,
  getIndividualCategories,
  setActiveSort,
} from "@/lib/product";
import FilterByPrice from "../FilterByPrice";
import useBuildingType from "@/hooks/useBuildingType";
import FilterBy from "../FilterBy";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { Box, Button, CircularProgress, FormControlLabel, LinearProgress, Radio, RadioGroup, Rating, TextField } from '@mui/material';
import { FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { FaThLarge, FaThList, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const SideBar = ({ products, getSortParams, filterHandler }) => {
  const aminities = getIndividualAminities(products);
  const aminitiesList = getIndividualAminitiesList(products);
  const priceRanges = priceRange(products);
  const bedBaths = bedBath(products);
  const categories = getIndividualCategories(products);

  const hooksBuildingType = useBuildingType({ autoGetData: true, withAqars: false })

  const [searchData, setSearchData] = useState({});
  const [results, setResults] = useState([])


  function inputHandeler(event) {

    var type = 'text'
    var name = event.target.name;
    var value = (type == "checkbox") ? event.target.checked : event.target.value;
    if (type != "checkbox" && (value == "" || value == null)) {
      value = undefined;
    }

    if (event.target.type) type = event.target.type == undefined ? 'text' : event.target.type

    inputHandelerForce(value, name)
  }

  function inputHandelerForce(value, name) {
    setSearchData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    filterHandler(searchData)
  }, [searchData])

  return (
    <>
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar" style={{ textAlign: "right" }}>
        <h3 className="mb-10 !text-red-500">معلومات اضافية</h3>
        <label className="mb-30">

        </label>
        {/* <!-- Advance Information widget --> */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">{"نوع العقار"}</h4>

          {hooksBuildingType.buildingTypes.length > 0 ? (
            <>
              <RadioGroup
                style={{ direction: 'rtl' }}
                value={searchData.buildingType}
                onChange={(event) => {
                  inputHandelerForce(event.target.value, 'buildingtype');
                }}
              >
                {hooksBuildingType.buildingTypes &&
                  hooksBuildingType.buildingTypes.map((buildingType, key) => {

                    var checked = false;
                    if (searchData.buildingType !== undefined) {
                      if (searchData.buildingType !== null) {
                        checked = Number(searchData.buildingType) == Number(buildingType.id)
                      }
                    }

                    return <FormControlLabel key={key} value={buildingType.id} control={<Radio />} label={buildingType.name} />
                    // return (
                    //   <li key={key}>
                    //     <div>
                    //       <label className="checkbox-item" style={{ display: "flex", flexDirection: "row-reverse" }}>
                    //         {buildingType.name}
                    //         <input
                    //           onClick={(e) => {
                    //             inputHandelerForce(buildingType.id, "buildingtype");
                    //             // getSortParams("propertyTypes", buildingType.name);
                    //             // setActiveSort(e);
                    //           }}
                    //           checked={checked}
                    //           type="checkbox"
                    //         />
                    //         <span className="checkmark"></span>
                    //       </label>
                    //       <span className="categorey-no">
                    //         {/* {products[key < aminities.length ? key : 1].price} */}
                    //       </span>
                    //     </div>
                    //   </li>
                    // );
                  })}
              </RadioGroup>
            </>
          ) : (
            "No categories found"
          )}

          {/* <hr />
          <h4 className="ltn__widget-title">Amenities</h4>
          {aminitiesList.length > 0 ? (
            <>
              <ul>
                {aminitiesList &&
                  aminitiesList.map((aminitie, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {aminitie.name}
                            <input
                              onClick={(e) => {
                                getSortParams("AmenitiesList", aminitie.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )} */}

          {/* <hr /> */}
          {/* <h4 className="ltn__widget-title">Price Renge</h4>
          {priceRanges.length > 0 ? (
            <>
              <ul>
                {priceRanges &&
                  priceRanges.map((price, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {price.name}
                            <input
                              onClick={(e) => {
                                getSortParams("AmenitiesList", price.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )} */}

          {/* <hr /> */}
          {/* <!-- Price Filter Widget --> */}

          <hr />

          <RadioGroup
            style={{ direction: 'rtl' }}
            value={searchData.from_dashboard}
            onChange={(event) => {
              inputHandelerForce(event.target.value, 'from_dashboard');
            }}
          >
            <FormControlLabel value={1} control={<Radio />} label="مشارع الشركة" />
            <FormControlLabel value={0} control={<Radio />} label="مشاريع التسويق الخارجي" />
          </RadioGroup>

          <hr />
          <div className="ltn__price-filter-widget mt-30">
            <h4 className="ltn__widget-title">{"السعر و المساحة"}</h4>

            <FilterBy className="price_filter" rangTitle={"السعر"} min={0} max={900000} onChange={(value, index) => {
              inputHandelerForce(value[0], "minprice");
              inputHandelerForce(value[1], "maxprice");
            }} />

            <FilterBy className="price_filter  mt-60" rangTitle={"المساحة"} min={0} max={900000} onChange={(value, index) => {
              inputHandelerForce(value[0], "mindistance");
              inputHandelerForce(value[1], "maxdistance");
            }} />

          </div>

          <hr />
          <Disclosure as="div" key={'details'} className="border-b border-gray-200 py-6">
            {({ open }) => (
              <>
                <h3 className="-my-3 flow-root">
                  <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">{"تفاصيل إضافية"}</span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon aria-hidden="true" width={25} height={25} />
                      ) : (
                        <PlusIcon aria-hidden="true" width={25} height={25} />
                      )}
                    </span>
                  </Disclosure.Button>
                </h3>
                <Disclosure.Panel className="pt-6">
                  <div  >
                    {
                      [
                        {
                          name: "shopscount",
                          title: "المحلات",
                          type: "text",
                          min: 0,
                        },
                        {
                          name: "streetwidth",
                          title: "عرض الشارع",
                          type: "number",
                          min: 0,
                        },
                        {
                          name: "age",
                          title: "عمر العقار",
                          type: "number",
                          min: 0,
                        },
                        {
                          name: "bedroomscount",
                          title: "عدد غرف النوم",
                          type: "number",
                          min: 0,
                        },
                        {
                          name: "bathroomsCount",
                          title: "عدد دورات المياه",
                          type: "number",
                          min: 0,
                        },
                        {
                          name: "interface",
                          title: "عرض الواجهة",
                          type: "text",
                          min: undefined,
                        },
                      ].map((inp, index) => {
                        return <input
                          key={index}
                          style={{ marginBottom: "1rem", textAlign: "right" }}
                          type={inp.type}
                          min={inp.min}
                          name={inp.name}
                          value={searchData[inp.name]}
                          onChange={inputHandeler}
                          placeholder={inp.title}
                        />
                      })

                    }
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <button type="submit" className="btn theme-btn-1"  >
            تصفية
          </button>
          {/* <div className="ltn__price-filter-widget mt-30">
            <h4 className="ltn__widget-title">المزيد من التفاصيل</h4>

            <FilterBy className="price_filter" rangTitle={"المحلات"} min={0} max={900000} onChange={(value, index) => {
            }} />

            <FilterBy className="price_filter  mt-60" rangTitle={"المساحة"} min={0} max={900000} onChange={(value, index) => {
            }} />

            <FilterBy className="price_filter  mt-60" rangTitle={"المساحة"} min={0} max={900000} onChange={(value, index) => {
            }} />

          </div> */}

          {/* المزيد من التفاصيل */}
          {/* <div className="ltn__price-filter-widget mt-30">
            <h4 className="ltn__widget-title">المزيد من التفاصيل</h4>
            <div className="price_filter">
              <FilterByPrice />
            </div>
          </div>
          <hr />
          <h4 className="ltn__widget-title">Bed/bath</h4>
          {bedBaths.length > 0 ? (
            <>
              <ul>
                {bedBaths &&
                  bedBaths.map((bath, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {bath.name}
                            <input
                              onClick={(e) => {
                                getSortParams("AmenitiesList", bath.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )}
          <hr />
          <h4 className="ltn__widget-title">Catagory</h4>
          {categories.length > 0 ? (
            <>
              <ul>
                {categories &&
                  categories.map((categorie, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {categorie.name}
                            <input
                              onClick={(e) => {
                                getSortParams("category", categorie.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )} */}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
