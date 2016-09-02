<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/redirect
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/redirect">
    <img src="https://img.shields.io/npm/v/@rill/redirect.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/redirect">
    <img src="https://img.shields.io/npm/dm/@rill/redirect.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

Simple redirect setting middleware for Rill. Supports overriding status with easy defaults.

# Installation

```console
npm install @rill/redirect
```

## Example

```js
const app = require('rill')()

// Redirect all "/from" to "/to".
app.get('/from', redirect('/to'))
app.get('/from', redirect('/to', 302))

// Same as.
app.get('/from', ({ res })=> res.redirect('/to'))
app.get('/from', ({ res })=> {
	res.redirect('/to')
	res.status = 302
})

// Will not override existing redirects.
app.get('/from', redirect('/a'))
app.get('/from', redirect('/b')) // b gets skipped.
```

---

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
