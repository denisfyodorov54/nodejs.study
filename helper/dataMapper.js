const mapData = async (data) => {
    return Object.values(data).flatMap((nearEarthObjects) =>
      nearEarthObjects.map((object) => {
        const { close_approach_date_full, relative_velocity_kps } =
          getCloseApproach(object.close_approach_data);
  
        return {
          id: object.id,
          name: object.name,
          diameter_meters: getDiameterMeters(object.estimated_diameter),
          is_potentially_hazardous_asteroid: object.is_potentially_hazardous_asteroid,
          close_approach_date_full,
          relative_velocity_kps,
        };
      })
    );
  };

  const getCloseApproach = (closeApproachData) => {
    if (!closeApproachData || closeApproachData.length === 0) {
      return { relative_velocity: null, close_approach_date_full: null };
    }
    else
    {
      return {
        close_approach_date_full: closeApproachData[0].close_approach_date_full,
        relative_velocity_kps: closeApproachData[0].relative_velocity.kilometers_per_second,      
      };
    }
  };
  
  const getDiameterMeters = (diameter) => {
    return (
      (diameter.meters.estimated_diameter_min +
        diameter.meters.estimated_diameter_max) / 2
    );
  };

export default mapData;