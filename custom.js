const fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const json = {
   "response":
      [
         {
            "element": "div",
            "id": "james",
            "children":
               [
                  {
                     "element": "h1",
                     "id": "bob",
                     "innerHTML": "bobs content",
                  },
                  {
                     "element": "h2",
                     "id": "rob",
                     "innerHTML": "robs content",
                  },
                  {
                     "element": "p",
                     "innerHTML": "some random text",
                  },
               ],
         },
         {
            "element": "div",
            "id": "alex",
            "innerHTML": "this is a test message in a div box",
         },
      ]
}
var parent = '<div>$DIV$</div>'
// var parent = fs.readFileSync('./div.txt', 'utf8')
// fs.writeFileSync('./output.html', contents)
console.log(parent.replace('$DIV$', 'samin'))
function createElementsFromJSON(json, parent) {
   for (var i in json) {
      var object = json[i];
      let obj = '<div>$DIV$</div>'
      // console.log(parent)
      // for (var tag in object)
      //    if (tag != "children" && tag != "element")
      //       obj.setAttribute(tag, object[tag]);
      parent = parent.replace('$DIV$', obj)

      if (typeof (object.children) == "object")
         createElementsFromJSON(object.children, obj);
   }
}
createElementsFromJSON(json.response, parent)

setTimeout(() => { console.log(parent) }, 3000)