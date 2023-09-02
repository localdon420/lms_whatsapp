var LMS = require("./lms");

var lms = new LMS("dgoyal5_be22@thapar.edu","@Anu123456");

void async function(){
    await lms.login();
    var crs = await lms.getCourses();
    console.log(crs);
    // await lms.loadSavedEvents();
}();
