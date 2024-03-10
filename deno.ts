import RE from "npm:@remark-embedder/core";
import { default as RE2 } from "npm:@remark-embedder/core";

console.log(RE);

console.log("import RE -> RE()");
if (typeof RE === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not defautl...");
}

console.log();

console.log("import RE -> RE.default()");
if (typeof RE.default === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not defautl...");
}

console.log();

console.log(RE2);

console.log("import { default as RE2 } -> RE2()");
if (typeof RE2 === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not defautl...");
}

console.log();

console.log("import { default as RE2 } -> RE2.default()");
if (typeof RE2.default === "function") {
  console.log("@remark-embedder/core loaded!");
} else {
  console.log("not defautl...");
}
