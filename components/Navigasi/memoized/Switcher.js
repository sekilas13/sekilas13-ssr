import { memo } from "react";
import Check from "react-bootstrap/FormCheck";

function Switcher() {
  return (
    <Check
      type="switch"
      id="custom-switch"
      //   checked={theme === "light" ? false : true}
      //   onChange={tToggler}
      label="&zwnj;"
    />
  );
}

export default memo(Switcher);
