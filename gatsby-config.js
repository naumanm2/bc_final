require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    title: "burger company",
    titleTemplate: "burgers. beer. natural wine",
    description:
      `burger company is a restaurant for burgers, beer and natural wine in Helsinki. Enjoy with or without company. Order in, takeaway from us or from Wolt or Foodora.`,
    image: "/images/front.jpg",
    author: "@burgercompanyhki",
    url: "https://www.burgercompany.fi",
    siteUrl: "https://www.burgercompany.fi",
    twitterUsername: "@burgercompanyhki",
    keywords: `burger company, burgers, natural wine, craft beer, restaurant, lunch, hampurilainen, helsinki, street food`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/",
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.TRACKING_ID, // Google Analytics / GA
        ],
        pluginConfig: {
          head: false,
          anonymize_ip: true,
        },
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
        lang: "en",
        short_name: "burger company",
        start_url: "/",
        background_color: "#fff9f8",
        theme_color: "#ffbdbf",
        display: "standalone",
        icon: "src/icons/favicon_black copy@4x.png",
      },
    },
  ],
};
