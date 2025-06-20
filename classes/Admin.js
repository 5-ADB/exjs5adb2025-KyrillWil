// Factuur Klasse
class Factuur {
  constructor(factuurnummer, datum, bedrag, betaald = false) {
    this.factuurnummer = factuurnummer;
    this.datum = new Date(datum);
    this.bedrag = bedrag;
    this.betaald = betaald;
  }

  markeerAlsBetaald() {
    this.betaald = true;
  }

  toString() {
    return `Factuur ${this.factuurnummer}: €${this.bedrag.toFixed(2)} - ${
      this.betaald ? "Betaald" : "Openstaand"
    }`;
  }
}

// Klant Klasse
class Klant {
  constructor(id, naam, email) {
    this.id = id;
    this.naam = naam;
    this.email = email;
    this.facturen = [];
  }

  voegFactuurToe(factuur) {
    if (factuur instanceof Factuur) {
      this.facturen.push(factuur);
    } else {
      throw new Error(
        "Alleen instanties van Factuur kunnen worden toegevoegd."
      );
    }
  }

  getOpenstaandeFacturen() {
    return this.facturen.filter((f) => !f.betaald);
  }

  getTotaalBedragOpenstaand(teBetalen) {
    teBetalen = this.getOpenstaandeFacturen()
    return teBetalen
    // bereken het totaal van de facturen die nog niet betaald zijn.
  }
}

function printFacturen(factuur){
  // console.log(`Facturen voor ${factuur.naam} Kleintjes:`)
  // factuur.facturen.forEach(factuurNummer => {
  //   console.log(factuurNummer.facturen[0]);
  // });
  console.log(`Facturen voor ${factuur.naam} kleintjes: \n ${factuur.facturen[0]} \n ${factuur.facturen[1]}`);
  
}

module.exports = {
  Factuur, Klant, printFacturen
};
