# Tasukete - an app for helping new comers to Japan.

*This was developed during my time as student at Code Chrysalis*

<p align="center">
    <img src="public/asset/logo.png" width="150px">
</p>

**Tasukete** is a fullstack group project application, using the [Stripe](https://stripe.com/en-jp) API and simple checkout system integration.
    This project gave us the opportunity to work with a real client and to undertake the challenge of building an MVP based on an API from
    a real company. You can find the deployed version at: <http://tasukete-app.herokuapp.com/>

## Made with
* [React](https://reactjs.org/) for the Frontend
* [react-router-DOM](https://www.npmjs.com/package/react-router-dom) 
* [Express](https://expressjs.com/) for the Backend
* [Knex](http://knexjs.org) Query Builder
* [Stripe REST API](https://stripe.com/docs/api) API Queries
* [Postgres](https://www.postgresql.org) Database

## Overall repo structure <img src="https://user-images.githubusercontent.com/27636896/123047418-3bb66b80-d438-11eb-9de2-9f74e3685dd4.png" width=4% height=4%>
* Configuration files are in the `root` folder.
* In the `migrations` folder are located all the migrations for the PostgresSQL Database
* In the `server` folder are located all the files necessary to the back-end node server.
* In the `src` folder are located all the source files related with the `client`

## Installation <img src="https://user-images.githubusercontent.com/27636896/123047679-8a640580-d438-11eb-8518-164681ebc73b.png" width=3% height=3%>

```
npm install 
```

### Create a .env

```
DB_NAME= // your database name
DB_USER= // postgres username
DB_PW=// your postgres password
```

### run

```
npm run start
npm run hack:client
```

## Screenshots

![Screen Shot 2021-06-22 at 8 12 53](https://user-images.githubusercontent.com/66731438/122840234-ac745f80-d334-11eb-8f91-0ad031e49e3f.png)
![Screen Shot 2021-06-22 at 8 14 05](https://user-images.githubusercontent.com/66731438/122840239-ada58c80-d334-11eb-877a-f255e36f398b.png)
![Screen Shot 2021-06-22 at 8 19 54](https://user-images.githubusercontent.com/66731438/122840240-ae3e2300-d334-11eb-8d96-0b2aa1552dd5.png)
![Screen Shot 2021-06-22 at 8 20 12](https://user-images.githubusercontent.com/66731438/122840241-af6f5000-d334-11eb-8fbd-ead8867c37f1.png)


## Contributing <img src="https://user-images.githubusercontent.com/27636896/123049411-7ae5bc00-d43a-11eb-838e-8656bd1fcc00.png" width=5% height=5%>

Should you want to contribute:
* please fork and clone the repo on your machine
* Create an "issue" to describe what you want to work on
* Submit a pull request.

Many thanks!

## Authors

* [Evan](https://github.com/Evomatic)
* [Julie](https://github.com/dawndarkness)
* [Chris](https://github.com/Chris-Ack)
* [Gaetan](https://github.com/GaetanKarst)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Helpful links

* Thanks to Stripe for letting us test their API during this project! <https://stripe.com/en-jp>
