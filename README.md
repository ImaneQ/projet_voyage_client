# Hello ! 👋
# Organisateur de voyages/ Dashboard

Voici le dernier projet que j'ai réalisé au sein de l'institut de formation dans lequel je suis actuellement.
Ce dépôt contient la partie front-end du projet_voyage qui permet de générer des listes de choses à faire avant de voyager (ou autre) qu'on peut générer en PDF et imprimer.Ce projet comprend également une partie pour générer des raccourcis vers des liens (en cours) en guise de marques pages .

## Démarrage rapide

Ces instructions vont vous permettre d'obtenir une copie fonctionnelle du projet sur votre poste de travail.

## Prérequis
Afin de pouvoir exécuter l'application sur votre poste, vous devez d'aborder installer les dépendances suivantes :
  * Angular cli
  * Bootstrap
  * Electron (partie desktop)
  * Capacitor (en cours, partie mobile)
  * Android Studio (en cours, partie mobile)

## Installation

### Angular cli
    1. Ouvrir une invite de commande.
    2. Taper `npm install -g @angular/cli`.
### Bootstrap
    1. Taper ` npm install @ng-bootstrap/ng-bootstrap`.
    2. Changer le fichier .angular-cli.json en ajoutant le style:"../node_modules/bootstrap/dist/css/bootstrap.min.css"
  
### Electron
    1. Installer électron sur votre ordinateur : ouvrez un terminal en mode Administrateur et exécuter cette commande :`npm install electron -g`
    2. Se placer sur la racine du projet, dans le package.json, taper: `npm install --save-dev electron`.
    3. Taper `npm run electron` pour lancer l'application.
    
### Capacitor
    0. Configurer l'environnement avant tout voire le lien suivant: https://capacitorjs.com/docs/getting-started/environment-setup
    1. Taper: `npm i @capacitor/core` et `npm i -D @capacitor/cli`
    2. `npx cap init`
    3. `npm i @capacitor/android` (version ios existante voire: https://capacitorjs.com/docs/ios )
    4. `npx cap add android`
    5. `npx cap sync`

### Android Studio

    1. Télécharger Android Studio sur le lien suivant: https://developer.android.com/studio
    2. Configurer Android SDK à l'aide de ce lien: https://capacitorjs.com/docs/getting-started/environment-setup

## Exécution
    1. Ouvrir une invite de commande à la racine du projet.
    2. Exécuter la commande `ng serve`.
    3. Cliquer sur le lien indiqué après l'éxecution de la commande: http://localhost:4200/.

 ## Tests
### Tests unitaires
    1. Taper `ng test` afin d'éxecuter les tests unitaires via Karma.
    2. A venir.
    
## Aperçu

Voire issues.


## 🛠 Skills
Angular CLI  version 14.2.6. , SCSS 


