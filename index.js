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
// let contents = fs.readFileSync('./div.html', 'utf8')
// fs.writeFileSync('./output.html', contents)
var parent = new JSDOM('<html><body id = "main"></body></html>').window
var parent1 = parent.document.createElement('div');
function createElementsFromJSON(json, parent1) {
   for (var i in json) {
      var object = json[i];
      // let contents = fs.readFileSync('./div.html', 'utf8')
      var obj = parent.document.createElement(object.element)
      // console.log(obj)
      // for (var tag in object)
      //    if (tag != "children" && tag != "element")
      //       obj.setAttribute(tag, object[tag]);
      parent1.appendChild(obj);

      if (typeof (object.children) == "object")
         createElementsFromJSON(object.children, obj);
   }
}
createElementsFromJSON(json.response, parent1)

setTimeout(() => { console.log(parent1.children) }, 3000)