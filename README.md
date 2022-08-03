# Welcome to Nice Tapes!
Nice Tapes is my front-end capstone project at NSS. It's a web app designed to allow users to virtually collect vintage VHS tapes (which reflects their physical collection) and share their collections with other Nice Tapes users. This project utilizes JSON database queries to retrieve and manipulate unique data for each user. Data is presented with React/Javascript and stylized with CSS. A major goal for the project was to stylize the app with as little outside resources as possible, as it was
all done from scratch with CSS.

## Full CRUD:
CREATE follow friends and add movies to your collection / add custom titles
READ view your own collection as well as others'
UPDATE your own collection and information for custom titles
DELETE movies from your collection and unfollow friends

Register, Login and Logout functionality

## Stretch Goals:
- integrate external movie database API to eliminate need for local API
- add different ratings for different elements of each movie
- further profile customization
- further styling

### User Stories:
* As a user/collector, I would like the ability to add a movie to my collection if owned movies and be able to view that collection. This is so that I can share my collection with my friends and have an organized view of the movies that I own. It's also nice to show off.

* As a user/critic, I would like to be able to add movies to my collection that might not be well known. This is so that I can still keep up with my collection even if it includes lesser known titles.

* As a user, I would like to choose which information or collections I keep up with on Nice Tapes with some sort of friend feature. This is so I can keep up with only specific people and don't get overwhelmed with people's information I don't particularly care to see.

* As a user, I would like the ability to create a profile page that showcases some of my own information as well as a quote from a movie that I enjoy. This is so that I can give people who are interested a closer look at what my tastes and interests are.

### Project Planning:
[Wireframe](https://miro.com/app/board/uXjVOHzxGgY=/)
[ERD](https://dbdiagram.io/d/62113ed9485e433543e16fe4)

# For the back end:

In the nicetapes/api directory, run: json-server -p 8088 database.json -w

# For the front end:

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.