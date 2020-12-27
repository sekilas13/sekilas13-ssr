import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon as MoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as MoonRegular } from "@fortawesome/free-regular-svg-icons";

function Moon() {
  //   const icon = theme === "dark" ? MoonSolid : MoonRegular;
  return <FontAwesomeIcon icon={MoonRegular} />;
}

export default memo(Moon);
