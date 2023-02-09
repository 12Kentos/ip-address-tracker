import { useState } from "react";
import styles from "./App.module.scss";
import MainBody from "./components/MainBody";
import MainMap from "./components/MainMap";

function App() {
  const [lng, setLng] = useState(40.673097);
  const [lat, setLat] = useState(-73.940707);

  const setLngLat = (lng, lat) => {
    setLng(lng);
    setLat(lat);
  };

  return (
    <>
      <MainBody setLngLatHandler={setLngLat} />
      <MainMap lat={lat} long={lng} />
    </>
  );
}

export default App;
