const countries = require("./countries.json");

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode) {
  //Complete with your code
  return countries.find(country => country.iso3 === isoCode);
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language) {
  const country = countries.find(country => country.iso3 === isoCode);
  return country.translations[language];
  //Complete with your code
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion) {
  return countries.filter(country => country.subregion === subregion);
}

function main() {
  console.log("///// Ejercicio 1 /////\n", getCountryByIso3("ARG"), "\n");
  console.log(
    "///// Ejercicio 2 /////\n",
    getCountryTranslatedName("ARG", "ja"),
    "\n"
  );
  console.log(
    "///// Ejercicio 3 /////\n",
    getCountriesBySubregion("South America"),
    "\n"
  );
}

main();
