import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { get } from 'lodash';

const SEO = ({ description, lang, meta, title, twitterCard, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        datoCmsSite {
          globalSeo {
            fallbackSeo {
              description
              title
              twitterCard
              image {
                url
              }
            }
            siteName
            twitterAccount
          }
        }
      }
    `,
  );

  const datoCmsSite = {};

  const metaDescription =
    description ||
    datoCmsSite?.globalSeo?.fallbackSeo?.description ||
    site?.siteMetadata?.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      defaultTitle={datoCmsSite?.globalSeo?.title}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image || datoCmsSite?.globalSeo?.fallbackSeo?.image?.url,
        },
        {
          name: `twitter:card`,
          content:
            twitterCard || get(datoCmsSite, 'globalSeo.twitterCard', 'summary'),
        },
        {
          name: `twitter:site`,
          content: datoCmsSite?.twitterAccount,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
