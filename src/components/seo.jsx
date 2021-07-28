import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(query)

    return (
        <Helmet title={site.siteMetadata.title} htmlAttributes={{lang:'en'}}>
            <meta name="description" content ={site.siteMetadata.description}/>
        </Helmet>
    )    
}

export default SEO

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title
                description
            }
        }
    }

`

SEO.protoTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}