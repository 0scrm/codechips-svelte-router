export { default as page } from "page";
export { default as Router } from "./Router.svelte";
export { default as Route } from "./Route.svelte";
export { default as NotFound } from "./NotFound.svelte";

export const redirect = (path) => page.redirect(path);
