Package.describe({
    name: 'pwix:layout',
    version: '1.2.3-rc',
    summary: 'Client-only Meteor package for responsive layout management',
    git: 'https://github.com/trychlos/pwix:layout',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'uiLayout',
        'UI_XS_WIDTH',
        'UI_SM_WIDTH',
        'UI_MD_WIDTH',
        'UI_ST_WIDTH',
        'UI_LG_WIDTH',
        'UI_VERBOSE_NONE',
        'UI_VERBOSE_CONFIGURE',
        'UI_VIEW_XS',
        'UI_VIEW_SM',
        'UI_VIEW_MD',
        'UI_VIEW_ST',
        'UI_VIEW_LG',
        'UI_VIEW_XL'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
    api.addFiles( 'src/client/css/ui_constants.less', 'client', { isImport: true });
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:layout' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.9.0' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'tracker', 'client' );
    api.use( 'reactive-dict', 'client' );
    api.use( 'reactive-var', 'client' );
    api.use( 'tmeasday:check-npm-versions@1.0.2', 'server' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
