module.exports = {
  siteMetadata: {
    description: 'Personal page of Shoaib Khalid',
    locale: 'en',
    title: 'Shoaib Khalid -  React Native Developer',
    // formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: '@wkocjan/gatsby-theme-intro',
      options: {
        contentPath: 'content/',
        theme: 'classic',
        showThemeLogo: false,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: `/static/favicon.ico`,

    //     icons: [
    //       {
    //         src: `/static/images/favicon.png`,
    //         sizes: `32x32`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Roboto`,
            file: `/static/fonts/roboto/500.css`,
          },
          {
            name: `Roboto`,
            file: `/static/fonts/roboto/400.css`,
          },
          {
            name: `Open Sans`,
            file: `/static/fonts/open-sans/300.css`,
          },
          {
            name: `Open Sans`,
            file: `/static/fonts/open-sans/400.css`,
          },
          {
            name: `Open Sans`,
            file: `/static/fonts/open-sans/600.css`,
          },
          {
            name: `Open Sans`,
            file: `/static/fonts/open-sans/700.css`,
          },
          {
            name: `Open Sans`,
            file: `/static/fonts/open-sans/300.css`,
          },
        ],
      },
    },
  ],
}
