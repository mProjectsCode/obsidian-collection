---
title: Examples to Look At
description: Some plugins with good or interesting test setups.
---

- [Obsidian Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)
  - uses Jest
  - vary large test suite, over 3000 tests that take ~2.5 minutes to run
  - uses approval tests
  - uses custom matchers
  - git and github actions integration
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
  - uses Jest
  - large test suite, over 370 tests that take about a minute to run
- [Meta Bind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin)
  - uses Bun Test
  - currently nearly 2000 tests, with lots of loops to test different data combinations
  - uses Happy DOM as the browser environment
  - uses a lot of dependency injection to test internal components