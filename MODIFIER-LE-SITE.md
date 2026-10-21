# Modifier le site tout seul

Tu ne touches qu'à **un seul fichier : `content.js`**. Jamais à `index.html`.

## Changer un texte
`Cmd + F` dans `content.js`, tu modifies entre les guillemets (version `fr:` et `en:`), `Cmd + S`, tu rafraîchis.
Un mot entre `*étoiles*` s'affiche en italique.

## Brancher tes paiements Whop
Dans la partie TARIFS, colle ton lien Whop sur la ligne `link: ""` de chaque offre.
Vide = le bouton renvoie vers ton Calendly.

## Changer les prix
Lignes `price:` et `old:` (ancien prix barré) dans la partie TARIFS.

## Avant / Après
Mets `avant.jpg` (photo prise au téléphone) et `apres.jpg` (ton visuel) dans `images/`.
Tant qu'elles n'existent pas, la section reste cachée.

## Changer les images
Toutes les images sont listées dans `content.js`. Mets la nouvelle dans `images/` et remplace son chemin.

## Le formulaire « aperçu gratuit »
Les demandes arrivent par email sur l'adresse `email:` en haut de `content.js`.
La toute première fois, FormSubmit t'envoie un email de confirmation : clique sur le lien pour activer.

## Voir en local / mettre en ligne
```
open index.html
git add -A && git commit -m "Mise à jour" && git push
```
Si la page devient blanche : il manque un guillemet ou une virgule dans `content.js`. `Cmd + Z` jusqu'à ce que ça remarche.

## Publier un article de blog
1. Dans le dossier `blog/`, duplique `article-modele.html` (clic droit, Dupliquer).
2. Renomme la copie avec des mots-clés, en minuscules et avec des tirets : `visuels-produit-qui-vendent.html`.
3. Ouvre-la dans VS Code et remplace tout ce qui est marqué ✏️ (titre, description, adresse, date, texte).
4. Mets la couverture (4:5) dans `images/blog/` avec le même nom : `visuels-produit-qui-vendent.jpg`.
5. Dans `content.js`, partie JOURNAL, ajoute un bloc en haut de la liste `posts` (copie celui qui existe).
6. Dans `sitemap.xml`, ajoute une ligne avec l'adresse de l'article.
7. `git add -A && git commit -m "Nouvel article" && git push`

Quand ton premier vrai article est en ligne, supprime le bloc `article-modele` de `content.js`.

## Pages légales
Tout est dans `legal.html` (mentions légales, CGV, CGU, confidentialité), en français puis en anglais.
Si tu changes un prix, une offre ou un délai, pense à mettre à jour les CGV dans ce fichier.
