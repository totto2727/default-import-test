# default import test

Don't use default export when publishing libraries!

Especially if you publish with CommonJS, never!

Node.js and Deno share the same behavior, but Bun is different!

It is also not recommended simply because of its non-intuitive behavior!

## Node.js

```txt
import Esm
[Function: esm_default]
default!

import { default as Esm2 }
[Function: esm_default]
default!

{ default: [Getter] }
import Cjs -> Cjs()
not default...

import Cjs -> Cjs.default()
default!

{ default: [Getter] }
import { default as Cjs2 } -> Cjs2()
not default...

import { default as Cjs2 } -> Cjs2.default()
default!

{ default: [Function: remarkEmbedder] }
import Cjs3 -> Cjs3()
not default...

import Cjs3 -> Cjs3.default()
@remark-embedder/core loaded!

{ default: [Function: remarkEmbedder] }
import { default as Cjs4 } -> Cjs2()
not default...

import { default as Cjs4 } -> Cjs2.default()
@remark-embedder/core loaded!!
```

## Bun

```txt
import Esm
[Function: esm_default]
default!

import { default as Esm2 }
[Function: esm_default]
default!

[Function: esm_default]
import Cjs -> Cjs()
default!

import Cjs -> Cjs.default()
not default...

[Function: esm_default]
import { default as Cjs2 } -> Cjs2()
default!

import { default as Cjs2 } -> Cjs2.default()
not default...

[Function: remarkEmbedder]
import Cjs3 -> Cjs3()
@remark-embedder/core loaded!

import Cjs3 -> Cjs3.default()
not default...

[Function: remarkEmbedder]
import { default as Cjs4 } -> Cjs2()
@remark-embedder/core loaded!

import { default as Cjs4 } -> Cjs2.default()
not default...
```

## Deno

```txt
{ default: [Function: remarkEmbedder] }
import RE -> RE()
not default...

import RE -> RE.default()
@remark-embedder/core loaded!

{ default: [Function: remarkEmbedder] }
import { default as RE2 } -> RE2()
not default...

import { default as RE2 } -> RE2.default()
@remark-embedder/core loaded!
```
