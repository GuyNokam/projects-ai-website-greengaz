Ce dossier est prévu pour accueillir vos propres copies des images
(usine1.jpeg, bouteilles5.jpeg, etc.) si vous voulez rendre le site
totalement autonome, sans dépendre du site actuel.

Par défaut, les pages HTML pointent directement vers :
https://www.greengazsa.com/images/...
donc tout fonctionne sans rien faire.

Pour rendre le site 100% indépendant :
1. Téléchargez vos images depuis votre hébergement actuel
   (dossier /images/ de greengazsa.com) dans ce dossier assets/images/,
   en gardant exactement les mêmes noms de fichiers.
2. Dans chaque fichier .html, remplacez
   "https://www.greengazsa.com/images/" par "assets/images/".
