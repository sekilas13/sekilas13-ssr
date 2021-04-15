import { memo, useMemo, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as MoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as MoonRegular } from "@fortawesome/free-regular-svg-icons";
import { DarkModeContext } from "../../../context/darkMode";

function Moon({ theme }) {
  const { isDark } = useContext(DarkModeContext);
  const icon = useMemo(() => (isDark ? MoonSolid : MoonRegular), [isDark]);

  return <FontAwesomeIcon icon={icon} />;
}

export default memo(Moon);
