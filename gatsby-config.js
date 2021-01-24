require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        url: "https://jqq-streams.netlify.app",
        title: "James Q Streams",
        description: "🎥 James Q Quick twitch overlays",
        keywords: [
            "gatsby",
            "react",
            "styled-components",
            "prettier",
            "eslint",
            "twitch",
        ],
        email: "james.q.quick@gmail.com",
        twitter: "jamesqquick",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Montserrat:800"],
                },
            },
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/Layout/Layout.js"),
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/,
                },
            },
        },
        {
            resolve: "gatsby-plugin-catch-links",
        },
        {
            resolve: "@bradgarropy/gatsby-plugin-seo",
        },
    ],
}
