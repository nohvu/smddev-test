import React from "react";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoText}>
        <h1>Welcome to the best online reseller of Apple devices!</h1>
        <ul>
          <li>
            You can create your own device with unique properties. Use <span>"Create device"</span>{" "}
            to create.
          </li>
          <li>
            Also you can watch catalog of devices and search it. Use <span>"Catalog"</span> to open
            catalog.
          </li>
        </ul>
      </div>
      <figure>
        <img
          alt="store"
          src="https://www.iphones.ru/wp-content/uploads/2020/02/vienna_apple_wide_interior_shot_022118_big.jpg"
        />
      </figure>
    </div>
  );
};
