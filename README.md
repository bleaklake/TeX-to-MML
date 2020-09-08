# tex-to-mml

This MathJax wrapper converts TeX to Mathematical Markup Language (MML). This package doesn't use any webworkers, webviews ; so It can be used for your NodeJS, React and React Native projects.

**This project is still in its early development stages.**

For any bugs, typos, errors, feel free to open an issue on the associated Github repository.

## Installation

```cli
npm install tex-to-mml --save
```

## Examples

### JS

```js
const TeXToMML = require("tex-to-mml");

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const MMLEquation = TeXToMML(myTeXEquation); // returns <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mrow><mi>n</mi> ...
```

### TS

```ts
import TeXToMML from "tex-to-mml";

const myTeXEquation = "\\frac{n!}{k!(n-k)!} = \\binom{n}{k}";

const MMLEquation = TeXToMML(myTeXEquation); // returns <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mrow><mi>n</mi> ...
```

## Documentation

`TeXToMML(equation)` : **string** _The returned Mathematical Markup Language equation_

> `equation` : **string** _The TeX equation_

## Notes

### Useful links

This wrapper is inspired by this project : https://github.com/mathjax/MathJax-demos-node/tree/master/direct.

### Typescript

You **DON'T** have to install any types `@types/tex-to-mml`.
