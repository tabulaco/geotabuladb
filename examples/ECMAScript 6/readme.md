# ECMAScript 6

ECMAScript 6 is the new standard of JavaScript. It brings to JS a lot of useful features, specially:
- [Classes](http://www.2ality.com/2015/02/es6-classes-final.html) with attributes and methods.
- Native library import/export support through [modules](http://www.2ality.com/2014/09/es6-modules-final.html).

Right now most of this features are being implement in both browsers and runtime environments like NodeJS, so we can not just start typing ES6 code and run it. However we can write ES6 code and compile it to ES5.1 with tools like [Babel](https://babeljs.io/) and [Browserify](http://browserify.org/).

In this example we are going to rewrite the Geotabula's Getting Started example using this tools and some ES6 syntax to import libraries and access the constants available in the globals.js file. This tutorial is based in the [ECMAScript 6 Tutorial](http://ccoenraets.github.io/es6-tutorial/setup-environment.html).

## Babel
Babel is a JavaScript compiler. What it does is to transform our ES6 code in ES5 compatible code, so it can be executed in the current versions of NodeJS and web browsers.
```
sudo npm install -g babel
```

## Browserify
Browserify is an client-side module management system. With Browserify is possible to use *require()* calls in the same way we use it with NPM and NodeJS.
```
sudo npm install -g browserify
```

# Server-Side
In the server-side we are going to use "active transpiling". This means that our ES6 code will be compiled by Node on run time. The advantage of work this way is that we don't need to compile each ES6 JS file in order to run the project.
```
### Create project folder
mkdir -p [pathToProjectFolder]
cd [pathToProjectFolder]
### Install Server-Side Modules
npm install geotabuladb express socket.io
```

To run Node in this way we need a bootstrap file that loads the required Babel modules. To run the project we will call the bootstrap file instead of the main index.js file:
```
nodejs bootstrap.js
```

# Client-Side
For the client-side we are going to use Browserify + Babel to compile our ES6 code to ES5 and include all the required libraries in one single JS file. First we need to install the client-side required libraries:
```
npm install leaflet leaflet-providers socket.io-client
```

We are going to modify our index.html file to include only the Browserify generated file:
```
    .<head>
         <meta charset="utf-8">
         <title>GeoTabula</title>
         <link rel="stylesheet" href="css/map.css"/>
         <script src="geotabula.ES5.js"></script>
         <link rel="stylesheet" href="css/viewer.css"/>
         <link rel="stylesheet" href="css/lib/leaflet.css"/>
     </head>
```

# Compilation and run

```
# Create a symlink for the client modules (to solve the 'module not found' issue...)
cd node_modules
ln -s ../client/modules .
# Compile the client-side code:
browserify client/geotabula.js -t babelify -o ./client/public/geotabula.ES5.js
# Excecute the app
nodejs bootstrap.js
```
