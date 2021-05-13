# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Projet : Mise en place du site Web d'une agence
  
Mise en place du site Web d'une agence
1. Introduction
Suite à un entretien, une agence de développement a procédé à ton embauche. Bien joué ! Après quelques mois avec eux, ils te font part de leur envie de refaire leur site Web, et tu es en charge de son prototypage.

Ton agence veut prendre soin des yeux de ses clients, et aimerait donc qu'il y ait un moyen de passer d'un thème clair à un thème sombre rapidement. La classe 😎

2. La demande
2.1. Les pages
Le site Web est composé de 3 pages :

Home, l'URL étant /
L'agence, l'URL étant /about
Projets, l'URL étant /works
Il te faudra donc mettre en place une barre de navigation, contenant ces 3 liens. Pour le texte, tu peux y mettre du Lorem Ipsum : l'important étant de comprendre comment faire marcher l'application. Le site étant un prototype, le design n'a pas besoin d'être travaillé si tu n'as pas le temps.

2.2. Le changement de thème (jour / nuit)
En haut à droite, dans la barre de navigation, un bouton permet de passer du thème clair au thème sombre, et inversement, d'un clic.

Par défaut, on va utiliser le thème clair. Mais quand on change de thème, le choix sera enregistré dans le localStorage. Ainsi, quand l'utilisateur reviendra sur le site, celui-ci utilisera le thème qui avait été choisi lors de la dernière visite.

2.3. La page Projets et les études de cas
L'objectif de la prochaine partie est de mettre en place un routing dynamique pour accéder à des études de cas qu'a fait l'agence.

L'agence a choisi de montrer 3 études de cas qu'elle a réalisé pour ses clients. Les clients sont nommés Platon, Solane et Sedal.

La page "Projets", trouvable à l'URL /works est composée de liens vers ces études de cas.

Sur cette page, on peut trouver 3 blocs, chacun composé du titre de l'étude de cas et du lien pour accéder à l'étude. Si l'agence ajoute une quatrième étude de cas, automatiquement, un titre et un lien menant vers cette 4ème étude s'ajoutera ici.

Les routes sont constituées comme ceci :

/works/clientname-study-case
Par exemple, pour aller sur l'étude de cas du projet Sedal, la route à utiliser est /works/sedal-study-case. Il va donc falloir que tu crées un composant StudyCase qui affiche le contenu de l'étude de cas, en fonction du lien cliqué par l'utilisateur.

Les textes des pages et des études de cas sont donnés ci-dessous (au point 4). Ils sont en Markdown, mais si tu souhaites les stocker d'une autre manière pour les afficher, tu le peux.

3. Le rendu attendu
Le rendu attendu est un site Web fait en React contenant 3 pages ("Home", "L'agence", et "Projets").

Les composants créés seront des function components, et on utilisera react-router pour gérer le routing.

3 autres pages sont attendues (Platon, Solane et Sedal), une pour chacune des études de cas. Comme tu peux t'en douter, ces 3 pages sont en fait un seul et même composant, dans lequel on affiche différentes données en fonction de l'URL. C'est donc du routing dynamique.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
