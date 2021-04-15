import { memo, useMemo, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun as SunSolid } from "@fortawesome/free-solid-svg-icons";
import { faSun as SunRegular } from "@fortawesome/free-regular-svg-icons";
import { DarkModeContext } from "../../../context/darkMode";

function Sun() {
  const { isDark } = useContext(DarkModeContext);
  const icon = useMemo(() => (isDark ? SunRegular : SunSolid), [isDark]);

  return <FontAwesomeIcon icon={icon} />;
}

export default memo(Sun);
