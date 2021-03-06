# Tapos na ba ang COVID-19 sa Pilipinas? [![CodeFactor](https://www.codefactor.io/repository/github/garett09/tapos-na-ba-ang-covid-ph/badge)](https://www.codefactor.io/repository/github/garett09/tapos-na-ba-ang-covid-ph)

A web app which keeps track of the current COVID-19 situation in The Philppines and gives a a very clear answer to the question:

`Tapos na ba ang COVID19?`

Or for the non-Filipino readers:

`Is COVID19 over?`

## Where can I find the app?

You can find the app here: [https://taposnaba.software/](https://taposnaba.garett09.tech)

## Where does the data come from?

The data for the number cards comes from [Worldometers](https://www.worldometers.info/coronavirus/) and the data for the chart come from
[Johns Hopkins University](https://www.jhu.edu/). Both datasets are retrieved via the [disease.sh API](https://github.com/disease-sh/API)

## How is the app built?

The front end is made with Vue.js and Bootstrap for the styling. The backend is a super simple Express server which really only serves the html entrypoint for Vue.js.

## Why did you build this?

It's better to practice than do nothing about the situation in your country.

## To-Do's

- Do well in school
- Finish school

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
