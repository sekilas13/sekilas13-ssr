import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as MoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as MoonRegular } from "@fortawesome/free-regular-svg-icons";

function Moon({ theme }) {
  const icon = theme ? MoonSolid : MoonRegular;
  return <FontAwesomeIcon icon={icon} />;
}

export default memo(Moon);
