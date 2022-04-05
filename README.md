# gv-angular-challenge

### Prerequisites

- Install git
- Follow the [Angular Setup Guide](https://angular.io/guide/setup-local) if you do not already have Node.js, NPM, Angular CLI, etc, installed

### Install / Setup

- Clone/download this repository to your computer
  - use this command to clone the repository in terminal: `https://github.com/mobilefirstdev/gv-angular-challenge.git`
  - or click the green 'Code' button and choose 'Download ZIP', and unzip after downloading
- In Terminal, navigate to the location of the repository
- Use this command to install the dependencies: `npm install`
- Then use this command to start the local server for development: `ng serve`
- Open your web browser, and navigate to http://localhost:4200/

### Goals

This is a simple Angular app that displays data in a table.
The angular components (such as the table) use a library called [Angular Material](https://material.angular.io/).
The data comes from an api called [FruityVice](https://www.fruityvice.com/).

1. Add a 'Carbohydrates' column to the data table
   - Add another column at the end of the table for the carbohydrate data, which is found on the fruit response from the api
   
2. Add filtering and sorting methods
   - Add a text input above the table
   - Filter the table rows based on the text in the input
   - Add a dropdown input beside the text filter input (above the table) with the following options:
     - 'Name Ascending'
     - 'Name Descending'
     - 'Carbohydrates Ascending'
     - 'Carbohydrates Descending'
   - Sort the data in the table based on the selected sort option

3. Additional Styling
   - Style the table rows to alternate background colors between #FFFFFF and #FAFAFA
   - The text in the last column should be right-aligned
   - If the 'calories' column value is less than or equal to 50, then style only the calorie cell font color to #31BF5D
   
**Bonus Goal** 
- When you are ready, commit your changes to a branch
- Submit a pull request with your changes to the github repository

### Helpful Resources

- [FruityVice Api Documentation](https://www.fruityvice.com/)
- [Material Angular Documentation](https://material.angular.io/components/categories)





