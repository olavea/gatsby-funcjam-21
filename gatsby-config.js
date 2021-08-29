require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    FUNCTIONS: true,
  },
  siteMetadata: {
    title: "Ruby's TimeShip",
    titleTemplate: "%s ·Built to save Ruby's sister, Princess Lizabeth from prison in the Tower of London",
    description: "Built by Lillian (6 🏴‍☠️👸 ) and by Ola Vea (43 🦇😺 ) with ❤️ and gatsby functions",
    siteUrl: `https://timeship.gatsbyjs.io/`,
    url: `https://timeship.gatsbyjs.io/`,
    image: "/images/icon.png", // Get my OlaVea iconPath to your image you placed in the 'static' folder
    twitter: "@olaholstvea",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rubys-timeship`,
        short_name: `timeship`,
        start_url: `/`,
        background_color: `#fffaf0`,
        theme_color: `ff1616`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        cache_busting_mode: 'none',
      },
    },

  ],
}
