module.exports = function (templatesPath, contentPath, includesPath) {
    return {
        templatesPath: templatesPath,
        contentPath: contentPath,
        includesPath: includesPath,
        createNavOpt: function (name, href, active) {
            return {
                name: name,
                href: href,
                active: active
            };
        },
        createNavOpts: function (home, about, contact) {
            return {
                home: this.createNavOpt("Home", "/", home),
                about: this.createNavOpt("About Me", "/about", about),
                contact: this.createNavOpt("Contact Me", "/contact", contact)
            };
        },
        defaultPage: function () {
            return {
                title: 'Robby Thompson - Software Engineer',
                head: this.includesPath + 'head.pug',
                navigation: this.includesPath + 'navigation.pug',
                banner: this.includesPath + 'banner.pug',
                body: this.contentPath + 'index.pug',
                footer: this.includesPath + 'copyright.pug',
                styles: this.includesPath + 'styles.pug',
                scripts: this.includesPath + 'scripts.pug',
                navOpts: this.createNavOpts()
            };
        }
    }
};