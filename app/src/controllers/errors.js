var pug = require('pug');

module.exports.set = function (app, router, pageHelper) {
    router.get("/404", function (req, res) {
        var layout = pageHelper.templatesPath + 'layout.pug';
        var page = pageHelper.defaultPage();
        page.body = pageHelper.contentPath + '404.pug';
        page.navOpts = pageHelper.createNavOpts();

        res.render(layout, {page: page, templateRender: pug.renderFile});
    });
};