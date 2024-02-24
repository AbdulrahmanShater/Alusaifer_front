import { useCallback, useEffect, useState } from "react";
import { BuildingTypeModel } from "@/model/buildingType";
import BuildingTypeService from "@/api/services/BuildingTypeService";
import { GetAllJsonR } from "@/api/interface/building_type/get";
import { buildUrlWithParams, http } from "@/api/config/http";
import { FilterData, FilterJsonR } from "@/api/interface/advertisements/filter";
import { ADVERTISEMENTS_URL } from "@/api/config/url";


export default function useBuildingType({ autoGetData, withAqars }: { autoGetData: boolean, withAqars: boolean }) {

  const [buildingTypes, setBuildingTypes] = useState<BuildingTypeModel[]>([])

  const [loading, setLoading] = useState<boolean>(false);

  const fetchAqarsData = async (bt: BuildingTypeModel) => {
    try {
      // const response = (await http()).get(buildUrlWithParams<FilterData>(ADVERTISEMENTS_URL.FILTER, { buildingtype: String(bt.id) }))
      const response = await fetch(buildUrlWithParams<FilterData>(`https://akar.alusaifer.com.sa/api${ADVERTISEMENTS_URL.FILTER}`, { buildingtype: String(bt.id) }));
      const aqarsData = await response.json()

      return aqarsData;
    } catch (error) {
      console.error('Error fetching aqars data:', error);
      return [];
    }
  };

  const getBuildingTypes = useCallback(() => {
    BuildingTypeService.getAll({
      data: null,
      onBefore: function (): void {
        setLoading(true);
      },
      async onSuccess(response) {
        var data: BuildingTypeModel[] = response.data.data;
        if (withAqars) {
          // Update the data array with aqars data
          data = await Promise.all(data.map(async (bt) => {
            const aqarsData = await fetchAqarsData(bt) as FilterJsonR;;
            return {
              ...bt,
              aqars: aqarsData.data.data.slice(0, 3)
            };
          }));
        }
        setBuildingTypes(data);
      },
      onStatusCodeError: function (_status: number, response: GetAllJsonR): void {
        alert(response.message)
      },
      onFinally: function (): void {
        setLoading(false);
      },
    });
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
