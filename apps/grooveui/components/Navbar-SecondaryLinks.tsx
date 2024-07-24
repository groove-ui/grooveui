import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/navbar.module.css";
import { useState } from "react";

export default function SecondaryLinks() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const onChangeTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <div className={styles.navbarSecondaryLinks}>
      <button className={styles.searchNavbar}>
        <FontAwesomeIcon icon={faSearch} />
        <span>Search...</span>
      </button>
      <button className={styles.socialIconsNavbar}>
        <FontAwesomeIcon icon={faGithub} />
      </button>
      <button className={styles.socialIconsNavbar}>
        <FontAwesomeIcon icon={faXTwitter} />
      </button>
      <button onClick={onChangeTheme} className={styles.socialIconsNavbar}>
        <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} />
      </button>
    </div>
  );
}
