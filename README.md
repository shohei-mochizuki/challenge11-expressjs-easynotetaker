# Challenge 11 - Express : Easy Notetaker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION 
This application enables you to create a list of notes with only a few steps! Go to the webpage and input the information below. You can easily save and delete tasks.
* Title of the note
* Contents (texts)

## TABLE OF CONTENTS
[INSTALLATION](#installation)<br>
[USAGE](#usage)<br>
[LICENSE](#license)<br>
[CONTRIBUTION](#contribution)<br>
[TESTS](#tests)<br>
[SCREENSHOT](#screenshot)<br>
[QUESTIONS](#questions)

## INSTALLATION 
### HEROKU
If you use the application on Heroku, no installation is needed. Go to the webpage directly:
### LOCAL COMPUTER
If you'd like to use the application on your local computer, follow the guidelines below:<br>
This application requires 1.JavaScript, 2.Node.JS (version 16, not the latest) and 3.Node package manager to run. In a blank folder, please put necessary files (please refer to the TESTS section for the details) and open the command line. In the command line, move to this folder and then type "npm install". Make sure that a folder called "node_modules" and a file called package-lock.json are created. This application uses the following libraries:
* express
* uuid

## USAGE 
First, make sure that all the necessary files are in your project folder (if not, refer to the INSTALLATION section). Open command line and move to this folder first. Type "npm start" in the command line and you'll see a  message "App listening at http://localhost:3001 🚀". Go to a web browser and type this URL. It will take you to the landing page. Click the "" button to go to the note section. Once you're in the note section, you can see saved notes on the left side of the page and you can create a new note on the right side of the page. If you'd like to delete a note, click a red bin icon. If you'd like to save a new note, type the title and content (text) of your new note and click the file icon on top right. Click the title of the page to go back to the landing page of this application.

## LICENSE 
MIT:<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the “Software”), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so.

## CONTRIBUTION 
Please feel free to develop this application by forking the GitHub repository and sending me pull requests. You can also contact me.

## TESTS 
### HEROKU
If you use the application on Heroku, no installation is needed. Go to the webpage directly:
### LOCAL COMPUTER
Please copy the following files and folder to your computer and test this application:
```md
.
├── db/db.json
├── helpers/fsUtils.js
├── public/               
|   ├── assets/           
|   |   ├── css/styles.css
|   |   └── js/index.js     
|   ├── index.html         
|   └── notes.html        
├── routes/
|   ├── index.js
|   └── notes.js          
├── package.json
└── server.js  
``` 

## SCREENSHOT
![image](https://user-images.githubusercontent.com/121307266/218576452-db4138b6-1b2f-4dd8-8fca-d94d61a344ab.png)
![image](https://user-images.githubusercontent.com/121307266/218576529-451d26a5-d4e4-4927-a660-dcb25908ab93.png)

## QUESTIONS 
If you have any questions, please feel free to reach out to me!<br>
GitHub page: [https://github.com/shohei-mochizuki](https://github.com/shohei-mochizuki)<br>
Email: [shohei.mochizuki.jp@gmail.com](mailto:shohei.mochizuki.jp@gmail.com)
