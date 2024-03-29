// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ivan Martinez",
  tagline: "Website builded with docusaurus",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ivangabino.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "igmr", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        api: {
          // id: 'cars', // omitted => default instance
          path: "docs/finza/api.yaml",
          routeBasePath: "docs/finza/api",
          // ... other options
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/igmr/website/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/igmr/website/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "{dev}",
        logo: {
          alt: "avatar",
          src: "img/avatar.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Finanzas",
            position: "left",
            items: [
              {
                label: "Introducción",
                href: "/introduction-finza",
              },
              {
                type: "docSidebar",
                label: "Base de datos",
                sidebarId: "databaseFinzaSidebar",
              },
              { to:"docs/finza/api", label:"Api REST"}
            ],
          },
          {
            href: "https://github.com/igmr/website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Página web. Construido con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
