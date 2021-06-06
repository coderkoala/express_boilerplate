'use strict';
const fs = require('fs');

class rootDocumentController {

  async view( req, res, next ) {
    await fs.readFile(__dirname + '/../views/serve/index.html', 'utf8' , (err, data) => { 
      // serve pre-rendered html file that's built for production.
      res.send(data);
    });
  }
}


module.exports = new rootDocumentController();
