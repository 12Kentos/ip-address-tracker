import { useState, useEffect } from "react";
import styles from "./MainBody.module.scss";

const MainBody = (props) => {
  const API_KEY = "at_Xcv7csPj35fJOHLAcZ38BLZ4jDYxP";

  const [userInput, setUserInput] = useState("");
  const [url, setUrl] = useState(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_Xcv7csPj35fJOHLAcZ38BLZ4jDYxP&ipAddress=192.212.174.101"
  );
  const [ipAddress, setIPAddrees] = useState("192.212.174.101");
  const [location, setLocation] = useState("Brooklyn, NY 10001");
  const [timezone, setTimezone] = useState("UTC -05:00");
  const [isp, setIsp] = useState("SpaceX Starlink");

  const fetchIP = async () => {
    try {
      const response = await fetch(url, { apiKey: API_KEY });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      setIPAddrees(data.ip);
      setLocation(
        `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
      );
      setTimezone(data.location.timezone);
      setIsp(data.isp);

      console.log(data);

      props.setLngLatHandler(+data.location.lat, +data.location.lng);
    } catch {}
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUrl(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_Xcv7csPj35fJOHLAcZ38BLZ4jDYxP&ipAddress=${userInput}`
    );
    setUserInput("");
    fetchIP();
  };

  const textChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>IP Address Tracker</h1>
      <form className={styles["form-wrapper"]} onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className={styles["input-text"]}
          onChange={textChangeHandler}
          value={userInput}
        />
        <button className={styles["main-form-btn"]}></button>
      </form>
      <div className={styles["info-wrapper"]}>
        <div className={styles["individual-info-wrapper"]}>
          <p className={styles["info-title"]}>IP Address</p>
          <p className={styles.info}>{ipAddress}</p>
        </div>
        <div className={styles["individual-info-wrapper"]}>
          <p className={styles["info-title"]}>Location</p>
          <p className={styles.info}>{location}</p>
        </div>
        <div className={styles["individual-info-wrapper"]}>
          <p className={styles["info-title"]}>TimeZone</p>
          <p className={styles.info}>{timezone}</p>
        </div>
        <div className={styles["individual-info-wrapper"]}>
          <p className={styles["info-title"]}>ISP</p>
          <p className={styles.info}>{isp}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
