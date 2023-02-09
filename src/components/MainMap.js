import styles from "./MainMap.module.scss";
import { Map, Marker, Popup, TileLayer, MapContainer } from "react-leaflet";

const MainMap = (props) => {
  console.log("MainMap was rendered");

  console.log(props.long);
  console.log(props.lat);

  return (
    <MapContainer
      center={[props.long, props.lat]}
      zoom={13}
      scrollWheelZoom={false}
      className={styles["main-map"]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.long, props.lat]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MainMap;
