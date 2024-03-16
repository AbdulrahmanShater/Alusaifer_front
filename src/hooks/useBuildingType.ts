import { useCallback, useEffect, useState } from "react";
import { BuildingTypeModel } from "@/model/buildingType";
import BuildingTypeService from "@/api/services/BuildingTypeService";
import { GetAllJsonR } from "@/api/interface/building_type/get";
import { buildUrlWithParams, http } from "@/api/config/http";
import { FilterData, FilterJsonR } from "@/api/interface/advertisements/filter";
import { ADVERTISEMENTS_URL } from "@/api/config/url";
import FilterService from "@/api/services/FilterService";


export default function useBuildingType({ autoGetData, withAqars }: { autoGetData: boolean, withAqars: boolean }) {

  const [buildingTypes, setBuildingTypes] = useState<BuildingTypeModel[]>([])

  const [loading, setLoading] = useState<boolean>(false);

  // const fetchAqarsData = async (bt: BuildingTypeModel) => {
  //   try {
  //     var aqarsData = [];
  //     // const response = (await http()).get(buildUrlWithParams<FilterData>(ADVERTISEMENTS_URL.FILTER, { buildingtype: String(bt.id) }))
  //     // const response = await fetch(buildUrlWithParams<FilterData>(`https://akar.alusaifer.com.sa/api${ADVERTISEMENTS_URL.FILTER}`, { buildingtype: String(bt.id) }));
  //     // const aqarsData = await response.json()

  //     // return aqarsData;

  //     await FilterService.getAll({
  //       data: { buildingtype: String(bt.id) },
  //       onSuccess: (response) => {
  //         aqarsData = response;
  //       }
  //     })
  //   } catch (error) {
  //     console.error('Error fetching aqars data:', error);
  //     return [];
  //   }
  // };

  const getBuildingTypes = useCallback(async () => {
    // BuildingTypeService.getAll({
    //   data: null,
    //   onBefore: function (): void {
    //     setLoading(true);
    //   },
    //   async onSuccess(response) {
    //     var data: BuildingTypeModel[] = response.data.data;
    //     if (withAqars) {
    //       // Update the data array with aqars data
    //       data = await Promise.all(data.map(async (bt) => {

    //         // const aqarsData = await fetchAqarsData(bt) as FilterJsonR;

    //         await FilterService.getAll({
    //           data: { buildingtype: String(buildingTypes[index].id) },
    //           onSuccess: (response) => {
    //             buildingTypes[index].aqars = aqarsData.data.data
    //           }
    //         })

    //         return {
    //           ...bt,
    //           aqars: aqarsData.data.data.slice(0, 3)
    //         };
    //       }));
    //     }
    //     setBuildingTypes(data);
    //   },
    //   onStatusCodeError: function (_status: number, response: GetAllJsonR): void {
    //     alert(response.message)
    //   },
    //   onFinally: function (): void {
    //     setLoading(false);
    //   },
    // });
    var buildingTypes = [];

    await BuildingTypeService.getAll({
      data: null,
      onSuccess: (response) => {
        buildingTypes = response.data.data;
      }
    });

    for (let index = 0; index < buildingTypes.length; index++) {
      await FilterService.getAll({
        data: { buildingtype: String(buildingTypes[index].id) },
        onSuccess: (response) => {
          buildingTypes[index].aqars = response.data.data
        }
      })
    }

    setBuildingTypes(buildingTypes);

  }, [withAqars])
  useEffect(() => {
    if (!autoGetData) return;
    // getBuildingTypes()
  }, [autoGetData, getBuildingTypes]);

  return {
    buildingTypes,
    loading,
    getBuildingTypes,
  };
}
