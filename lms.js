const Request = require('request-promise');



class LMS{
    username;
    password;
    req;
    sessKey;

    constructor(username,password){
        this.username = username;
        this.password = password;
        
        var cookieJar = Request.jar();
        this.req = Request.defaults({jar:cookieJar});
    }

    async login(){
        // login to lms

        // get csrf token
        var res = await this.req.get("https://lms.thapar.edu/moodle/login/");
        var csrfToken = res.match(/name="logintoken" value="(.*)"/)[1];


        //start login
        var loginRes = await this.req.post("https://lms.thapar.edu/moodle/login/index.php",{
            form:{
                username:this.username,
                password:this.password,
                logintoken:csrfToken
            },
            resolveWithFullResponse : true,
            followAllRedirects : true
        });

        var sessKey = loginRes.body.match(/name="sesskey" value="(.*)"/)[1];
        this.sessKey = sessKey;
        console.log(sessKey);

    }

    async getCourses(){
      if(!this.sessKey){
          throw new Error("Not logged in");
      }else{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        var data = JSON.stringify(
            [
                {
                  'index': 0,
                  'methodname': 'core_calendar_get_calendar_monthly_view',
                  'args': {
                    'year': year,
                    'month': month,
                    'courseid': 1,
                    'categoryid': 0,
                    'includenavigation': true,
                    'mini': true,
                    'day': 29,
                  }
                }
              ]
        );
        var events = await this.req.post(`https://lms.thapar.edu/moodle/lib/ajax/service.php?sesskey=${this.sessKey}&info=core_calendar_get_calendar_monthly_view`,{
        body:data,
        });
        events = JSON.parse(events);



        events = events[0];
        events = events.data;
        events = events.weeks;

        var finalEvents = [];

        events.forEach(week => {
            // console.log(week);

            week.days.forEach(day => {
                 day.events.forEach(event => {
                    finalEvents.push(event);
                 });
            });
            
        });

        return JSON.stringify(finalEvents);

      }
    }
}

module.exports = LMS;