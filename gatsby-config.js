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
    //   resolve: `gatsby-omni-font-loader`,
    //   options: {
    //     enableListener: true,
    //     // render-blocking (FOUT rare but fonts render blocking)or async
    //     mode: 'render-blocking',

    //     preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
    //     custom: [
    //       {
    //         name: `Roboto`,
    //         file: `/fonts/roboto/500.css`,
    //       },
    //       {
    //         name: `Roboto`,
    //         file: `/fonts/roboto/400.css`,
    //       },
    //       {
    //         name: `Open Sans`,
    //         file: `/fonts/open-sans/300.css`,
    //       },
    //       {
    //         name: `Open Sans`,
    //         file: `/fonts/open-sans/400.css`,
    //       },
    //       {
    //         name: `Open Sans`,
    //         file: `/fonts/open-sans/600.css`,
    //       },
    //       {
    //         name: `Open Sans`,
    //         file: `/fonts/open-sans/700.css`,
    //       },
    //     ],
    //   },
    // },

    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        ignore: ['node_modules/@wkocjan/gatsby-theme-intro'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
  ],
}
