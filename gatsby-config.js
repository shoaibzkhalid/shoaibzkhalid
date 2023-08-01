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
        theme: 'classic',
        showThemeLogo: false,
        icon: `content/images/favicon.png`, // Replace with the path to your icon fil
        // icon: `content/images/favicon.ico`, // Replace with the path to your icon fil
      },
    },
  ],
}
