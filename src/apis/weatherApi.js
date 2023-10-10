import { axiosInstance } from "./core";

export const get_Location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getCurrent(lat, lon);
    });
  };


export const get_historyWeather = async (lat, lon) => {
    const response = await axiosInstance.get(`/data/2.5/history/city?lat=${lat}&lon=${lon}&appid=4b2652e97adbe7b3ce82d4b127cba055`, {
    params: {
        lat,
        lon,
    },
    });
    console.log(`get`, response.data)
};