import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import "./ThemeHook.module.css";

const ThemeHook: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const current = theme ?? "system";
  const toggle = () => setTheme(current === "dark" ? "light" : "dark");
  return (
    <button type="button" onClick={toggle} aria-label="Toggle theme">
      {current === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeHook;
