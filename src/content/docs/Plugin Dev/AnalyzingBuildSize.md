---
title: Analyzing Build Size
description: Why does my build have it's own gravitational pull?
---

[Fevol](https://github.com/Fevol) shared [this](https://discord.com/channels/686053708261228577/840286264964022302/1170151744488087663) in the Obsidian discord.

With Esbuild, you can easily analyze the generated bundle code and check which source files contribute most to the bundle size using the [`build.metadata`](https://esbuild.github.io/api/#build-metadata) variable.

You can tell Esbuild to output the build stats like this.

```ts
const context = await esbuild.context({
  /* Your Build variables */
  // ... 
  metafile: true
});

let build = await context.rebuild();
console.log(await analyzeMetafile(build.metafile));
process.exit(0);
```

Which provides output that looks like this.

```
  main.js                                                                 884.6kb  100.0%
   ├ src/database/indexer.worker.ts                                       303.4kb   34.3%
   ├ node_modules/localforage/dist/localforage.js                          81.8kb    9.2%
   ├ src/editor/base/parser/node_modules/@lezer/lr/dist/index.js           52.7kb    6.0%
   ├ node_modules/entities/lib/esm/generated/decode-data-html.js           46.1kb    5.2%
   ├ src/ui/pages/ViewPage.svelte                                          42.6kb    4.8%
   ├ node_modules/@lezer/common/dist/index.js                              42.5kb    4.8%
```