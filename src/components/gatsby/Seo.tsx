import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SeoProps = {
  description?: string;
  lang?: string;
  meta?: { name?: string; content?: string; property?: string }[];
  keywords?: string[];
  title?: string;
};

/**
 * SEO component that queries for data with Gatsby's useStaticQuery React hook
 * @see https://www.gatsbyjs.org/docs/use-static-query/
 */
const Seo: FunctionComponent<SeoProps> = ({ description, lang, meta = [], keywords = [], title }) => {
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
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...(keywords.length > 0 ? [{ name: 'keywords', content: keywords.join(', ') }] : []),
        ...meta,
      ]}
    />
  );
};

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
      property: PropTypes.string,
    }).isRequired,
  ),
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.string.isRequired,
};

export default Seo;
