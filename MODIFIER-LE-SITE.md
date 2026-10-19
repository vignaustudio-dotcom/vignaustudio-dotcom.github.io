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
