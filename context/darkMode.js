import { darkBlog, lightBlog } from "../assets/data/ThemeBlog";
import { darkTheme, lightTheme } from "../assets/data/Theme";
import { createContext, useMemo, useCallback } from "react";
import useDarkMode from "use-dark-mode";

export const DarkModeContext = createContext({ value: false });

export default function Provider(props) {
  const dark = useDarkMode(false);
  const isDark = useMemo(() => dark.value, [dark]);
  const themeNonBlog = useMemo(() => (isDark ? darkTheme : lightTheme), [
    isDark
  ]);
  const themeBlog = useMemo(() => (isDark ? darkBlog : lightBlog), [isDark]);

  const themeToggler = useCallback(() => void dark.toggle(), [dark]);

  const providerValue = useMemo(
    () => ({
      dark,
      theme: {
        nonBlog: themeNonBlog,
        Blog: themeBlog
      },
      isDark,
      themeToggler
    }),
    [dark, isDark, themeNonBlog, themeBlog, themeToggler]
  );

  return <DarkModeContext.Provider value={providerValue} {...props} />;
}
