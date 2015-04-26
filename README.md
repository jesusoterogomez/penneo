# Penneo Data Grid

## Clone the repository
Clone the repository locally or clone your own fork of the repository.
```sh
$ git clone git@github.com:jesusoterogomez/penneo.git # or clone your own fork
$ cd penneo
```

## Installing dependencies

This application's dependencies are managed by [npm](https://www.npmjs.org/) and [Bower](https://www.npmjs.org/), before proceding with the cli commands below, make sure you have [node.js](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

Install [Bower](https://www.npmjs.org/) with: 

```sh
npm install -g bower
```

####Install project dependencies
npm and bower handle the installation of all the dependencies within the project. Check the list of dependencies in `package.json` and `bower.json` in the project root

```sh
$ npm install && bower install
```

####Install Ruby

This project is built with SCSS (Sass + Compass), and the SCSS compilator is built on Ruby, which can't be installed by the dependency manager, Compass runs on any computer that has ruby installed.

Set up the Ruby environment by downloading the appropiate Ruby package for your system below:

http://www.ruby-lang.org/en/downloads/

####Install Compass

Update the ruby system installation and install the Compass SCSS compiler.

```sh
$ gem update --system
$ gem install compass
```

## Running the application

[Grunt](http://gruntjs.com/), the javascript task manager handles tasks for testing, serving and building the application.
Use the code below to build a development version and run the application locally. 

```sh
$ grunt serve
```

Your app should now be running on [localhost:9000](http://localhost:9000/).

####Monitored code changes
All code is being monitored by Grunt's `watch` task and will be reloaded in the browser automatically when a file within the project is edited locally.  

## Testing

To run the unit tests with Karma, using a headless testing browser (PhantomJS), use the following code in the console:
```sh
$ grunt test
```
For demonstration purposes, all unit tests output the description to the console.
