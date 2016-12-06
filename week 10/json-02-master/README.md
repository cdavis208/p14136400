# Javascript data exercise 02

The first part of this example uses a local web server (check that this is available) to allow your browser to read in a local JSON file, and display the results. If you can't run a local server, use the alternative JSON API source commented in the code.

## Start a local web server

Open a command-line console, `cd` into the directory where your index.html file is, then run one of the following commands (depending on your installed languages):

- Python 2.7: `python -m SimpleHTTPServer`
- Python 3: `python -m http.server`
- PHP (>=5.4): `php -S localhost:8000` 

Wait until the console shows `Serving HTTP on 0.0.0.0 port 8000`, then go to `http://localhost:8000/` in your browser. You can stop the server with `ctrl-C` if you need to later, but your page won't read the JSON if you simply load the file into the browser.

Read more about [running a simple local server](https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally).

## Exercise

The code given uses a local JSON file with the lecturers' names from exercise 01. The JavaScript file includes an [alternative source of JSON data](https://jsonplaceholder.typicode.com/photos), commented-out on line 5. There is far more data (a dummy photo album with placeholder images) than that given in the lecturers' names, and it is arranged differently. See if you can modify the function on line 21 to display some of this data in the HTML file. 

**HINT:** If you just change the link to the new JSON file, the first error you'll see in the console is "Cannot read property 'length' of undefined". This is because the exsiting code is expecting the data to have property strings (in JSON the 'properties' are strings) named 'lecturers', 'firstName', etc. but the new data contains *different property name strings* and the containing array is not 'lecturers'. So use 'title', 'url', 'thumbnailUrl' from '"albumId": 1' to create a 'gallery' of placeholder images.