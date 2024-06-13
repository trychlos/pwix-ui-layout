Package.describe({
    name: 'pwix:ui-layout',
    version: '2.0.2-rc',
    summary: 'Meteor package for responsive layout management',
    git: 'https://github.com/trychlos/pwix:ui-layout',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'UILayout'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:ui-layout' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'tracker', 'client' );
    api.use( 'reactive-dict', 'client' );
    api.use( 'reactive-var', 'client' );
    api.use( 'templating@1.0.6 || 1.4.4-rc300.2', 'client' );
    api.use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-beta.0', 'server' );
    api.addFiles( 'src/client/constants/breakpoints.less', 'client', { isImport: true });
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
