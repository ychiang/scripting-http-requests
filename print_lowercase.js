var getHTML = require('./http-functions').getHTML;


function printHTMLlowerCase (html) {
  console.log(html.toLowerCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


getHTML(requestOptions, printHTMLlowerCase);