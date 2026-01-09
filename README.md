# README #

## Team Info:
* Team Number: 23
* Team Name: team-23
* Team Members: 
    * Adam Burnstine - PM: abb424@lehigh.edu
    * Jacob The Losen - Mobile: jwt325@lehigh.edu
    * Kevin Cawood - Frontend: kbc225@lehigh.edu 
    * Louis Marca - Backend: lom225@lehigh.edu
    * Juhi Grover - Admin: jug225@lehigh.edu

## Git Repo:
* URL: https://bitbucket.org/adam-burnstine/team-23-aplication/src/master/ 

## Trello Board:
* URL: https://trello.com/b/EL2wsMZy/project-trello-board 

## Backend URL:
* URL: https://23team.dokku.cse.lehigh.edu

## Description:
* Currently we have a basic premise operating. Ideas can be posted and liked any number of times by anon. users, with only admin users being able to edit and delete ideas.

## Instructions on building and running locally:
*Make sure that you have a compatible development environment set up on your local machine.
*Clone your application's Git repository to your local machine if it's not already there.
*Create a configuration file (e.g., .env) to store environment-specific variables like database connection strings, API keys, and other configuration settings.
*Update or install dependencies Start your application locally using a development server or the appropriate command for your application stack using command java -jar.
*Open a web browser and navigate to http://localhost:port where port is the port number your application is running on

## Instructions on building and running on dokku:
*SSH into your Dokku server and create a new app.
*After your app is created, configure your git repo for pushing to dokku by adding a new "remote". git remote add dokku dokku@dokku.cse.lehigh.edu:2023fa-tutorial-yourUid
*Push your code to the Dokku remote to trigger deployment.
*Once the deployment is successful, you can access your application via the server's IP address or domain name, depending on your Dokku setup.
