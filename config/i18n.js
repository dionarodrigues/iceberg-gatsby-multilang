// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  pt: {
    path: `pt`,
    locale: `pt-BR`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `pt`,
    ogLanguage: `pt_BR`,
    defaultTitle: `Usando i18n com Gatsby`,
    defaultDescription: `Exemplo de Gatsby site usando MXD e i18n`,
  },
}
