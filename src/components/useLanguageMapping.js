import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '../hooks/locale';

function useLanguageMapping() {
  // Grab the locale (passed through context) from the Locale Provider 
  // through useLocale() hook
  const { locale } = useLocale();
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);
  
  // Simplify the response from GraphQL
  const languageMapping = rawData.edges.map(item => {
    return item.node.translations.languageMapping;
  });

  return languageMapping[0];
}

export default useLanguageMapping;

const query = graphql`
  query useLanguageMapping {
    rawData: allFile(filter: { sourceInstanceName: { eq: "language-mapping" } }) {
      edges {
        node {
          name
          translations: childLanguageMappingJson {
            languageMapping {
              en
              pt
            }
          }
        }
      }
    }
  }
`;