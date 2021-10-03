module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Cherrie Lam | Product Designer', // Navigation and Site Title
  titleAlt: 'Cherrie Lam', // Title for JSONLD
  description: 'Product designer focused on inclusive, community-centred digital tools and experiences. Currently Design Lead at PeaceGeeks, creating digital tools to support immigrant and displaced communities. In Vancouver — traditional, unceded lands of the xʷməθkʷəy̓əm, Sḵwx̱wú7mesh, Stó:lō and Səl̓ílwətaʔ/Selilwitulh Nations.',
  headline: 'Product designer focused on inclusive, community-centred digital tools and experiences', // Headline for schema.org JSONLD
  url: 'https://cherrielam.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Cherrie Lam', // Author for schemaORGJSONLD
  themeColor: '#efe8e3',
  backgroundColor: '#efe8e3',

  twitter: '@starter_prismicio', // Twitter Username
  facebook: 'gatsby-prismic', // Facebook Site Name
  // googleAnalyticsID: '',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
