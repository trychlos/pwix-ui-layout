Package.describe({
    name: 'pwix:layout',
    version: '1.0.0',
    summary: 'Client-only Meteor package for layout management',
    git: 'https://github.com/trychlos/pwix:layout',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'uiLayout',
        'UI_SM_WIDTH',
        'UI_MD_WIDTH',
        'UI_VIEW_N',
        'UI_VIEW_MD',
        'UI_VIEW_SM',
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.addFiles( 'src/client/css/ui_layout.less', 'client', { isImport: true });
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:layout' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.9.1' );
    api.use( 'ecmascript', 'client' );
    api.use( 'less', 'client' );
    api.use( 'tracker', 'client' );
    api.use( 'reactive-dict', 'client' );
    api.use( 'reactive-var', 'client' );
}

Npm.depends({
    'detect-it': '4.0.1'
});
