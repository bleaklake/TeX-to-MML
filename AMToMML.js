
const { AsciiMath } = require('mathjax-full/js/input/asciimath.js');
const { HTMLDocument } = require('mathjax-full/js/handlers/html/HTMLDocument.js');
const { liteAdaptor } = require('mathjax-full/js/adaptors/liteAdaptor.js');
const { STATE } = require('mathjax-full/js/core/MathItem.js');
const { SerializedMmlVisitor } = require('mathjax-full/js/core/MmlTree/SerializedMmlVisitor.js');

function AMToMML(str) {
    const INLINE = false;

    const asciimath = new AsciiMath();

    const html = new HTMLDocument('', liteAdaptor(), { InputJax: asciimath });

    const visitor = new SerializedMmlVisitor();
    const toMathML = (node => visitor.visitTree(node, html));

    return toMathML(html.convert(str, { display: !INLINE, end: STATE.CONVERT }))
}

module.exports = AMToMML;