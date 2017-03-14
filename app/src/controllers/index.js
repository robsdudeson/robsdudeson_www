var pug = require('pug');

module.exports.set = function (router, pageHelper) {
    router.get("/", function (req, res) {
        var layout = pageHelper.templatesPath + 'layout.pug';
        var page = pageHelper.defaultPage();
        page.body = pageHelper.contentPath + 'index.pug';
        page.navOpts = pageHelper.createNavOpts(true);
        page.bannerLines = {
            line1: "I develop web applications for Nationwide Insurance",
            line2: "This site will eventually house some shameless self advertising and sample projects"
        };

        res.render(layout, {page: page, templateRender: pug.renderFile});
    });
};