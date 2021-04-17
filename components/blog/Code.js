import { useContext, useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  materialLight
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { DarkModeContext } from "../../context/darkMode";

export default function Code({ language, value }) {
  const { isDark } = useContext(DarkModeContext);
  const style = useMemo(() => (isDark ? atomDark : materialLight), [isDark]);

  return (
    <SyntaxHighlighter showLineNumbers={true} language={language} style={style}>
      {value}
    </SyntaxHighlighter>
  );
}
