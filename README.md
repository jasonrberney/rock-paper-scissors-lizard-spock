# rock-paper-scissors-lizard-spock game using React

This repository contains a game similar to rock-paper-scissors but instead adds two variables - lizard and spock. The app was built using React and Redux. The UI leverages Google's [material-ui](https://material-ui.com/) library that was created to implement Google's Material Design through React components. The project uses webpack for bundling and babel for compiling. The app also uses jest in combination with husky to run a couple simple tests before every commit and push to the github repo. 

The application is hosted online using Firebase and can be viewed here: [https://rockpaperscissorslizards-3e5e2.firebaseapp.com/](https://rockpaperscissorslizards-3e5e2.firebaseapp.com/)

Give it a try! Play to 10 points. The computer randomly generates a choice every time the user makes a selection. If the player or computer wins (meaning it is not a draw) then the score will be appropriately added to the scoreboard. Make sure to click directly on the text in buttons otherwise your click may not register! Good luck!

Rules: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.

Sources - I found a piece of logic ([http://jsfiddle.net/h3TcP/2/](http://jsfiddle.net/h3TcP/2/)) that accomplished how to decide the winner. I expanded upon this function to accomplish the same thing while simultaneously managing my state. This functionality can be found in src/redux/actions/playerActions.js in the playerChooses function, which is also a redux thunk. I also used one of my github repositories for spinning up the application to avoid some of the time it takes to configure the boilerplate code. That repository can be found here [https://github.com/jasonrberney/react-redux-webpack-boilerplate](https://github.com/jasonrberney/react-redux-webpack-boilerplate).

## Starting the dev server

Make sure you have the latest stable version of Node.js installed.

1. `git clone https://github.com/jasonrberney/rock-paper-scissors-lizard-spock.git`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm (or yarn) start`
3. Open [http://localhost:8080](http://localhost:8080)

## Available Commands

- `yarn start` - start the dev server
- `yarn clean` - delete the dist folder
- `npm run production` - create a production ready build in `dist` folder
- `npm run lint` - execute an eslint check
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run coverage` - generate code coverage report in the `coverage` folder

## Production code

Run `npm run production`. The production-ready code will be located under `dist` folder.

## Built With

* [React](https://reactjs.org/) - The JavaScript Framework used
* [Redux](https://redux.js.org/) - The JavaScript State manager used
* [Webpack](https://webpack.js.org/) - The JavaScript bundler
* [Babel](https://babeljs.io/) - The JavaScript compiler
* [Firebase](https://firebase.google.com/) - The hosting service
* [material-ui](https://material-ui.com/) - The UI components
* [Yarn](https://yarnpkg.com/en/) - The package manager used

## Authors

- Jason Berney