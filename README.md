# Obsido
Obsido is a web application for budgeting/investing. Obsido means "invest" in latin. Users can input any amount of money they spend and see that data dynamically in visually dynamic charts. This project was made with React, Redux, Chart.js, Semantic-UI, and Rails API back end. 

![Obsido](https://github.com/DevDave0/obsido-frontend/blob/master/Screen%20Shot%202020-10-06%20at%2012.42.16%20PM.png)

## Project Details 

Obsido is a web application that allows a user to:
1. Log any amount of money a user spends in 6 different categories.
2. Have the amounts of money spent shown in a dynamic doughnut chart. 
3. Click on the categories within the doughnut chart and see more specific spending within the category. 
4. See a spending log of the current user of every amount inputed in each category. 
5. Delete a transaction from the spending log. 
6. See information about how the user spends money on cards that changes with spending.
7. See daily spending in a line graph. 

Libraries used: 

* React
* React-Router-Dom
* Redux and React-Redux
* Chart.js
* Semantic-UI
* Moment.js

Video demo link: https://youtu.be/SYQzvOHRVDw

Project backend: https://github.com/DevDave0/obsido-backend

## Installation Instructions

1. Fork the front and back end repositories and run `git clone <repository link here>`.
2. Run `bundle install` on the backend repository to install the required gems. 
3. Must have PostgreSQL installed. 
4. Run `rails db:create` then `rails db:migrate` to create database and migrate schema. 
5. Run `rails s` to start up the backend server. 
6. Run `npm install` on this repository to install all libraries and dependencies. 
7. Run `npm start` to run the server. 

## Contact

If you want to contact me, you can reach me at dbchung24@gmail.com

## License

This project uses the following license: MIT License
