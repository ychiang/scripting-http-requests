var getHTML = require('./http-functions').getHTML;


function printHTMLreverse (html) {
  console.log(html.toUpperCase());
}

function reverse (strings){
  var reversedContent = getHTML.split("").reverse.join("");
  return reversedContent;
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


getHTML(requestOptions, printHTMLreverse);