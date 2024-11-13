export function mapData(data) {
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

export function filterNearEarthObjects(meteors, count, wereDangerousMeteors) {
    if (wereDangerousMeteors != null) {
      const isWereDangerousMeteors = wereDangerousMeteors === "true";
      meteors = meteors.filter(
        (meteor) => meteor.is_potentially_hazardous_asteroid === isWereDangerousMeteors
      );
    }

    if (count && !isNaN(count) && count > 0) {
      meteors = meteors.slice(0, parseInt(count));
    }
  
    return meteors;
}

export function getDates(date) {
  let fromDate;
  let toDate;

  if (Array.isArray(date) && date.length === 2) {
    fromDate = new Date(date[0])
    toDate = new Date(date[1])
  } else {
    const givenDate = new Date()
    const dayOfWeek = givenDate.getDay()

    fromDate = new Date(givenDate)
    fromDate.setDate(givenDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))

    toDate = new Date(fromDate);
    toDate.setDate(fromDate.getDate() + 4)
  }

  return {
    fromDate: formatDate(fromDate),
    toDate: formatDate(toDate),
  };
}

function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}