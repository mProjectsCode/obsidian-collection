---
title: What to Test?
description: Which parts of my plugin should I test?
---

When setting up automated tests it is very important to decide on which parts to test.
The things you can easily test can depend heavily on your plugin and your architecture.

But generally the following things are things that make sense to test, if you have good separation between the logic part and the part that interacts with the Obsidian API.

- simple helper functions
- complex pieces of logic

Things that usually don't make sense testing are the following.

- ui code
- the adapter/interface layer between the logic and the Obsidian API

## Example

Imagine a plugin that adds a right click menu to a note that will open a modal which shows statistics about the most used words in that note.

The code for that plugin can be split in four components.

1. The code that adds the right click menu and opens the modal component (`2`).
2. The modal that and passes component `4` to component `3` and displays the results of component `3`.
3. The part that analyzes the file for the most used words, it uses `4` as an adapter to read the file and it returns the results of the analysis as an object.
4. The part that calls into the obsidian API reads the file.

Component `1` and `2` are UI code and thus it does not much sense to test them. Besides, they are very simple and mistakes are easy to spot by hand.

Component `4` is just the adapter to the Obsidian API to read a file, so there is not much to test here.

That leaves component `3`, which does not depend on the Obsidian API. It does not care about the caller and file operations are left to component `4` which can easily be swapped for a dummy component.
Thus, it makes a lot of sense to test this component.

## UI Frameworks

A lot of plugins with more complex UIs will reach for UI frameworks like [Svelte](https://svelte.dev/) or [React](https://react.dev/).
Components written in those frameworks are possible to test, but it is easier to extract the logic into a separate plain TypeScript file and test that than testing the component.
In the best case the component only gets its data passed in and then renders that data, and the logic is handled by an external component.