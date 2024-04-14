import React, { useState, useEffect } from "react";
import useBuildingType from "@/hooks/useBuildingType";
import FilterBy from "../FilterBy";
import { Disclosure, } from '@headlessui/react'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { FilterData } from "@/api/interface/advertisements";

interface SideBarProps { filterHandler: (value: FilterData) => void }

const SideBar = ({ filterHandler }: SideBarProps) => {

  const hooksBuildingType = useBuildingType({ autoGetData: true, withAqars: false })

  const [searchData, setSearchData] = useState<FilterData>({});

  function inputHandeler(event: any) {

    var type = 'text'
    var name = event.target.name;
    var value = (type == "checkbox") ? event.target.checked : event.target.value;
    if (type != "checkbox" && (value == "" || value == null)) {
      value = undefined;
    }

    if (event.target.type) type = event.target.type == undefined ? 'text' : event.target.type

    inputHandelerForce(value, name)
  }

  function inputHandelerForce(value: any, name: string) {
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

          <RadioGroup
            style={{
              direction: "rtl"
            }}
            value={searchData.buildingtype ?? null}
            onChange={(event) => {
              inputHandelerForce(event.target.value, "buildingtype");
            }}
          >
            {
              hooksBuildingType.buildingTypes.map((buildingType) => {
                return <FormControlLabel value={buildingType.id} control={<Radio />} label={buildingType.name} />
              })
            }
          </RadioGroup>

          <hr />

          <RadioGroup
            style={{
              direction: "rtl"
            }}
            value={Number(searchData.from_dashboard)}
            onChange={(event) => {
              inputHandelerForce(event.target.value, "from_dashboard");
            }}
          >
            <FormControlLabel value={Number(1)} control={<Radio />} label={"مشاريع الشركة"} />
            <FormControlLabel value={Number(0)} control={<Radio />} label={"مشاريع التسويق الخارجي"} />
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
        </div>
      </aside>
    </>
  );
};

export default SideBar;
