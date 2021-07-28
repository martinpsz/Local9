/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'UPTE UCSD Local 9',
    description: 'UPTE Local 9, a local of UPTE-CWA Local 9119, represents Healthcare, Research and Technical workers at the University of California, San Diego.',
    menuLinks: [
      {
        name: 'About',
        link: '#about'
      },
      {
        name: 'Upcoming Events',
        link: '#events'
      },
      {
        name: 'Become a Member',
        link: '#membership'
      },
      {
        name: 'Contact Us',
        link: '#contact'
      },
      {
        name: 'Register/Sign In',
        link: '/members'
      }
    ]
  },
  plugins: [`gatsby-plugin-react-helmet`],
}
