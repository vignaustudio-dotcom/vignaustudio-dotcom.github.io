/* offers.js — surcharge de window.SITE (chargé après content.js). Supprimer la balise <script> pour revenir à l'état précédent. */
(function(){
var S = window.SITE; if (!S) return;
var L = function(en, fr){ return {en:en, fr:fr}; };

S.hero = Object.assign({}, S.hero, {
  title: L("Stop Burning Ad Spend on *Tired Creatives.*", "Arrêtez de gaspiller votre budget publicitaire avec des *créas épuisées.*"),
  sub: L("Fresh ad concepts to test, without the cost of traditional production.",
         "De nouveaux concepts publicitaires à tester, sans le coût d'une production traditionnelle."),
  ctaBook: L("Book a 15-min call", "Réserver un appel de 15 min")
});

S.how = Object.assign({}, S.how, {
  title: L("Your creatives in *3 steps.*", "Vos créas en *3 étapes.*"),
  steps: [
    { t: L("A 15-min call", "Un appel de 15 min"),
      p: L("Share your brand and what you want to test.", "Présentez votre marque et ce que vous voulez tester.") },
    { t: L("Creation", "Création"),
      p: L("Distinct ad concepts, built around your real product.", "Des concepts publicitaires distincts, conçus autour de votre vrai produit.") },
    { t: L("Launch", "Lancement"),
      p: L("Ready-to-use files for paid social and your site.", "Des fichiers prêts à l'emploi pour vos publicités et votre site.") }
  ]
});

S.pricing = Object.assign({}, S.pricing, {
  title: L("Our Offers", "Nos offres"),
  sub: L("Standardized creative packs, or a project built around your brand.", "Des packs créatifs standardisés, ou un projet conçu autour de votre marque."),
  plans: [
    { key:"ad-creative-pack",
      name: L("Ad Creative Pack", "Pack Créas Publicitaires"),
      qty: L("12 Ad Creatives", "12 créations publicitaires"),
      what: L("For brands that need fresh advertising concepts, new messaging angles and more creative variations to test.",
              "Pour les marques qui veulent renouveler leurs publicités, explorer de nouveaux angles de communication et disposer de davantage de créations à tester."),
      items: { en:["12 advertising creatives.","Distinct visual concepts.","Product-focused messaging and headlines.","Ready-to-use creative assets for paid social, subject to the agreed formats."],
               fr:["12 créations publicitaires.","Des concepts visuels distincts.","Des accroches et messages adaptés au produit.","Des fichiers prêts à être utilisés en publicité, selon les formats convenus."] },
      cta: L("Book Your Free Audit", "Réserver mon audit gratuit") },
    { key:"creative-growth-pack", star:true,
      name: L("Creative Growth Pack", "Pack Créas Growth"),
      qty: L("24 Ad Creatives", "24 créations publicitaires"),
      what: L("For brands that need a larger volume of creative variations to feed their advertising pipeline and test more concepts.",
              "Pour les marques qui ont besoin d'un volume plus important de créations pour alimenter leurs campagnes et tester davantage de concepts."),
      items: { en:["24 advertising creatives.","A broader range of visual concepts and messaging angles.","Consistent creative production for ongoing campaigns.","Ready-to-use creative assets for paid social, subject to the agreed formats."],
               fr:["24 créations publicitaires.","Une plus grande variété de concepts visuels et d'angles de communication.","Une production créative adaptée aux campagnes récurrentes.","Des fichiers prêts à être utilisés en publicité, selon les formats convenus."] },
      cta: L("Book Your Free Audit", "Réserver mon audit gratuit") },
    { key:"custom",
      name: L("Custom Projects", "Projets sur mesure"),
      qty: L("Tailored to Your Needs", "Adaptés à vos besoins"),
      what: L("For brands looking for broader creative execution, from brand launches and visual identities to art direction and bespoke campaigns.",
              "Pour les marques qui recherchent un accompagnement créatif plus large : lancement de marque, identité visuelle, direction artistique ou campagne sur mesure."),
      items: [],
      cta: L("Discuss Your Project", "Parler de votre projet") }
  ]
});

S.calc = Object.assign({}, S.calc, {
  label: L("Cost simulator", "Simulateur de coûts"),
  title: L("How Much Is Your Brand Costing You?", "Combien votre marque vous coûte-t-elle réellement ?"),
  sub: L("Calculate the estimated cost of fragmented creative production, untested advertising visuals and missed repeat purchases.",
         "Estimez le coût d'une production créative dispersée, des visuels publicitaires non testés et des achats répétés que vous pourriez manquer."),
  support: L("Enter your numbers. See an estimate based on your own assumptions.",
             "Renseignez vos chiffres. Obtenez une estimation basée sur vos propres hypothèses."),
  lines: {
    a: L("Separate supplier costs", "Coûts de fournisseurs distincts"),
    b: L("Estimated ad spend on untested visuals", "Budget publicitaire estimé sur des visuels non testés"),
    c: L("Estimated missed repeat-purchase revenue", "Revenus estimés d'achats répétés manqués")
  },
  totalLabel: L("Total estimated cost", "Coût total estimé"),
  note: L("Indicative simulation based on the figures and assumptions you provide. Results are estimates, not verified losses or guaranteed savings.",
          "Simulation indicative basée sur les chiffres et hypothèses que vous renseignez. Les résultats sont des estimations, et non des pertes vérifiées ni des économies garanties."),
  after: {
    title: L("Ready to Improve Your Creative Workflow?", "Prêt à améliorer votre production créative ?"),
    body: L("Whether you need fresh ad concepts or a broader creative project, Vignau Studio helps you turn your product into consistent, purposeful creative assets.",
            "Que vous ayez besoin de nouvelles créations publicitaires ou d'un projet créatif plus large, Vignau Studio vous aide à transformer vos produits en contenus cohérents et pensés pour vos objectifs.")
  }
});
})();
