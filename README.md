# WebProgS2022
Classroom coding for the Web Programming Course Spring 2022

# Node Express Server

The instructions bellow are to help you with the back-end Node Express.

## Installing the Components

To install all the necessary components for this project, you need to use the following:

```
npm install
```

This command will look over the packages.json file and install all modules listed there. Therefore, it is a good idea to always keep you packages.json up to date.

## Running Node Express server

To run the most current version of our Node.js Express server just type the following in a command/terminal in the folder of your application.

```
node Server.js
```

If the server is executing successfull you will see a message like "Server Running on localhost:4000...". The most common errors that prevent from running this server are:
- Not installing the components before running the server. Just run `npm install` to fix it.
- The port is already in use by another program. In this case, just changed the port in the `.env` file.

## Testing and Coverage

To run tests and display coverage in this repository, all you need to do is use the command:
```
npm test -- --coverage
```

To configure tests in your own repository you need to:
- Install Jest as a module in your Node Express: `npm install jest` on the root folder of your application.
- Add the test script in your `packages.json`file (slide 23 of Good Practices, or just look at the file in this repo).

# React

Our React environment is different from our Node Express server. Both needs to comunicate and work together to compose our website, but they are separate. In this repo (and the classroom examples), we are using the `view` folder for our React environment. Everyhting inside `view` is related to React, everything outside of it belongs to our Node Express server.

## Setting the Current Folder

Every command you type related to React must be done inside our React folder, in this repo it means the `view` folder. Therefore, before running any command make sure your current folder is set to `view`. If you are in the root aplication folder just type:
```
cd view
```

## Running React

React will automatically run the code inside `index.jsx` and inject it into `index.html`. To run React just type the following in the view folder:
```
npm start
```

Your react webpage should ran on `localhost:3000`

## Deploying React

To deploy our React web page to be used in a real web server, we need to execute the following command:
```
npm run build
```

The above commnad will create or replace a folder called `build` which will contain your 'compiled' website React front-end. The Node Express server in this repo is already configure to watch the same folder and serve those files to client requests. Therefore, by building your React code, it will automatically deploy those files into our server.




