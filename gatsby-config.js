module.exports = {
  siteMetadata: {
    description: 'Personal page of Shoaib Khalid',
    locale: 'en',
    // title: 'Shoaib -  React Native Developer',
    // formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-vercel',
      options: {
        // (optional) Prints metrics in the console when true
        debug: false,
      },
    },

    {
      resolve: '@wkocjan/gatsby-theme-intro',
      options: {
        contentPath: 'content/',
        theme: 'classic',
        showThemeLogo: false,
      },
    },

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
