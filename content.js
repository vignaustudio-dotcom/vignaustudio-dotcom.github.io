/* =====================================================================
   CONTENU DU SITE VIGNAU STUDIO : le SEUL fichier à modifier.
   - Chaque texte : { fr: "...", en: "..." }
   - *mot* = italique serif
   - Images : dossier images/, format 4:5 (1080 x 1350)
   - Après une modif : Cmd + S, puis rafraîchis la page.
   ===================================================================== */

window.SITE = {

  /* ---------- RÉGLAGES ---------- */
  email: "contact@vignaustudio.com",         // reçoit les demandes d'aperçu gratuit
  callUrl: "https://calendly.com/vignaustudio/brand-audit",
  instagram: "https://www.instagram.com/vignaustudio/",
  linkedin: "",   // lien LinkedIn de la PAGE Vignau Studio (vide = masqué)
  siteUrl: "https://vignaustudio.com/",
  defaultLang: "auto",

  /* ---------- MENU ---------- */
  nav: {
    examples: { fr: "Exemples", en: "Examples" },
    cases:    { fr: "Projets", en: "Work" },
    how:      { fr: "Comment ça marche", en: "How it works" },
    pricing:  { fr: "Offres", en: "Offers" },
    journal:  { fr: "Journal", en: "Journal" },
    faq:      { fr: "FAQ", en: "FAQ" },
    cta:      { fr: "Voir les offres", en: "See offers" }
  },

  /* ---------- HERO (façon Kamevo) ---------- */
  hero: {
    pill:  { fr: "Places limitées ce mois-ci", en: "Limited spots this month" },
    title: { fr: "Ton produit en visuel *premium*. Sans shooting.", en: "Your product as a *premium* visual. No shoot." },
    sub:   { fr: "Des visuels produit qualité campagne, sans shooting. Je m'occupe de tout, tu publies.", en: "Campaign-quality product visuals, without the shoot. I handle everything, you just publish." },
    urlLabel:   { fr: "Lien de ton produit", en: "Your product link" },
    urlPh:      { fr: "https://tamarque.com/produit", en: "https://yourbrand.com/product" },
    emailLabel: { fr: "Ton email", en: "Your email" },
    emailPh:    { fr: "toi@tamarque.com", en: "you@yourbrand.com" },
    button:     { fr: "Recevoir mon aperçu gratuit", en: "Get my free preview" },
    fine:       { fr: "Gratuit · Sans engagement", en: "Free · No commitment" },
    thanks:     { fr: "C'est reçu. Ton aperçu arrive par email.", en: "Got it. Your preview is on its way to your inbox." },
    badge1: { t: { fr: "Aperçu envoyé", en: "Preview sent" }, s: { fr: "Packshot parfum", en: "Fragrance packshot" } },
    badge2: { t: { fr: "Nouveau pack", en: "New pack" }, s: { fr: "10 visuels · livrés en 48h", en: "10 visuals · delivered in 48h" } },
    images: [
      "images/hero-01.png","images/hero-02.jpg","images/hero-03.jpeg","images/hero-04.jpg","images/hero-05.jpeg",
      "images/hero-06.png","images/hero-07.jpeg","images/hero-08.jpg","images/hero-09.png","images/hero-10.png",
      "images/hero-11.png","images/hero-13.png","images/hero-14.png","images/hero-16.png"
    ]
  },

  /* Logos "Ils nous ont fait confiance" (sous la bande d'images).
     style : "serif", "sans" ou "caps". img : chemin d'un logo (optionnel, remplace le texte). */
  logosLabel: { fr: "Ils nous ont fait confiance", en: "They trusted us" },
  /* Logos qui défilent : fichiers dans images/logo/ (fond blanc accepté) */
  logos: [
    { img: "images/logo/elle.jpg",   name: "ELLE" },
    { img: "images/logo/harper.jpg", name: "Harper's Bazaar" },
    { img: "images/logo/fwbk.jpg",   name: "Fashion Week Brooklyn" },
    { img: "images/logo/duniya.jpg", name: "Duniya Jewels" },
    { img: "images/logo/flying.jpg", name: "Flying Solo" },
    { img: "images/logo/tribe.jpg",  name: "Tribe Management" },
    { name: "Marilou Jewelry NYC", style: "caps" }
  ],



  /* ---------- AVANT / APRÈS (la preuve) ----------
     Mets une photo "avant" (prise au téléphone) et le visuel "après".
     Si les images n'existent pas, la section se masque toute seule. */
  beforeAfter: {
    title: { fr: "Avant. *Après*.", en: "Before. *After*." },
    sub:   { fr: "Une photo prise au téléphone. Un visuel prêt pour ta campagne.", en: "A phone photo. A visual ready for your campaign." },
    before: "images/avant.jpg",
    after:  "images/apres.jpg",
    beforeLabel: { fr: "Avant", en: "Before" },
    afterLabel:  { fr: "Après", en: "After" }
  },

  /* ---------- IMPACT (graphique façon Bup) ---------- */
  impact: {
    label: { fr: "Le problème", en: "The problem" },
    title: { fr: "Tes pubs s'essoufflent ? C'est souvent *le visuel*.", en: "Ads running out of steam? It's often *the visual*." },
    sub:   { fr: "Un même visuel diffusé trop longtemps finit par ne plus arrêter personne. Les clics baissent, le coût par vente grimpe, sans prévenir.", en: "The same visual shown too long stops catching anyone. Clicks drop, cost per sale climbs, without warning." },
    chartTitle: { fr: "Un visuel s'use. Un flux, non.", en: "A visual wears out. A flow doesn't." },
    lineA: { fr: "Mêmes visuels qui tournent", en: "Same visuals running" },
    lineB: { fr: "Visuels Vignau renouvelés", en: "Renewed Vignau visuals" },
    newTag: { fr: "NOUVEAUX VISUELS", en: "NEW VISUALS" },
    axis: { fr: "CLICS", en: "CLICKS" },
    weeks: { fr: ["SEM. 1","SEM. 4","SEM. 8"], en: ["WK 1","WK 4","WK 8"] },
    withoutTitle: { fr: "Sans Vignau", en: "Without Vignau" },
    withTitle:    { fr: "Avec Vignau", en: "With Vignau" },
    without: [
      { fr: "Les mêmes photos partout, plus personne ne les voit", en: "Same photos everywhere, nobody sees them" },
      { fr: "Un shooting à plusieurs milliers d'euros pour renouveler", en: "A shoot costing thousands to refresh" },
      { fr: "Des visuels IA faits seul, qui font cheap", en: "DIY AI visuals that look cheap" }
    ],
    with: [
      { fr: "Des visuels neufs avant que les anciens s'usent", en: "Fresh visuals before the old ones wear out" },
      { fr: "Assez de volume pour tester plusieurs angles", en: "Enough volume to test several angles" },
      { fr: "Un rendu premium, ton vrai produit", en: "Premium look, your real product" }
    ]
  },

  /* ---------- COMMENT ÇA MARCHE ---------- */
  how: {
    title: { fr: "Ton visuel en *3 étapes*.", en: "Your visual in *3 steps*." },
    steps: [
      { t: { fr: "Colle le lien de ton produit", en: "Paste your product link" }, p: { fr: "Ou envoie quelques photos prises au téléphone.", en: "Or send a few phone photos." } },
      { t: { fr: "Je crée tes visuels", en: "I create your visuals" }, p: { fr: "Direction artistique, mise en scène, retouche à la main.", en: "Art direction, staging, hand retouching." } },
      { t: { fr: "Tu publies. Tu vends.", en: "You post. You sell." }, p: { fr: "Livrés en 48h, aux formats site, réseaux et pub.", en: "Delivered in 48h, in site, social and ad formats." } }
    ]
  },

  /* ---------- USAGES (2 rangées qui défilent, façon Whenever) ----------
     Chaque carte : une image 4:5, un titre, une phrase. */
  uses: {
    label: { fr: "Fait main, avec l'IA", en: "Hand-crafted, with AI" },
    title: { fr: "Un angle gagnant, *décliné partout.*", en: "One winning angle, *every format.*" },
    sub:   { fr: "Quand un angle marche, on le décline en pubs, fiches produit et posts.", en: "Once an angle works, we turn it into ads, product pages and social posts." },
    note:  { fr: "(oui, tout est fait par IA !)", en: "(yep, that's all AI!)" },
    row1: [
      { img: "images/fragrance-1.png", t: { fr: "Visuels de campagne", en: "Campaign visuals" }, p: { fr: "Des images fortes pour tes lancements et tes pubs.", en: "Strong images for launches and ads." } },
      { img: "images/patch-colla.jpg",  t: { fr: "Packshots studio", en: "Studio packshots" }, p: { fr: "Lumière maîtrisée, matières fidèles, détails nets.", en: "Controlled light, true materials, sharp details." } },
      { img: "images/beauty-1.png",    t: { fr: "Sur modèle", en: "On-model" }, p: { fr: "Ton produit porté ou tenu par le bon visage.", en: "Your product worn or held by the right face." } },
      { img: "images/byredo-beauty.png", t: { fr: "Variations pub", en: "Ad variations" }, p: { fr: "Plusieurs angles à tester, produit identique.", en: "Several angles to test, same product." } }
    ],
    row2: [
      { img: "images/fragrance-5.png", zoom: 1.12, t: { fr: "Promos saisonnières", en: "Seasonal promos" }, p: { fr: "Noël, été, soldes, sans nouveau shooting.", en: "Holidays, summer, sales, no new shoot." } },
      { img: "images/doigt.jpg",   t: { fr: "Coloris et variantes", en: "Colourways & variants" }, p: { fr: "Chaque couleur, chaque finition.", en: "Every colour, every finish." } },
      { img: "images/beauty-5.png",    t: { fr: "Réseaux sociaux", en: "Social content" }, p: { fr: "Un feed cohérent, prêt à publier.", en: "A coherent feed, ready to post." } },
      { img: "images/gouttes.jpg",     t: { fr: "Textures", en: "Textures" }, p: { fr: "Gouttes, crèmes, poudres qui donnent envie.", en: "Drops, creams, powders that tempt." } }
    ]
  },

  /* ---------- SECTEURS + TÉMOIGNAGES (façon Whenever) ---------- */
  trust: {
    title: { fr: "Ils nous font confiance, *dans tous les secteurs*.", en: "Trusted by brands *across industries*." },
    sub:   { fr: "Quoi que tu vendes, on crée des visuels haut de gamme fidèles à ton produit et à ta marque.", en: "Whatever you sell, we create high-end visuals true to your product and your brand." },
    industries: [
      { fr: "Beauté", en: "Beauty" }, { fr: "Tech", en: "Tech" }, { fr: "SaaS", en: "SaaS" }, { fr: "Sites web", en: "Websites" },
      { fr: "Bien-être", en: "Wellness" }, { fr: "Sacs & accessoires", en: "Bags & Accessories" }, { fr: "Montres", en: "Watches" }, { fr: "Influenceurs", en: "Influencers" },
      { fr: "E-commerce", en: "E-commerce" }, { fr: "Food & boissons", en: "Food & Beverage" }, { fr: "Mode", en: "Fashion" }, { fr: "Joaillerie", en: "Jewelry" }
    ],
    prev: { fr: "Précédent", en: "Previous" },
    next: { fr: "Suivant", en: "Next" }
  },
  // La partie entre *étoiles* s'affiche en italique serif
  testimonials: [
    { img: "images/melanie.png", name: "Mélanie Lange", role: { fr: "Fondatrice & CEO, Tribe Management", en: "Founder & CEO, Tribe Management" },
      quote: { fr: "*Je suis ravie de recommander Loïc Vignau*, qui nous a grandement aidés à concevoir la direction artistique du projet Line Up pour Design Motion. Loïc est un professionnel talentueux, réactif et extrêmement fiable. Il comprend parfaitement la vision créative et sait la traduire en concepts visuels percutants. Au-delà de sa créativité, il respecte toujours les délais et s'adapte parfaitement au planning du projet. Travailler avec lui a été un vrai plaisir : il combine créativité, rigueur et excellente collaboration, ce qui en fait un partenaire précieux pour tout projet dans l'univers de la mode ou du design. Je le recommande sans hésitation à toute personne cherchant un professionnel créatif, engagé et visionnaire.",
               en: "*I'm delighted to recommend Loïc Vignau*, who greatly helped us shape the art direction of the Line Up project for Design Motion. Loïc is a talented, responsive and extremely reliable professional. He fully understands the creative vision and knows how to turn it into striking visual concepts. Beyond his creativity, he always meets deadlines and adapts perfectly to the project schedule. Working with him was a real pleasure: he combines creativity, rigour and excellent collaboration, which makes him a valuable partner for any fashion or design project. I recommend him without hesitation to anyone looking for a creative, committed and visionary professional." } },
    { img: "images/jelizaveta.png", name: "Jelizaveta Hagleitner", role: { fr: "Fondatrice, RDxOS · Vienne · Digital Week Paris · NY", en: "Founder, RDxOS · Vienna · Digital Week Paris · NY" },
      quote: { fr: "*Travailler avec Loïc est fluide, précis et profondément aligné.* Il donne vie aux concepts avec un œil raffiné et un vrai instinct créatif. Il sait transformer des références, des idées et une direction créative en visuels cohérents, intentionnels et pertinents à l'international.",
               en: "*Working with Loïc feels fluid, sharp and deeply aligned.* He brings concepts to life with a refined eye and a strong creative instinct. He understands how to turn references, ideas and creative direction into visuals that feel cohesive, intentional and internationally relevant." } },
    { img: "images/merilou-profil.jpg", name: "Marilou", role: { fr: "CEO & fondatrice, Marilou Jewelry NYC", en: "CEO & Founder, Marilou Jewelry NYC" },
      quote: { fr: "*Travailler avec Loïc est simple et inspirant.* Il sait traduire l'essence d'une marque en visuels à la fois élevés et intentionnels.",
               en: "*Working with Loïc is seamless and inspiring.* He understands how to translate a brand's essence into visuals that feel both elevated and intentional." } },
    { img: "images/rahel.png", name: "Rahel Tadesse", role: { fr: "Brand Director, Flying Solo New York", en: "Brand Director, Flying Solo New York" },
      quote: { fr: "*Une capacité rare à allier esthétique et clarté*, et à transformer des idées en images désirables et premium.", en: "*A rare ability to balance aesthetics with clarity*, and to shape ideas into images that feel desirable and premium." } },
    { img: "images/rick.png", name: "Rick David", role: { fr: "Directeur, BK Style Foundation", en: "Director, BK Style Foundation" },
      quote: { fr: "*Créativité, vraie vision business*, et un état d'esprit inspirant. Un profil rare, à la fois esthétique et stratégique.", en: "*Creativity, strong business vision*, and an inspiring mindset. A rare profile, both aesthetic and strategic." } },
    { img: "images/vivia.png", name: "Vivia Ferragamo", role: { fr: "Fondatrice, Vivia Resort", en: "Founder, Vivia Resort" },
      quote: { fr: "*Un œil naturel, une approche calme*, et des résultats beaux et authentiques à chaque fois.", en: "*A natural eye, a calm approach*, and beautiful, authentic results every time." } }
  ],


  /* ---------- ÉTUDES DE CAS (éditorial) ----------
     Images dans images/projects/<nom>/ : cover.jpg (grande), 1.jpg, 2.jpg (à droite),
     puis 3.jpg, 4.jpg, 5.jpg, 6.jpg (la bande du bas). Format 4:5.
     Tu peux mettre d'autres noms : modifie juste la liste "images".
     Si une image manque, un emplacement neutre s'affiche à la place. */
  casesLabel: { fr: "Études de cas", en: "Case studies" },
  casesTitle: { fr: "Des marques construites *de A à Z*.", en: "Brands built *from A to Z*." },
  casesSub:   { fr: "De vraies marques, en ligne. Pensées et construites par le studio.", en: "Real brands, live. Designed and built by the studio." },
  didLabel:   { fr: "Ce que j'ai fait", en: "What I did" },
  devBadge:   { fr: "Design et développement : 100 % codé par le studio", en: "Design and development: 100% coded by the studio" },
  /* instagram : lien affiché en bas de chaque projet, avec le logo Instagram */
  cases: [
    { slug: "birushi", n: "01", name: "Birushi", year: "2023 — 2026",
      kind: { fr: "Site e-commerce · Ma propre marque", en: "E-commerce website · My own brand" },
      tagline: { fr: "Une marque de beauté, *pensée de zéro*.", en: "A beauty brand, *built from zero*." },
      intro: { fr: "Une brosse premium pour cheveux bouclés. Le nom, l'identité, le packaging, le site e-commerce (entièrement codé), les visuels et la stratégie réseaux : tout a été construit par moi, de la première esquisse à la boutique en ligne.", en: "A premium brush for curly hair. Name, identity, packaging, the e-commerce site (fully coded), visuals and social strategy: all built by me, from the first sketch to the online store." },
      did: { fr: ["Nom et identité","Packaging","Site e-commerce, design et développement","Visuels de campagne","Vidéos UGC","Stratégie social media, organique et payante"], en: ["Name and identity","Packaging","E-commerce site, design and development","Campaign visuals","UGC videos","Social media strategy, organic and paid"] },
      link: "https://birushi.com",
      instagram: "https://www.instagram.com/birushi_",
      images: ["images/projects/birushi/cover.jpg","images/projects/birushi/1.jpg","images/projects/birushi/2.jpg","images/projects/birushi/3.jpg","images/projects/birushi/4.jpg","images/projects/birushi/5.jpg","images/projects/birushi/6.jpg"] },
    { slug: "olquizz", n: "02", name: "Olquizz", year: "2026",
      kind: { fr: "Logiciel (SaaS) · Site web", en: "Software (SaaS) · Website" },
      tagline: { fr: "Le Duolingo de l'entrepreneuriat, *de l'idée au lancement*.", en: "The Duolingo of entrepreneurship, *from idea to launch*." },
      intro: { fr: "Une app d'apprentissage gamifiée pour les entrepreneurs. Branding, produit, site et contenus réseaux, pensés comme un seul univers. L'application et le site sont entièrement codés par le studio.", en: "A gamified learning app for entrepreneurs. Branding, product, website and social content, designed as one world. The app and the site are fully coded by the studio." },
      did: { fr: ["Branding","Design produit","Développement de l'app (SaaS)","Site web, design et développement","Stratégie social media organique"], en: ["Branding","Product design","App development (SaaS)","Website, design and development","Organic social media strategy"] },
      link: "https://olquizz.com",
      instagram: "https://www.instagram.com/olquizz.app",
      images: ["images/projects/olquizz/cover.jpg","images/projects/olquizz/1.jpg","images/projects/olquizz/2.jpg","images/projects/olquizz/3.jpg","images/projects/olquizz/4.jpg","images/projects/olquizz/5.jpg","images/projects/olquizz/6.jpg"] },
    { slug: "haveit", n: "03", name: "HAVEIT", year: "2026",
      kind: { fr: "Logiciel (SaaS) · Site web", en: "Software (SaaS) · Website" },
      tagline: { fr: "Une photo ordinaire, *un visuel de luxe*.", en: "An ordinary photo, *a luxury visual*." },
      intro: { fr: "Une app qui transforme une photo du quotidien en visuel lifestyle premium. Marque, produit, site bilingue et contenus vidéo. Le logiciel et le site sont entièrement codés par le studio.", en: "An app that turns an everyday photo into a premium lifestyle visual. Brand, product, bilingual site and video content. The software and the site are fully coded by the studio." },
      did: { fr: ["Nom et identité","Développement du logiciel IA (SaaS)","Site FR / EN, design et développement","Contenus vidéo","Stratégie social media organique"], en: ["Name and identity","AI software development (SaaS)","FR / EN website, design and development","Video content","Organic social media strategy"] },
      link: "https://haveitnow.fr",
      instagram: "https://www.instagram.com/haveit.io/",
      images: ["images/projects/haveit/cover.jpg","images/projects/haveit/1.jpg","images/projects/haveit/2.jpg","images/projects/haveit/3.jpg","images/projects/haveit/4.jpg","images/projects/haveit/5.jpg","images/projects/haveit/6.jpg"] },
    { slug: "elle", n: "04", name: "ELLE", year: "2025",
      subline: { fr: "ELLE Luxembourg · Projet Line-Up, création Design Motion", en: "ELLE Luxembourg · Line-Up project, created by Design Motion" },
      kind: { fr: "Magazine · Luxembourg", en: "Magazine · Luxembourg" },
      tagline: { fr: "Une collaboration *éditoriale*.", en: "An *editorial* collaboration." },
      intro: { fr: "Direction artistique et visuels pour le projet Line-Up de Design Motion, publié dans ELLE Luxembourg. Remplace ce texte par le détail exact de la collaboration.", en: "Art direction and visuals for Design Motion's Line-Up project, featured in ELLE Luxembourg. Replace this text with the exact details of the collaboration." },
      did: { fr: ["Direction artistique","Visuels éditoriaux","Stratégie social media organique (Design Motion)"], en: ["Art direction","Editorial visuals","Organic social media strategy (Design Motion)"] },
      link: "",
      dev: false,
      instagram: "https://www.instagram.com/design.motion.lu",
      images: ["images/projects/elle/cover.jpg","images/projects/elle/1.jpg","images/projects/elle/2.jpg","images/projects/elle/3.jpg","images/projects/elle/4.jpg","images/projects/elle/5.jpg","images/projects/elle/6.jpg"] }
  ],
  visitLabel: { fr: "Voir le site", en: "Visit the site" },

  /* ---------- TARIFS (façon Miniamea) ----------
     link = ton lien de paiement Whop (vide = renvoie vers l'appel) */
  pricing: {
    title: { fr: "Une offre pour *chaque* étape.", en: "An offer for *every* stage." },
    sub:   { fr: "Tarif donné sur demande. Livraison en 48h, retouches incluses.", en: "Pricing on request. Delivered in 48h, revisions included." },
    included: { fr: "Inclus :", en: "Included:" },
    plans: [
      { name: { fr: "Starter", en: "Starter" }, what: { fr: "1 visuel", en: "1 visual" },
        items: { fr: ["1 visuel premium de ton produit","Format au choix (site, réseaux, pub)","Livraison en 48h","2 retouches"], en: ["1 premium visual of your product","Format of your choice (site, social, ad)","Delivered in 48h","2 revisions"] },
        cta: { fr: "Demander un devis", en: "Request a quote" }, link: "call" },
      { name: { fr: "Pack Pro", en: "Pro Pack" }, star: true, badge: { fr: "Le plus populaire", en: "Most popular" },
        what: { fr: "Pack de 10 visuels", en: "Pack of 10 visuals" },
        items: { fr: ["10 visuels premium","Tous les formats inclus","Livraison en 48h","Retouches illimitées","Support WhatsApp"], en: ["10 premium visuals","All formats included","Delivered in 48h","Unlimited revisions","WhatsApp support"] },
        cta: { fr: "Demander un devis", en: "Request a quote" }, link: "call" },
      { name: { fr: "Marque complète", en: "Full brand" }, what: { fr: "Sur mesure", en: "Custom" },
        items: { fr: ["Identité de marque","Site en ligne","Campagne de lancement","Visuels chaque mois"], en: ["Brand identity","Live website","Launch campaign","Visuals every month"] },
        cta: { fr: "Réserver un appel", en: "Book a call" }, link: "call" }
    ]
  },

  /* ---------- JOURNAL (blog) ----------
     Pour chaque nouvel article : ajoute un bloc en HAUT de la liste "posts".
     url = le fichier de l'article dans le dossier blog/
     img = image de couverture (4:5) dans images/blog/
     La section se cache toute seule tant que la liste est vide. */
  journal: {
    label: { fr: "Journal", en: "Journal" },
    title: { fr: "Notes sur l'image, *la marque* et la vente.", en: "Notes on image, *brand* and selling." },
    sub:   { fr: "Conseils concrets pour des visuels produit qui donnent envie d'acheter.", en: "Practical advice for product visuals that make people buy." },
    all:   { fr: "Tous les articles", en: "All articles" },
    read:  { fr: "Lire l'article", en: "Read the article" },
    posts: [
      // Ajoute ici tes articles quand ils sont prêts (modèle dans blog/article-modele.html)
    ]
  },

  /* ---------- FAQ ---------- */
  faqTitle: { fr: "Questions *fréquentes*", en: "Frequent *questions*" },
  faq: [
    { q: { fr: "L'aperçu est vraiment gratuit ?", en: "Is the preview really free?" }, a: { fr: "Oui. Tu reçois un aperçu de ton produit en visuel premium, sans carte bancaire. Si tu l'aimes, tu choisis une offre.", en: "Yes. You get a preview of your product as a premium visual, no card needed. If you like it, pick an offer." } },
    { q: { fr: "Ça ressemble vraiment à mon produit ?", en: "Will it really look like my product?" }, a: { fr: "Oui. Je pars de ton vrai produit. Forme, couleur, étiquette et packaging restent exacts.", en: "Yes. I start from your real product. Shape, colour, label and packaging stay accurate." } },
    { q: { fr: "Pourquoi toi si je peux le faire avec l'IA ?", en: "Why you, if I can do it with AI?" }, a: { fr: "Générer une image, tout le monde sait faire. Avoir ton produit exact, dans un rendu premium utilisable en pub, c'est un métier. Ancien photographe de mode, Chanel, Hermès : c'est le mien.", en: "Anyone can generate an image. Getting your exact product, premium and ready for ads, is a craft. Former fashion photographer, Chanel, Hermès: it's mine." } },
    { q: { fr: "Je peux utiliser les visuels en pub ?", en: "Can I use them in ads?" }, a: { fr: "Oui, usage commercial complet : site, réseaux, pub, marketplaces, print.", en: "Yes, full commercial use: site, socials, ads, marketplaces, print." } },
    { q: { fr: "Et si un visuel ne me plaît pas ?", en: "What if I don't like a visual?" }, a: { fr: "On le retouche : 2 fois sur Starter, sans limite sur le Pack Pro.", en: "We revise it: twice on Starter, unlimited on the Pro Pack." } }
  ],

  /* ---------- FINAL ---------- */
  final: {
    title: { fr: "Ta prochaine campagne commence *par un lien*.", en: "Your next campaign starts *with a link*." },
    sub:   { fr: "Colle le lien de ton produit. On s'occupe du reste.", en: "Paste your product link. I'll handle the rest." }
  },

  footerLine: { fr: "Des visuels produit premium, sans shooting.", en: "Premium product visuals, no shoot." },
  legal: {
    mentions: { fr: "Mentions légales", en: "Legal notice" },
    cgv:      { fr: "CGV", en: "Terms of sale" },
    cgu:      { fr: "CGU", en: "Terms of use" },
    privacy:  { fr: "Confidentialité", en: "Privacy" }
  }
};
