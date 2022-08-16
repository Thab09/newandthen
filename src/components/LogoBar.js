import React from "react";
import { Toggle, Logo, LogoContainer } from "../styles/LogoBar.styled";

import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function LogoBar({ theme, setTheme }) {
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const icon = theme === "light" ? <HiMoon size={30} /> : <CgSun size={30} />;
  return (
    <LogoContainer>
      <Logo>now&then</Logo>
      <Toggle onClick={changeTheme}>{icon}</Toggle>
    </LogoContainer>
  );
}

export default LogoBar;
