# GreenGaz SA — site refondu

## Structure

```
site/
├── index.html         → page d'accueil (Accueil.html)
├── produits.html       → catalogue complet (gaz + accessoires)
├── services.html        → contrôles, installation, maintenance
├── galerie.html         → galerie photo avec visionneuse (lightbox)
├── contact.html         → coordonnées, carte, distributeurs
├── apropos.html          → histoire, vision/mission, équipe, valeurs
├── README.md
└── assets/
    ├── css/style.css    → feuille de style unique, partagée par toutes les pages
    ├── js/main.js       → comportements partagés (menu, jauge, galerie)
    └── images/          → dossier optionnel pour héberger vos images en local
```

Une seule feuille de style (`assets/css/style.css`) et un seul script
(`assets/js/main.js`) sont chargés par toutes les pages : toute modification
de couleur, de typographie ou de comportement se fait à un seul endroit.

## Mise en ligne

Déposez tout le contenu du dossier `site/` à la racine de votre hébergement
(là où se trouvait `Accueil.html`), en conservant l'arborescence `assets/`.
Si votre hébergeur exige un fichier d'accueil précis (`Accueil.html` plutôt
que `index.html`), renommez simplement `index.html` en `Accueil.html` et
mettez à jour les liens `href="index.html"` dans chaque page en conséquence.

## Images

Les pages pointent par défaut vers les images de votre site actuel
(`https://www.greengazsa.com/images/...`), donc tout s'affiche sans rien
faire. Voir `assets/images/README.txt` pour rendre le site 100% autonome.

## Identité visuelle

- **Couleurs** : fond pétrole profond (`#0A2A2E`), papier vert-gris clair
  (`#EEF2EF`), accent ambre (`#E3A23B`), et un code couleur par famille de
  gaz (industriel, médical, alimentaire, laboratoire, plongée, accessoires),
  repris de la page d'accueil sur toutes les pages produits.
- **Typographies** : Space Grotesk (titres), IBM Plex Sans (texte courant),
  IBM Plex Mono (repères, chiffres, code couleur).
- **Élément signature** : le manomètre animé du hero d'accueil, dont l'esprit
  (jauges, code couleur, hairlines industrielles) irrigue les autres pages.
