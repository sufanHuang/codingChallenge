## Instructions
1) You are given a JSON file with an array of Objects. Every element can be grouped together using the "type" property.
2) Your job is to import the data and arrange them in a way that the elements are evenly distributed.
3) You then have to create a server using node.js(micro or express) and serve this distribution upon request.
4) Create a frontend using either VanillaJS, React, Angular, Vue or Hyperapp that consumes this distribution and colors all the elements with similar type. For Example, if I click "typeA", it should color all the positions that this type exists at.
5) Provide buttons on the UI for each type so we can toggle between types. All unique types in the data should have buttons on the UI.
6) Sample pictures are in the "outputExamples" folder.
7) You can display the distribution in any similar way possible (get creative). Visualization is upto you (you can use libraries like D3.js).
8) Please add references to all the mathematical formulas or theorms used to achieve these results.
9) If you come up with your own algorithm please explain in brief how, why and when for the algorithm.
10) Create a branch from master and pull request when you're done.
11) Reach out to us if you have any questions and inform us when you're done.
12) Place the Frontend in the root folder "static".
13) Update the README.md file with the instructions on how to test the app.

## Bonus Points
1) If you deploy this app on a cloud(preferably on AWS).

## Notes
1) The output images are just the example visualizations we are expecting to see when we click a type
2) Output images do not necessarily represent even distribution

## Instructions To Test The App
1. Clone to local machine:
````javascript
git clone https://github.com/sufanHuang/codingChallenge.git
````
2. Use this command to build/start/test the project:
````javascript
sh start.sh
````

## Algorithms
1. __shuffleItems()__: used to randomize data on the backend. I created a trueOrFalse() to return a random true/false result. 
    When each item in data is mapped, the result array  ````push```` or ````unshift```` the item, based on the trueOrFalse() result.
    Unit test for this module is in ```/test.js```.
  
2. __getData()__: used in frontend to fetch data from backend using axios.

3. __handleClick()__: used in frontend to display items of the same type. 

4. __getTypes()__ :  used to extract all the existed types from data.  I use ````forEach````
  to loop through data, then ````push```` the types that are unique to the result array.
  
5. __getTypeCount()__: used to count how many items each type has from data. I use ````reduce````
  to get the total count of current type, then use ````map```` on top to loop through each type.
 
6. __getChartData()__: used for visualization using react-chart2. I use [Brad Traversy's reactcharts project](https://github.com/bradtraversy/reactcharts/blob/master/src/components/Chart.js)
   and [react-chartjs-2 documentation](https://www.npmjs.com/package/react-chartjs-2) as reference.
   
## Deployment
* Using AWS S3 : http://codingchallengesufan.s3-website-us-east-1.amazonaws.com/
* Using netlify: https://data-visualization-sufan.netlify.com/
