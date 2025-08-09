import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linuxmint docs",
  description: "The offical linux mint developer documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "community", link: "/community" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "welcome", link: "/introduction/index.md" },
          { text: "how to contribute", link: "/introduction/contributing" },
          { text: "guidelines", link: "/introduction/guidelines" },
          { text: "How to building mint apps", link: "/introduction/building" },
          { text: "romeo", link: "/introduction/romeo" },
          {
            text: "reporting issues",
            link: "/introduction/reporting-an-issue",
          },
        ],
      },
      {
        text: "cinnamon",
        items: [
          { text: "What cinnamon is ?", link: "/cinnamon/cinnamon" },
          { text: "How to build cinnamon", link: "/cinnamon/building-cinamon" },
          { text: "Writting applets", link: "/cinnamon/write-applet" },
          { text: "Applet versioning", link: "/cinnamon/xlet-versioning" },
          {
            text: "Applet, desklet and extension settings",
            link: "/cinnamon/xlet-settings",
          },
          {
            text: "Writting Documentation",
            link: "/cinnamon/documentating-tutorial",
          },
          {
            text: "Documenting the source",
            link: "/cinnamon/documentating-source",
          },
        ],
      },
      {
        text: "xapps",
        items: [
          {
            text: "xapps",
            link: "/xapps/xapps",
          },
        ],
      },
      {
        text: "mint tools",
        link: "/mint-tools/mint-tools",
      },
    ],

    socialLinks: [{ icon: "github", link: "" }],
  },
});
