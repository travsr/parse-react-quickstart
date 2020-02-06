# parse-react-quickstart

A project for quickly creating and deploying a MongoDB/Express/ParseServer/ReactJS app. 

I have found this tech stack to be extremely versatile, and many of my projects have followed this same basic template. This project streamlines setting up a basic [Parse Server](https://github.com/parse-community/parse-server), [Parse Dashboard](https://github.com/parse-community/parse-dashboard) and a ReactJS App.

This repository has allowed me to save a significant amount of time with first-time setup when starting new projects and I hope it can be helpful to others as well.

- [parse-react-quickstart](#parse-react-quickstart)
- [Installation](#installation)
- [Running Locally](#running-locally)
  - [Local Node + Local MongoDB Server](#local-node--local-mongodb-server)
  - [Local Node + Remote MongoDB Server](#local-node--remote-mongodb-server)
- [ReactJS App Development](#reactjs-app-development)
  - [Development](#development)
  - [Production](#production)
- [Cloud Code](#cloud-code)
- [Parse Dashboard](#parse-dashboard)
- [Deployment](#deployment)
  - [Heroku](#heroku)
  - [Others](#others)
- [License](#license)
  - [MIT](#mit)

# Installation

Clone

```bash
git clone https://github.com/travsr/parse-react-quickstart.git
```

Use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install the dependencies.

```bash
npm install
```

# Running Locally
You can run your project locally for development purposes. You have two options when doing so:

## Local Node + Local MongoDB Server
Run Node server and the MongoDB locally. Note that you must have [MongoDB installed](https://docs.mongodb.com/manual/installation/) on your machine.

Start the mongo daemon and start the server.
```bash
mongod && npm start
```

By default, the server will connect to a local MongoDB instance at `mongodb://localhost:27017/dev`

## Local Node + Remote MongoDB Server

The second option is to specify a remote MongoDB URI in the enviroment variables `/.env` file. The Parse Server will try to connect to this DB, but the server itself will run locally.
```
MONGODB_URI=mongodb://path/to/your/db
``` 
Start the server
```bash
npm start
```

# ReactJS App Development
A basic ReactJS app template is provided that by default is served from the `/` directory. Source files for this template are found in the `/src` folder. [Parcel](https://parceljs.org/) is the bundler I have chosen, but it's possible to use Webpack or another bundler if you so choose.

## Development
When working with the ReactJS source files in the `/src` directory, you must use the bundler for the changes to be applied. In development, the following script can be run:
```bash
npm run webapp-dev
```

## Production
When you are ready to create a production build of your ReactJS app, the following script can be run:
```bash
npm run webapp-build
```

# Cloud Code
By default, your Parse cloud code can be defined in the `/cloud` directory.

[Parse Cloud Code Reference](https://docs.parseplatform.org/cloudcode/guide/)

# Parse Dashboard
This project is configured to run an instance of the [Parse Dashboard](https://github.com/parse-community/parse-dashboard). When the server is running, it can be accessed from the `/dashboard` route. See `index.js` for more configuration options.

# Deployment

## Heroku
I recommend using Heroku and following [this guide](https://devcenter.heroku.com/articles/deploying-a-parse-server-to-heroku) to deploy your project.

## Others
There are many other hosting options when it comes to deployment, it is a matter of finding the right one that fits your needs. From a high level, this is what you need:

1. A hosting service (such as Heroku or DigitalOcean) that is capable of running an Express Server. This is where you upload your project.
2. A database host that can run your MongoDB instance. 

Refer to the [Parse Server docs](https://github.com/parse-community/parse-server#running-parse-server-elsewhere) for more info.


# License
## [MIT](https://choosealicense.com/licenses/mit/)