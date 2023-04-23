# IOT-M2TIW

**TP1 Analog_Input_Turn_On_Light_When_No_Light :**

  Description: Ceci est un exemple de sketch Arduino qui montre comment lire une entrée analogique à partir d'un potentiomètre et contrôler l'état d'une LED en fonction de la lecture analogique. La LED s'allumera pendant une durée basée sur la lecture analogique, puis s'éteindra pendant une autre durée basée sur la même lecture.

  Circuit:
  -Potentiomètre: Connectez la broche centrale à l'entrée analogique A1, une broche latérale à la terre et l'autre broche latérale à +5V.
  -LED: L'anode (patte la plus longue) est connectée à la sortie numérique 13 via une résistance de 220 ohms, et la cathode (patte    la plus courte) est connectée à la terre.

**TP2 Blink:**

  On utilise la bibliothèque Johnny-Five pour contrôler une LED connectée au pin 10 d'une carte Arduino via un ordinateur. Pour l'utiliser, vous devez installer Johnny-Five en tant que dépendance dans votre projet Node.js.

  Une fois le programme exécuté, une connexion sera établie avec la carte Arduino (connectée au port COM6) et la LED connectée au pin 10 commencera à clignoter avec des périodes d'allumage et d'extinction de 500ms.

Ce code peut être modifié pour contrôler d'autres composants électroniques connectés à la carte Arduino en utilisant différentes méthodes disponibles dans la bibliothèque Johnny-Five.

** TP3 SmartHouse Project avec Johnny-Five et Express :**

Installation:
Cloner le projet : git clone https://github.com/ZaydELMEZOUARI/IOT-M2TIW.git
Installer les dépendances : npm install

1)Fonctionalité Control Led :
  Utilisation de control Led:
    -Connecter la carte Arduino à l'ordinateur
    -Lancer le serveur : node control-johnny.js
    -Ouvrir un navigateur web et accéder à l'adresse http://localhost:3000
    -Cliquer sur le bouton "Automatic" pour allumer la LED automatiquement en fonction de la luminosité
    -Cliquer sur le bouton "Manual" pour allumer la LED manuellement

  Configuration de control Led:
    -Modifier le port de la carte Arduino : const board = new five.Board({ port: 'COM7' });
    -Modifier le pin de la LED : led = new five.Led(13);
    -Modifier le pin du capteur de luminosité : pin: 'A0'

2)Fonctionalité Contrôle de lumière automatique basé sur l'heure du lever et du coucher du soleil :

   On utilise l'API sunrise-sunset pour récupérer l'heure du lever et du coucher du soleil en fonction de la position de l'utilisateur puis cette information est utilisée pour allumer ou éteindre automatiquement la lumière.

  Les procedures:
    -Récupération de la position actuelle de l'utilisateur en utilisant la géolocalisation
    -Appel de l'API sunrise-sunset pour obtenir l'heure du lever et du coucher du soleil pour la position de l'utilisateur
    -Comparaison de l'heure actuelle avec l'heure du lever et du coucher du soleil pour décider si la lumière doit être allumée ou      éteinte automatiquement
    -Envoi d'une requête à un serveur pour contrôler la lumière en fonction de l'heure de la journée.

   Comment utiliser:
    -Autorisez la géolocalisation dans votre navigateur si cela est demandé.
    -La lumière s'allumera ou s'éteindra automatiquement en fonction de l'heure actuelle et de l'heure du lever et du coucher du        soleil pour votre position.

3)Fonctionalité affichange des données de capteur :

   On utilise D3.js pour créer un graphique en temps réel qui affiche les données des capteurs. Les données sont récupérées toutes les 500 millisecondes depuis une URL locale (http://localhost:3000/sensor) et affichées dans un graphique en temps réel.

  Utilisation :
    -Importez D3.js via la CDN de jsDelivr.
    -Définissez les constantes coords, POINTS et MAX pour configurer le graphique.
    -Configurez les paramètres du graphique tels que la largeur et la hauteur.
    -Utilisez la fonction random() pour générer des données de test.
    -Utilisez la fonction draw() pour dessiner le graphique à partir des données fournies.
    -Utilisez la fonction setInterval() pour récupérer les données depuis l'URL et mettre à jour le graphique.


4) Fonctionalité commutateur de jour et de nuit :

  En utilisant library React qui permet de basculer entre le mode jour et le mode nuit en appuyant sur un bouton on a créer une interface utilisateur composée de trois composants React: Switch, Toggle et Button. Le composant Switch gère l'état actuel de l'application et modifie la propriété "time" en fonction de l'état actuel. Il a également un gestionnaire de clics qui change l'état de "time" de "nuit" à "jour" et vice versa. Le composant Toggle est un bouton qui est cliquable. Il prend deux propriétés, onClick et time, qui sont utilisées pour gérer l'interface utilisateur et pour indiquer l'état actuel. Le composant Button est le bouton visuel qui est affiché à l'utilisateur.

  Le reste du code est destiné à l'animation SVG, qui montre une transition en douceur entre le soleil et la lune lorsque le commutateur est activé. Il utilise le plugin MorphSVG de Greensock pour animer la forme SVG en fonction du chemin morphable.

Instructions d'installation et d'utilisation:

  -Installez React sur votre machine si ce n'est pas déjà fait.
  -Accédez à "http://localhost:3000/" dans votre navigateur pour afficher l'application.
  -Cliquez sur le bouton pour basculer entre les modes jour et nuit.









