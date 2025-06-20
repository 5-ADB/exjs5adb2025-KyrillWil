/** Maak een klant aan Karel Kleintjes (email: karel.kleintjes@example.com)
 * Je maakt onderstaande facturen aan
 * Factuur("F2025001", "2025-06-01", 250.0)
 * Factuur("F2025002", "2025-03-13", 120.0, true)
 * bovenstaande regels maken 2 facturen aan.
 * Koppel deze facturen aan Karel Kleintjes als klant.
 *
 * Print je zijn facturen uit met de method: printFacturen() --> staat al in de code
 * output MOET zoals onderstaande zijn:
 *     Facturen voor Karel kleintjes:
 *      Factuur F2025001: €250.00 - Openstaand
 *      Factuur F2025002: €120.00 - Betaald
 *
 * Als laatste zorg je dat dit werkt.
 * console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());
 * output: Openstaand totaal: 250
 */

//ophalen code
const klant1 = require("./Admin")

//2 facturen
const Factuur1 = new klant1.Factuur("F2025001", "2025-06-01", 250.0)
const Factuur2 = new klant1.Factuur("F2025002", "2025-03-13", 120.0, true)

//klanten
const KarelKleintjes = new klant1.Klant(1, "Karel", "karel.kleintjes@example.com")

//voeg de facturen toe aan karel kleintje en print de facturen
KarelKleintjes.voegFactuurToe(Factuur1)
KarelKleintjes.voegFactuurToe(Factuur2)
klant1.printFacturen(KarelKleintjes);

//geeft het openstaand bedrag weer

// console.log("Openstaand totaal:", klant1.getTotaalBedragOpenstaand());

console.log(KarelKleintjes.getTotaalBedragOpenstaand());


