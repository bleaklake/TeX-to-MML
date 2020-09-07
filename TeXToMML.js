const { TeX } = require('mathjax-full/js/input/tex.js');
const { HTMLDocument } = require('mathjax-full/js/handlers/html/HTMLDocument.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { STATE } = require('mathjax-full/js/core/MathItem.js');
const { SerializedMmlVisitor } = require('mathjax-full/js/core/MmlTree/SerializedMmlVisitor.js');
const { AllPackages } = require('mathjax-full/js/input/tex/AllPackages.js');

function TeXToMML(str) {
    const INLINE = false, packages = AllPackages.filter((name) => name !== 'bussproofs');

    const tex = new TeX({ packages });

    const html = new HTMLDocument('', liteAdaptor(), { InputJax: tex });

    const visitor = new SerializedMmlVisitor();
    const toMathML = (node => visitor.visitTree(node, html));

    return toMathML(html.convert(str, { display: !INLINE, end: STATE.CONVERT }));
}

module.exports = { TeXToMML };
