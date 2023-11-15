---
title: Frameworks and Utilities
description: Which framework should I pick?
---

## Frameworks

There are two major testing frameworks that people use, [Jest](https://jestjs.io/) and [Bun Test](https://bun.sh/docs/cli/test).

Notable points about [Jest](https://jestjs.io/) are: 

- Jest is the most used framework among Obsidian plugins and thus there are [many examples](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/How+to+find+examples+of+Jest-based+plugin+tests) to look at
- Jest is slow, it can take multiple seconds just to run a few test
- Jest has some problems with [ES-Modules](https://jestjs.io/docs/ecmascript-modules)

Notable points about [Bun Test](https://bun.sh/docs/cli/test) are:

- Bun Test is relatively new and only a few plugins use it, e.g. [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin)
- Bun Test is fast and this can speed up your development cycle
  - [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) was able to reduce the time it takes for all tests to run 6-8 seconds with Jest to ~200 milliseconds
  - [ParsiNOM](https://github.com/mProjectsCode/parsiNOM) a parsing library with over 1500 tests that I (Lemons or Moritz Jung) authored and maintain went from ~12 seconds with Jest to around 150 milliseconds with Bun Test
- It works well with cjs and esm modules as well as typescript out of the box
- The test API is not 100% complete yet and there are still [some things](https://github.com/oven-sh/bun/issues/1825) missing

Both are viable options and in the end you have to decide on what fits best for your plugin and workflow.

## Other Frameworks

There are other frameworks that people use, but I don't have any experience with them, so I will just list them here.

- Vitest
  - [Zachatoo](https://github.com/zachatoo) said on [discord](https://discord.com/channels/686053708261228577/962362830642905148/1173474875638284328) that he liked how easy it is to set up.

## Utilities

- [Happy DOM](https://github.com/capricorn86/happy-dom) is a JavaScript implementation of a web browser without its graphical user interface. It includes many web standards from WHATWG DOM and HTML.
- [Approval Tests](https://github.com/approvals/Approvals.NodeJS) are a nicer version of snapshot tests