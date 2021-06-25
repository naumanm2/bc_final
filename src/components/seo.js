import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang, image, keywords }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
        defaultKeywords
      } = site.siteMetadata
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
        keywords: keywords || defaultKeywords
      }
      return (
        <Helmet 
            htmlAttributes={{
                lang,
            }}
            title={seo.title} 
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="keywords" content={seo.keywords} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
      )
};

export default SEO;

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
  }

  SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  }


const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
        defaultKeywords: keywords
      }
    }
  }
`
