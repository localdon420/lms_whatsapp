var LMS = require("./lms");

var lms = new LMS("dgoyal5_be22@thapar.edu","@Anu123456");

void async function(){
    await lms.login();
    var crs = await lms.getCourses();
    // console.log(crs);
    const fs = require('fs');

    fs.writeFile('events.json', crs, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Data has been written to the file.');
        }
      });
}();
