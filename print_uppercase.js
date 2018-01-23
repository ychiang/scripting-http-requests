var getHTML = require('./http-functions').getHTML;


function printHTMLUpperCase (html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


getHTML(requestOptions, printHTMLUpperCase);