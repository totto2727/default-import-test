import Esm from "./esm.mjs";
import { default as Esm2 } from "./esm.mjs";
import Cjs from "./esm.cjs";
import { default as Cjs2 } from "./esm.cjs";
import Cjs3 from "@remark-embedder/core";
import { default as Cjs4 } from "@remark-embedder/core";

console.log("import Esm");
console.log(Esm);
if (typeof Esm === "function") {
  Esm();
} else {
  console.log("not default...");
}

console.log();

console.log("import { default as Esm2 }");
console.log(Esm2);
if (typeof Esm2 === "function") {
  Esm2();
} else {
  console.log("not default...");
}

console.log();

console.log(Cjs);

console.log("import Cjs -> Cjs()");
if (typeof Cjs === "function") {
  Cjs();
} else {
  console.log("not default...");
}

console.log();

console.log("import Cjs -> Cjs.default()");
if (typeof Cjs.default === "function") {
  Cjs.default();
} else {
  console.log("not default...");
}

console.log();

console.log(Cjs2);

console.log("import { default as Cjs2 } -> Cjs2()");
if (typeof Cjs2 === "function") {
  Cjs2();
} else {
  console.log("not default...");
}

console.log();

console.log("import { default as Cjs2 } -> Cjs2.default()");
if (typeof Cjs2.default === "function") {
  Cjs2.default();
} else {
  console.log("not default...");
}

console.log();

console.log(Cjs3);

console.log("import Cjs3 -> Cjs3()");
if (typeof Cjs3 === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not default...");
}

console.log();

console.log("import Cjs3 -> Cjs3.default()");
if (typeof Cjs3.default === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not default...");
}

console.log();

console.log(Cjs4);

console.log("import { default as Cjs4 } -> Cjs2()");
if (typeof Cjs4 === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not default...");
}

console.log();

console.log("import { default as Cjs4 } -> Cjs2.default()");
if (typeof Cjs4.default === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not default...");
}

console.log()