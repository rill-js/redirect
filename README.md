# Rill Redirect
Simple permanent redirect middleware for Rill.

# Installation

#### Npm
```console
npm install @rill/redirect
```

## Example

```js
// Redirect all "/from" to "/to".
app.get("/from", redirect("/to"));
app.get("/from", redirect("/to", 302));

// Same as.
app.get("/from", ({ res })=> res.redirect("/to"));
app.get("/from", ({ res })=> {
	res.redirect("/to");
	res.status = 302;
});
```

---

### Contributions

* Use gulp to run tests.

Please feel free to create a PR!
