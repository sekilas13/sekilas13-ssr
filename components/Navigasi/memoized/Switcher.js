import { memo } from "react";
import Check from "react-bootstrap/FormCheck";

function Switcher({ theme, themeToggler }) {
  return (
    <Check
      type="switch"
      id="custom-switch"
      checked={theme}
      onChange={themeToggler}
      label="&zwnj;"
    />
  );
}

export default memo(Switcher);
