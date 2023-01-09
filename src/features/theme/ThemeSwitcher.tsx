import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { ModeSwitcher } from "./ThemeSwitcher.styled";
import { useTheme } from "./use-theme";

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoonOutline size="16px" />
      ) : (
        <IoMoon size="16px" />
      )}{" "}
      <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
    </ModeSwitcher>
  );
};

export { ThemeSwitcher };
