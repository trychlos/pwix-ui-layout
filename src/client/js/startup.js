/*
 * pwix:layout/src/cient/js/startup.js
 */

Meteor.startup(() => {
    console.log( 'pwix:layout/src/client/js/startup.js uiLayout=', uiLayout );
});

Meteor.startup(() => {
    window.addEventListener( 'resize', () => {
        uiLayout.resizeListener();
    });
});
