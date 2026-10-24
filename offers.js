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
      cta: L("Book a 15-min call", "Réserver un appel de 15 min") },
    { key:"creative-growth-pack", star:true,
      name: L("Creative Growth Pack", "Pack Créas Growth"),
      qty: L("24 Ad Creatives", "24 créations publicitaires"),
      what: L("For brands that need a larger volume of creative variations to feed their advertising pipeline and test more concepts.",
              "Pour les marques qui ont besoin d'un volume plus important de créations pour alimenter leurs campagnes et tester davantage de concepts."),
      items: { en:["24 advertising creatives.","A broader range of visual concepts and messaging angles.","Consistent creative production for ongoing campaigns.","Ready-to-use creative assets for paid social, subject to the agreed formats."],
               fr:["24 créations publicitaires.","Une plus grande variété de concepts visuels et d'angles de communication.","Une production créative adaptée aux campagnes récurrentes.","Des fichiers prêts à être utilisés en publicité, selon les formats convenus."] },
      cta: L("Book a 15-min call", "Réserver un appel de 15 min") },
    { key:"custom",
      name: L("Custom Projects", "Projets sur mesure"),
      qty: L("The Vignau System", "Le système Vignau"),
      what: L("For brands launching or relaunching: one coherent system, from idea to amplification. Tailored to your needs.",
              "Pour les marques qui se lancent ou se relancent : un système cohérent, de l'idée à l'amplification. Adapté à vos besoins."),
      items: { en:["Brand strategy.","Branding and visual identity.","Art direction.","Social media content.","Organic visuals.","Creative ad pack."],
               fr:["Stratégie de marque.","Branding et identité visuelle.","Direction artistique.","Contenus pour les réseaux sociaux.","Visuels organiques.","Pack de créations publicitaires."] },
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

/* ---- Pastille et badges du hero : plus d'urgence ni de promesse de délai ---- */
S.hero = Object.assign({}, S.hero, {
  pill: L("Ad creatives for e-commerce brands", "Créas publicitaires pour marques e-commerce"),
  badge1: { t: L("Concepts delivered", "Concepts livrés"), s: L("Ready to test", "Prêts à tester") },
  badge2: { t: L("New pack", "Nouveau pack"), s: L("12 ad creatives", "12 créations publicitaires") }
});

/* ---- Simulateur : champs (utilisés seulement si content.js n'a pas de calc.groups) ---- */
if (!S.calc.groups) {
  S.calc.groups = [
    { t: L("Creative production", "Production créative"), fields: [
      { id:"n", l: L("Number of separate suppliers", "Nombre de fournisseurs distincts"), min:1, max:10, step:1, def:3 },
      { id:"c", l: L("Average yearly cost per supplier", "Coût annuel moyen par fournisseur"), min:500, max:20000, step:500, def:3000, unit:"€" }
    ] },
    { t: L("Advertising", "Publicité"), fields: [
      { id:"ads", l: L("Monthly advertising budget", "Budget publicitaire mensuel"), min:0, max:50000, step:500, def:5000, unit:"€" },
      { id:"pct", l: L("Share of ad spend on untested visuals", "Part du budget sur des visuels non testés"), min:0, max:100, step:5, def:30, unit:"%" }
    ] },
    { t: L("Repeat purchases", "Achats répétés"), fields: [
      { id:"cli", l: L("Monthly customers", "Clients par mois"), min:0, max:5000, step:50, def:200 },
      { id:"pan", l: L("Average order value", "Panier moyen"), min:10, max:500, step:5, def:60, unit:"€" },
      { id:"re", l: L("Estimated repeat-purchase opportunity", "Opportunité d'achats répétés estimée"), min:0, max:100, step:5, def:20, unit:"%" }
    ] }
  ];
}

/* ---- FAQ alignée sur les nouvelles offres ---- */
S.faq = [
  { q: L("What's in the packs?", "Que contiennent les packs ?"),
    a: L("The Ad Creative Pack includes 12 advertising creatives, the Creative Growth Pack 24. Each comes with distinct visual concepts and product-focused messaging, as ready-to-use files for paid social in the agreed formats.",
         "Le Pack Créas Publicitaires comprend 12 créations, le Pack Créas Growth 24. Chacun inclut des concepts visuels distincts et des messages adaptés au produit, en fichiers prêts à l'emploi pour la publicité, selon les formats convenus.") },
  { q: L("What happens on the 15-minute call?", "Que se passe-t-il pendant l'appel de 15 minutes ?"),
    a: L("You tell us about your brand and what you want to test. We tell you which option fits best. No commitment.",
         "Vous nous parlez de votre marque et de ce que vous voulez tester. Nous vous disons quelle option convient le mieux. Sans engagement.") },
  { q: L("Will it really look like my product?", "Ça ressemblera vraiment à mon produit ?"),
    a: L("Yes. Everything starts from your real product: shape, colour, label and packaging stay accurate.",
         "Oui. Tout part de votre vrai produit : forme, couleur, étiquette et packaging restent exacts.") },
  { q: L("Can I use the visuals in ads?", "Je peux utiliser les visuels en pub ?"),
    a: L("Yes, full commercial use: site, socials, ads, marketplaces, print.",
         "Oui, usage commercial complet : site, réseaux, pub, marketplaces, print.") },
  { q: L("Why you, if I can do it with AI?", "Pourquoi vous, si je peux le faire avec l'IA ?"),
    a: L("Anyone can generate an image. Getting your exact product, premium and ready for ads, is a craft. Former fashion photographer, Chanel, Hermès: it's mine.",
         "Générer une image, tout le monde sait faire. Avoir votre produit exact, dans un rendu premium utilisable en pub, c'est un métier. Ancien photographe de mode, Chanel, Hermès : c'est le mien.") }
];

/* ---- Section finale et pied de page ---- */
S.final = Object.assign({}, S.final, {
  title: L("Your next campaign starts *with a call*.", "Votre prochaine campagne commence *par un appel*."),
  sub: L("15 minutes to look at your brand and what you want to test.", "15 minutes pour regarder votre marque et ce que vous voulez tester.")
});
S.footerLine = L("Ad creatives for e-commerce brands.", "Des créations publicitaires pour les marques e-commerce.");

})();
