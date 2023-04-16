---
title: VuePress 问题
icon: problem
date: 2023-4-12
category: VuePress
tag:
    - VuePress
    - Problem
---

## Node 内存泄漏耗尽

::: danger
致命错误：使用任何 “NPM” 命令时 JavaScript 堆将耗尽内存
:::

```bash
<--- Last few GCs --->

[124370:0x5a07190]   623191 ms: Mark-sweep 880.9 (910.2) -> 871.8 (909.2) MB, 650.3 / 0.0 ms  (average mu = 0.137, current mu = 0.050) allocation failure; scavenge might not succeed
[124370:0x5a07190]   623738 ms: Mark-sweep 879.6 (909.2) -> 871.8 (908.9) MB, 526.0 / 0.0 ms  (average mu = 0.091, current mu = 0.038) allocation failure; scavenge might not succeed

<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xb6e500 node::Abort() [/usr/local/node/bin/node]
 2: 0xa7e632  [/usr/local/node/bin/node]
 3: 0xd47f20 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/node/bin/node]
 4: 0xd482c7 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/node/bin/node]
 5: 0xf25685  [/usr/local/node/bin/node]
 6: 0xf26588 v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/usr/local/node/bin/node]
 7: 0xf36a93  [/usr/local/node/bin/node]
 8: 0xf37908 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/node/bin/node]
 9: 0xf1226e v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/node/bin/node]
10: 0xf13637 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/node/bin/node]
11: 0xef480a v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin) [/usr/local/node/bin/node]
12: 0x12b7daf v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [/usr/local/node/bin/node]
13: 0x16e99f9  [/usr/local/node/bin/node]
error Command failed with signal "SIGABRT".
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

### 解决办法

在 `package.json` 文件中将 `"dev"` 和 `"build"` 参数中添加 `node --max_old_space_size=4096 ./node_modules/vuepress/cli.js` 值

修改前：

```json
  "dev": "vuepress dev docs",
  "build": "vuepress build docs",
```

修改后：

```json
  "dev": "node --max_old_space_size=4096 ./node_modules/vuepress/cli.js dev docs",
  "build": "node --max_old_space_size=4096 ./node_modules/vuepress/cli.js build docs",
```

