
import { ThemeClassNames } from "@docusaurus/theme-common";
import DocSidebarItems from "@theme-original/DocSidebarItems";
import clsx from "clsx";
import React from "react";
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function DocSidebarItemsWrapper(props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      {props.level === 1 ? (
        <li
          className={clsx(
            ThemeClassNames.docs.docSidebarItemLink,
            "theme-doc-sidebar-item-link-level-1",
          //  "version-selector",
            "margin-top--sm",
            "margin-bottom--md",
            "margin-left--sm"
          )}
        >
          <ThemeProvider theme={theme}>
          <Chip label="Version: 2.83.0" href="/v2-80-0" size="small" className="sidebar-version" sx={{ fontWeight: 700}} />
          </ThemeProvider>
        </li>
      ) : null}
      <DocSidebarItems {...props} />
    </>
  )
}