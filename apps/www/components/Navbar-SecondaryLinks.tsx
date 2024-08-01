import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/navbar.module.css";
import { useState } from "react";

export default function SecondaryLinks() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const onChangeTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-2 border-2 border-zinc-800 bg-zinc-900 w-48 px-4 py-2 rounded-lg text-zinc-500 cursor-pointer hover:bg-zinc-800 hover:text-zinc-400 transition duration-300">
        <FontAwesomeIcon icon={faSearch} />
        <span>Search...</span>
      </div>
      <button className="w-10 py-2 rounded-lg hover:bg-zinc-800 transition duration-300">
        <FontAwesomeIcon icon={faGithub} />
      </button>
      <button className="w-10 py-2 rounded-lg hover:bg-zinc-800 transition duration-300">
        <FontAwesomeIcon icon={faXTwitter} />
      </button>
      <button
        onClick={onChangeTheme}
        className="w-10 py-2 rounded-lg hover:bg-zinc-800 transition duration-300"
      >
        <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} />
      </button>
    </div>
  );
}
