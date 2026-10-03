# Jeux JavaScript

Deux jeux développés en **JavaScript** dans le cadre des cours de développement Web, réalisés **en binôme**.

Le projet met en pratique différentes fonctionnalités de JavaScript à travers deux jeux interactifs directement exécutés dans le navigateur.

## Jeux

### Clicker

Le but est de cliquer sur un cookie qui se déplace aléatoirement dans une zone de jeu.

À chaque partie :

* le cookie apparaît à une position aléatoire ;
* sa position change régulièrement ;
* un chronomètre de 10 secondes limite la partie ;
* le temps nécessaire pour cliquer sur le cookie est calculé avec une précision au millième de seconde ;
* le résultat est affiché à la fin de la partie.

Ce jeu utilise notamment la génération de positions aléatoires, les événements `click`, les timers JavaScript avec `setInterval()` et `setTimeout()`, ainsi que la manipulation du DOM.

### Jeu de mémoire

Le deuxième jeu est un jeu de cartes dans lequel il faut retrouver les paires identiques.

Le jeu propose notamment :

* plusieurs niveaux de difficulté ;
* une génération et un mélange aléatoire des cartes ;
* la gestion des cartes retournées ;
* la détection des paires ;
* un compteur de coups ;
* un chronomètre ;
* un écran de fin de partie ;
* l'enregistrement des meilleurs scores avec `localStorage` ;
* la possibilité de recommencer ou de rejouer une partie.

La difficulté modifie notamment la taille de la grille et donc le nombre de cartes à retrouver.

## Technologies utilisées

* **JavaScript**
* **HTML**
* **CSS**
* DOM
* Événements JavaScript
* `setInterval()` et `setTimeout()`
* `localStorage`

## Notions travaillées

Ce projet nous a permis de mettre en pratique plusieurs notions vues en cours de JavaScript :

* manipulation et modification du DOM ;
* gestion des événements utilisateur ;
* fonctions et variables JavaScript ;
* tableaux et objets du DOM ;
* génération de valeurs aléatoires ;
* gestion du temps et des timers ;
* logique conditionnelle ;
* création dynamique d'éléments HTML ;
* gestion de l'état d'un jeu ;
* stockage de données côté navigateur avec `localStorage`.

## Contexte

Projet académique réalisé **en binôme** dans le cadre des cours de **JavaScript** du BUT Informatique.

L'objectif était de mettre en pratique les notions de JavaScript à travers la conception de jeux interactifs fonctionnant directement dans un navigateur.

## Organisation du projet

Le projet contient les fichiers nécessaires aux deux jeux, notamment les scripts JavaScript ainsi que les fichiers HTML et CSS associés.

Chaque jeu possède sa propre interface et sa propre logique de fonctionnement.

## Lancement

Le projet peut être exécuté directement dans un navigateur en ouvrant les pages HTML correspondantes.

Aucune installation particulière de JavaScript n'est nécessaire.
