import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect} from "react";
import { RouterLink } from "../RouterLink";

type AvaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storagedTheme = localStorage.getItem("theme") as AvaliableThemes || 'dark';
    return storagedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); // Não segue o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history/"
        aria-label=" Ver Histórico"
        title=" Ver Histórico"
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings/"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </RouterLink>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
