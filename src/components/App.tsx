import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import theme from "@/theme";
import { useAppContext } from "@/context/AppProvider";

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const cacheRtl = createCache({ key: "muirtl", stylisPlugins: [rtlPlugin] });
const cacheLtr = createCache({ key: "muiltr" });

// Client-side cache, shared for the whole session of the user in the browser.

function App({ children }: any) {
  const context = useAppContext();
  return (
    <ThemeProvider
      theme={Object.assign(theme, { direction: context?.state?.direction })}
    >
      <StylesProvider jss={jss}>
        <CacheProvider
          value={context?.state?.direction === "rtl" ? cacheRtl : cacheLtr}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          {children}
        </CacheProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
