var https = require('https');

function getHTML (options, callback) {


  https.get(options, function (response) {
    
    response.setEncoding('utf8');

    var fullContent = "";

    response.on('data', function(content) {
      fullContent += content;
    });

    response.on('end', function() {
      callback(fullContent);
    });

  });
}

// function printHTML (html) {
//   console.log(html);
// }

// function printHTMLUpperCase (html) {
//   console.log(html.toUpperCase());
// }


// getHTML({
//     host: 'sytantris.github.io',
//     path: '/http-examples/step4.html'
//   }, printHTML);





// export default getHTML;  // Jeremy couldn't get this to work, tee hee

module.exports = {
  getHTML: getHTML,
}

