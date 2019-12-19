const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<div>samin</div>`);
let intermediate = new JSDOM('<span></span>')
console.log(dom.window.document);