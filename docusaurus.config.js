// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// cmd /C "set "GIT_USER=NoraIntel" && yarn deploy"

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NoraIntel',
  tagline: 'Intelligence Information Indexation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://noraintel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/_docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NoraIntel', // Usually your GitHub org/user name.
  projectName: '_docs', // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'NoraIntel Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs & Outils',
          },
          {to: '/blog', label: 'Tutoriel', position: 'left'},
          {
            href: 'https://github.com/NoraIntel',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Nora Ailleurs',
            items: [
              {
                label: 'Portail',
                href: 'https://noraintel.github.io',
              },
              {
                label: 'Discord',
                href: 'https://discord.noraintel.fr',
              },
              {
                label: 'Substack',
                href: 'https://noraintel.substack.com',
              },
            ],
          },
          {
            title: 'Mentions légales',
            items: [
              {
                label: 'Données personnelles',
                href: 'https://noraintel.github.io/Mentions_legales_-_Donnees_personnelles__Cookies_noraintel.fr___noraintel.github.io.pdf',
              },
              {
                label: 'Cookies',
                href: 'https://noraintel.github.io/Mentions_legales_-_Donnees_personnelles__Cookies_noraintel.fr___noraintel.github.io.pdf',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} NoraIntel <br> Propulsé par Docusaurus <br> Hébergé par Github`,
      },
      prism: {
        // theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
