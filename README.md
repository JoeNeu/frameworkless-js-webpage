# Frameworkless JS Example Webpage

Example Project for a University Lecture. Based on the Repository [webpack-boilerplate](https://github.com/taniarascia/webpack-boilerplate). Props to [Tania Rascia](https://www.taniarascia.com)

## Installation

Clone this repo and npm install.

```bash
npm i
```

Webpack setup configurations are in the config folder.
```bash
cd config
```
EsLint, Babel and PostCss configurations are in the root folder.

## Usage

### Development server

```bash
npm run start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```
I changed the distribution folder to docs to work with Github Pages. It is only possible to set the entry to /{root} or /docs.

You can view the deploy by creating a server in `docs`. 
```bash
cd docs && http-server
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [Bootstrap](https://getbootstrap.com/)

## Fork

Forked from 
[Tania Rascia](https://www.taniarascia.com) this Repository
[webpack-boilerplate](https://github.com/taniarascia/webpack-boilerplate)

This project is open source and available under the [MIT License](LICENSE).
