const pageData = require('./page')
function parent(page, parentContainer) {
   childFunction1(page.layout, parentContainer)
}

function childFunction1(pageLayout, parentContainer) {
   pageLayout.map((pageWidget, pageWidgetIndex) => {
      childFunction2(pageWidget, parentContainer)
   })

}

function childFunction2(pageWidget, parentContainer) {
   let localName = pageWidget.localName
   switch (localName) {
      case div:
         if (pageWidget.className.indexof('panel ') >= 0) {
            // parent div
            const classes = pageWidget.className;
            let div = document.createElement('div');
            div.setAttribute('class', classes);
            // child div
            let divChild1 = document.createElement('div');
            divChild1.innerHTML = pageWidget.children[0].innerHtml;
            // child div
            let divChild2 = document.createElement('div');
            if (pageWidget.children[1].children && pageWidget.children[1].children.length) {
               childFunction1(pageWidget.children[1].children, divChild2)
            }
            // add page-render to divchild2
            div.appendChild(divChild1)
            div.appendChild(divChild2)
            parentContainer.appendChild(div)
         } else if (pageWidget.className.indexOf('iframe ') >= 0) {
            let div = document.createElement('div');
            div.setAttribute('class', pageWidget.className)
            let iframe = document.createElement('iframe');
            iframe.src = pageWidget.title;
            div.appendChild(iframe)
            parentContainer.appendChild(div);
         }
         else if (pageWidget.id && pageWidget.id.indexOf('data-grid') >= 0) {
            let div = document.createElement('div');
            div.classList.add('grid-selector');
            let divChild1 = document.createElement('div');
            divChild1.classList.add("clear-fix");
            let divChild2 = document.createElement('div');
            divChild2.classList.add("row");
            let divChild21 = document.createElement('div');
            divChild21.classList.add("col-sm-12");
            // if (gridSetting && gridSetting?.style === 'List') {
            //    let divChild211 = document.createElement('ul');
            //    divChild211.classList.add('list-group');
            //    gridSetting?.grid.gridData.map((gridItem, gridItemIndex) => {
            //       let li = document.createElement('li');
            //       li.classList.add('tbl-item clearfix')
            //       let i = document.createElement('i');
            //       i.setAttribute('class', `fa ${gridSetting?.selectedListIcon}`)
            //       li.appendChild(i);
            //       gridSetting?.grid.gridColumns.map((colData, colIndex) => {
            //          let span = document.createElement('span');
            //          if (gridItem['widgetInformations'][colData.dataField] !== 'FileUpload') {
            //             let spanChild1 = document.createElement('span');
            //             if (colIndex === 0) {
            //                let spanChild11 = document.createElement('span');
            //                spanChild11.innerHTML = `I interferred here&nbsp;${gridItem[colData.dataField]}`
            //                spanChild1.appendChild(spanChild11)
            //             } else {
            //                spanChild1.innerHTML = `${i !== 0 ? gridItem[colData.dataField] + '&nbsp; ' : ''}&nbsp;`
            //             }
            //             span.appendChild(spanChild1)
            //          }
            //          if (gridItem[colData.dataField] !== '' && gridItem['widgetInformations'][colData.dataField] === 'FileUpload') {
            //             let a = document.createElement('a');
            //             a.href = `${downloadLink}/${gridItem[colData.dataField]}`;
            //             if (colIndex === 0) {
            //                let spanChild11 = document.createElement('span');
            //                spanChild11.innerHTML = `&nbsp;${removeFileExtension(gridItem[colData.dataField])}`
            //                spanChild1.appendChild(spanChild11)
            //             } else {
            //                spanChild1.innerHTML = `${i !== 0 && gridItem[colData.dataField] ? removeFileExtension(gridItem[colData.dataField]) : ''}&nbsp;`;
            //             }
            //             span.appendChild(a)
            //          }
            //          li.appendChild(span);
            //       })
            //       divChild211.appendChild(li);
            //    })
            //    divChild21.appendChild(divChild211);
            // }
            divChild2.appendChild(divChild21)
            div.appendChild(divChild1)
            div.appendChild(divChild2);


         } else if (pageWidget.className.indexOf('tab-control') >= 0) {

         } else if (pageWidget.className.indexOf('customHtml') >= 0) {

         } else if (pageWidget.children.length > 0) {

         } else if (pageWidget.className.indexOf('entity-widget') >= 0) {

         } else if (pageWidget.children && pageWidget.children.length === 0) {
            let div = document.createElement('div');
            div.setAttribute("class", pageWidget.className);
            div.setAttribute("id", pageWidget.id);
            parentContainer.appendChild(div);
         }
         break;
      case img:

         break;
      case button:

         break;
      case h1:
         let h1 = document.createElement('h1')
         parentContainer.appendChild(h1)
         break;
      case h2:

         break;
      case h3:

         break;
      case h4:

         break;
      case h5:

         break;
      case h6:

         break;
      case label:

         break;
      case span:

         break;
      default:
         break;
   }
}
function removeFileExtension(name) {
   return '';
}

let parentContainer = document.createElement('div');
parentContainer.setAttribute('id', 'main-div')
// let parentContainer = `<div id="main-div">$$CHILDREN$$</div>`
parent(pageData.page, parentContainer)
setTimeout(() => {
   console.log(parentContainer)
}, 3000);