export const QUERY_HEADER = `
*[_type == "header" && __i18n_lang == $language][0] {
  logo,
  menu[],
}`;

export const QUERY_SETTINGS = `
*[_type == "settings" && __i18n_lang == $language][0] {
  copyright,
  
}`;
