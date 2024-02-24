import { useCallback, useEffect, useState } from "react";
import BuildingTypeService from "@/api/services/BuildingTypeService";
import { buildUrlWithParams } from "@/api/config/http";
import { ADVERTISEMENTS_URL } from "@/api/config/url";


export default function useBuildingType({ autoGetData, withAqars }) {

  const [buildingTypes, setBuildingTypes] = useState([])

  const [loading, setLoading] = useState(false);


  const getBuildingTypes = useCallback(() => {
    BuildingTypeService.getAll({
      data: null,
      onBefore: function () {
        setLoading(true);
      },
      async onSuccess(response) {
        var data = response.data.data;
        // Update the data array with aqars data
        data = await Promise.all(data.map(async (bt) => {
          var aqarsData = [];
          if (withAqars) {
            const response = await fetch(buildUrlWithParams(`https://akar.alusaifer.com.sa/api${ADVERTISEMENTS_URL.FILTER}`, { buildingtype: String(bt.id) }));
            aqarsData = await response.json()
            aqarsData = aqarsData.data;
          }
          return {
            ...bt,
            aqars: aqarsData
          };
        }));
        setBuildingTypes(data);
      },
      onStatusCodeError: function (_status, response) {
        alert(response.message)
      },
      onFinally: function () {
        setLoading(false);
      },
    });
  }, [withAqars]);

  useEffect(() => {
    if (!autoGetData) return;
    getBuildingTypes()
  }, [autoGetData, getBuildingTypes]);

  return {
    buildingTypes,
    loading,
    getBuildingTypes,
  };
}
