// src/extraInfoLoader.js
const path = require('path');
const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');

/**
 * This is a helper module for loading extra information from the XML file.
 *
 * The candidate will implement this during the test.
 */
const xmlPath = path.join(__dirname, '..', 'data', 'LOADINGTERMINAL_Status_d_f_i_.xml');

/**
 * Load additional information from the provided XML. The task consists on adding the english text description:
 * <Description>
 *		<Culture>1033</Culture>
 *		<Text>Autoverlad Furka in Oberwald  open for all vehicles</Text>
 * </Description>
 *
 * To the output:
 *
 * "statusAdditionalInfo": {
 *          "DE": "Autoverlad Furka in Oberwald  offen für alle Fahrzeuge",
 *          "FR": "Gare de chargement de la Furka à Oberwald ouvert à tous les véhicules",
 *          "IT": "Stazione di carico della Furka ad Oberwald aperto per tutti i veicoli",
 *			"EN": "Autoverlad Furka in Oberwald  open for all vehicles"
 *  },
 */
function loadExtraInfo() {
  // TODO (candidate):
  // - Read xmlPath file (fs.readFileSync or async)
  // - Use XMLParser from fast-xml-parser to parse it
  // - Transform to an object keyed by station id
  // - Return the object
  //
  // For now we return an empty object so the app still runs.
  return {};
}

module.exports = {
  loadExtraInfo
};