var jso = {
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
var parent = document.createElement('div');
// let contents = fs.readFileSync('./div.html', 'utf8')
// fs.writeFileSync('./output.html', contents)
function createElementsFromJSON(json, parent) {
   for (var i in json) {
      var object = json[i];

      var obj = document.createElement(object.element);

      for (var tag in object)
         if (tag != "children" && tag != "element")
            obj.setAttribute(tag, object[tag]);
      parent.appendChild(obj);

      if (typeof (object.children) == "object")
         createElementsFromJSON(object.children, obj);
   }
}
createElementsFromJSON(jso.response, parent)

setTimeout(function () {
   document.getElementById('samin').appendChild = parent

}, 3000);