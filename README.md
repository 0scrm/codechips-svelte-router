# codechips-svelte-router
Lightweight Svelte routing solution. Based on this [implementation](https://github.com/codechips/svelte-pagejs) of [page.js](https://github.com/visionmedia/page.js) by codechips.

## Getting started

Pick your favorite package manager:

```bash
$ yarn add -D codechips-router
$ npm i -D codechips-router
```

Edit your `App.svelte` component

```html
<script>
	import { Router, Route } from "codechips-router";
	import {
		Home,
		About,
	} from "views/index.js";
</script>

<main>
	<Router>
		<Route path="/" component={Home} /> <!-- You can pass the component as a prop -->
		<Route path="/about"> <!-- Or add it directly inline -->
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </Route>
	</Router>
</main>

```

## Features

### Adding a custom 404 page

```html
<script>
    import { Router, Route, NotFound } from "codechips-router";
    // ...
</script>
<Router>
    <!-- ... -->
    <NotFound>
        <p>Page not found</p>
    </NotFound>
</Router>
```

### Protected routes

> To be continued...
