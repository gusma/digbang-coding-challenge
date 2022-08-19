# 🚀 Digbang Coding Challenge || Gustavo Malamud

This project was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then modified to taste. It's based on the requirements of the [Digbang Coding Exercise](https://github.com/digbang/ejercicio-react).

This particular exercise was performed by [Gustavo Malamud](https://github.com/gusma)

## 💻  Stack Used

The following technologies were used for this app:
- Create React App (previously mentioned)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [UseBetween](https://www.npmjs.com/package/use-between) as a state sharing tool (ContextAPI would probably have been overkill for this)
- [SCSS](https://sass-lang.com/) for CSS pre-processing and variable declaration,
- [BEM](http://getbem.com/) for some if not most of the CSS declarations,
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for layout distribution,
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) (a little bit since our AppContainer squealed a little bit over the contents of the `{children}` element)
- A couple of helper functions to shape and format the currency inputs better and do some calculations,
- [React-Currency-Format](https://www.npmjs.com/package/react-currency-format) as our handler for currency based inputs,
- And a little bit of [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for validating proper functioning and cleanliness of the raw code.
- [RC Slider](https://www.npmjs.com/package/rc-slider) as per the project's requirements.

## 💡 Guiding Idea

The idea behind the structure of this app was to keep the application as compartimentalized as possible, while maintaining some kind of bond within the components in the shape of state being shared for two main elements: the credit amount balance, and the interval it would be spread in. 

## ⚡ To run this project

Please use this with Yarn. Not that this wouldn't work with NPM, we're just better friends with Yarn on this exercise.

To run, clone this repo, and first, run:

### `yarn install`

and then:

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## ✈️ Deployment 

This project was deployed to Vercel.

## ✏️ To-Dos

As a part of this project and due to time constraints I would have like to do a couple more things with this, namely:
- Unit testing through Jest+Enzyme
- E2E or Integration Testing through Cypress 
- Move this to SSR through NextJS.
- Ellaborate a mobile friendly PWA.
- Refactor to Typescript.