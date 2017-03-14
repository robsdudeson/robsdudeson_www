var pug = require('pug');

module.exports.set = function (router, page_helper) {
    router.get("/about", function (req, res) {
        var layout = page_helper.templatesPath + 'layout.pug';
        var page = page_helper.defaultPage();
        page.body = page_helper.contentPath + 'about.pug';
        page.navOpts = page_helper.createNavOpts(null, true);
        page.whoAmI = 'I\'m a 28 year old developer that enjoys spending time with his family and learning about technology.';
        page.schools = {
            osu : {
                name : "The Ohio State University",
                graduationDate : "Aug-2011",
                degree : 'Computer Science and Engineering'
            }
        };
        page.jobs = {
            nationwide: {
                company: 'Nationwide Insurance',
                title: 'Sr. Developer, Internet Applications',
                startDate: 'Jan-2016',
                endDate: 'current',
                description: 'Worked as a full stack developer on the Auto Insurance website.  Actively participated in daily stand-up meetings on an agile team.  Did some other pretty cool things that involved stuff...'
            },
            careworks: {
                company: 'Careworks Tech',
                title: 'Developer II',
                startDate: 'Apr-2015',
                endDate: 'Jan-2016',
                description: 'Worked under contract with a local insurance company on their customer facing website.'
            },
            chase: {
                company: "J.P. Morgan Chase & Co.",
                title: "Application Developer",
                startDate: "Jan-2012",
                endDate: "Apr-2015",
                description: "Worked on some internal tools"
            }
        };
        res.render(layout, {page: page, templateRender: pug.renderFile});
    });
};