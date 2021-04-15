import { memo, useContext } from "react";
import Check from "react-bootstrap/FormCheck";
import { DarkModeContext } from "../../../context/darkMode";

function Switcher() {
  const { isDark, themeToggler } = useContext(DarkModeContext);

  return (
    <Check
      type="switch"
      id="custom-switch"
      checked={isDark}
      onChange={themeToggler}
      label="&zwnj;"
    />
  );
}

export default memo(Switcher);
