import { useCallback, useEffect, useState } from "react";
import { BuildingTypeModel } from "@/model/buildingType";
import BuildingTypeService from "@/api/services/BuildingTypeService";
import FilterService from "@/api/services/FilterService";

export default function useBuildingType({ autoGetData, withAqars }
  : { autoGetData: boolean, withAqars: boolean }) {

  const [buildingTypes, setBuildingTypes] = useState<BuildingTypeModel[]>([])

  const [loading, setLoading] = useState<boolean>(false);

  const getBuildingTypes = useCallback(async () => {

    var buildingTypes: BuildingTypeModel[] = [];

    await BuildingTypeService.getAll({
      data: null,
      onSuccess: (response) => {
        buildingTypes = response.data.data;
      }
    });

    for (let index = 0; index < buildingTypes.length; index++) {
      await FilterService.getAll({
        data: { buildingtype: Number(buildingTypes[index].id) },
        onSuccess: (response) => {
          buildingTypes[index].aqars = response.data.data
        }
      })
    }

    setBuildingTypes(buildingTypes);

  }, [withAqars])

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
