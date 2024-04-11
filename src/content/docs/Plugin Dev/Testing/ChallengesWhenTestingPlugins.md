---
title: Challenges when Testing Plugins
description: Why is testing plugins so difficult?
---

Testing a plugin, which is intended to run in a very specific environment - Obsidian - can be quite challenging.
If you ever tried to test an Obsidian plugin you probably noticed that testing a file that imports something from the Obsidian API causes the test runner to fail (at lease with Jest).
This hurdle can be hard to overcome, but there are some techniques that we can use while building a plugin that makes it a lot easier to test.

## Mocking the Obsidian API

Of course, you can go ahead and mock the entirety of the Obsidian API, but that has its own set of problems.
The major ones are

- the mocks are a lot of work to write
- you have to maintain and update them when the Obsidian API changes
- you are only testing against how you think the Obsidian API works and some of those assumptions can be false, leading to your tests passing but your plugin still being buggy

## Using Dependency Injection and Interfaces

This video explains the idea behind this approach quite well.

https://www.youtube.com/watch?v=J1f5b4vcxCQ

This pattern allows for simply swapping out the adapters of the parts that you don't want to test for bare bones versions.
