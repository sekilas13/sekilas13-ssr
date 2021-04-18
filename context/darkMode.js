import { createContext, useEffect, useMemo, useCallback } from "react";
import { darkBlog, lightBlog } from "../assets/data/ThemeBlog";
import { darkTheme, lightTheme } from "../assets/data/Theme";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";
import * as gtag from "../utils/gtag";

export const DarkModeContext = createContext({ value: false });

export default function Provider(props) {
  const router = useRouter();
  const dark = useDarkMode(false);
  const isDark = useMemo(() => dark.value, [dark]);
  const themeNonBlog = useMemo(() => (isDark ? darkTheme : lightTheme), [
    isDark
  ]);
  const themeBlog = useMemo(() => (isDark ? darkBlog : lightBlog), [isDark]);

  const themeToggler = useCallback(() => void dark.toggle(), [dark]);

  const theme = useMemo(() => {
    switch (router.pathname) {
      case "/covid":
      case "/":
        return themeNonBlog;
        break;
      case "/blog":
      default:
        return themeBlog;
    }
  }, [router]);
  const providerValue = useMemo(
    () => ({
      dark,
      isDark,
      themeToggler
    }),
    [dark, isDark, themeToggler]
  );

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <DarkModeContext.Provider value={providerValue}>
      <ThemeProvider theme={theme} prefetch={false} {...props} />
    </DarkModeContext.Provider>
  );
}
