---
title: Why Test Plugins?
description: Why even bother testing Obsidian Plugins?
---

> Why even bother testing Obsidian Plugins?

This is a question often asked, and i have asked it myself as well. But once you start with testing the advantages are pretty clear.

1. You know your code is correct. Tests help you build confidence in your code. 
2. You know that changes and refactoring won't break your code.
3. You are less likely to introduce bugs that might affect your users.

Of course you can achieve part of this with manual testing, but that becomes cumbersome quite quickly. 
So why not tell the computer how to test your code automatically using a testing framework like [Jest](https://jestjs.io/) or [Bun Test](https://bun.sh/docs/cli/test).


