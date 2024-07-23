import axios from 'axios'
import { useState, useEffect } from 'react'

export default function useGeoLocation() {
  const [locationData, setLocationData] = useState(null)
  useEffect(() => {
      getLocation();
  }, []);
  async function getLocation() {
      // it will return the following attributes:
      // country, countryCode, regionName, city, lat, lon, zip and timezone
      const res = await axios.get("http://ip-api.com/json");
      console.log(res);
      if (res.status === 200)
          setLocationData(res.data)
  }
  return {
      city: locationData?.city,
      lat: locationData?.lat,
      lon: locationData?.lon,
  }
}