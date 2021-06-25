require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "burger company",
    titleTemplate: "burgers. beer. natural wine",
    description:
      "Restaurant for burgers, beer and natural wine. Enjoy with or without company. Order in, order out from Wolt or Foodora.",
    image: "../images/front.jpg",
    author: "@burgercompanyhki",
    url: "https://www.burgercompany.fi",
    twitterUsername: "@burgercompanyhki",
    keywords: `burgers, natural wine, craft beer, restaurant, hampurilainen, helsinki`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-C6XXJ7759W",
        head: true,
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/, // See below to configure properly
        },
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "burger company",
        short_name: "burger company",
        start_url: "/",
        background_color: "#fff9f8",
        theme_color: "#ffbdbf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/icons/favicon_black copy@4x.png", // This path is relative to the root of the site.
      },
    },
  ],
};
