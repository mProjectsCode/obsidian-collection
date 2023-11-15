---
title: Type Script and Miscellaneous Resources
description: All the other things you need to write plugins.
---

## TypeScript

TypeScript is a superset of JavaScript that adds type annotations and other features to JavaScript. It is the language used to write Obsidian plugins.
You technically don't need TypeScript to write Obsidian plugins, but it is highly recommended.

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScripts Website](https://www.typescriptlang.org/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### Understanding JavaScript

- Async/Await
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
  - The JavaScript Event Loop
    - [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://youtu.be/8aGhZQkoFbQ)
    - [Jake Archibald on the web browser event loop, setTimeout, micro tasks, requestAnimationFrame, ...](https://youtu.be/cCOL7MC4Pl0)
- JavaScript Engines
  - [Performance tips for JavaScript in V8](https://web.dev/articles/speed-v8)

## Surrounding Tools

### Build Systems

You need a build system to compile your TypeScript code into JavaScript code and bundle it into a `main.js` file that Obsidian can load.

There are a multitude of build systems out there, but the two most popular for Obsidian plugins are [Esbuild](https://esbuild.github.io/) and [Rollup](https://rollupjs.org/guide/en/).
The [sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin) comes with Esbuid set up since October 2021, but a lot of older plugins use Rollup.

### Eslint

Eslint is a linter for JavaScript and TypeScript. Linters help you write better code by pointing out potential problems and enforcing a consistent style.
The [sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin) comes set up with a basic Eslint configuration, but I recommend using a stricter configuration such as the one used by [Create T3 App](https://github.com/t3-oss/create-t3-app/blob/main/.eslintrc.cjs).
An example of a plugin that used an Eslint configuration similar to the one used by Create T3 App is [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) with it's [Eslint configuration](https://github.com/mProjectsCode/obsidian-meta-bind-plugin/blob/master/.eslintrc.cjs).

### Prettier

[Prettier](https://prettier.io/) is a code formatter that helps you write consistent code. I highly recommend using it, especially as it helps contributors to conform to the code style of your plugin.

### Testing

See [Testing Frameworks and Utilities](/obsidian-collection/plugin-dev/testing/frameworksandutilities/).



